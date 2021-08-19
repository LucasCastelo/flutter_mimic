const mkdirp = require('mkdirp');
const vscode = require('vscode');
const { isDartFile, isFolder, isOnLib, isTestFile } = require("./helpers");

exports.renameHandler = (file) => {
    let newUri = file.newUri.path;
    let oldUri = file.oldUri.path;

    if (isOnLib(oldUri)) {
        newUri = newUri.replace("/lib/", "/test/")
        oldUri = oldUri.replace("/lib/", "/test/")
    } else {
        newUri = newUri.replace("/test/", "/lib/");
        oldUri = oldUri.replace("/test/", "/lib/");
    }

    if (isDartFile(oldUri)) {
        if (isTestFile(oldUri)) {
            newUri = newUri.replace("_test.dart", ".dart");
            oldUri = oldUri.replace("_test.dart", ".dart");
        } else {
            oldUri = oldUri.replace(".dart", "_test.dart");
            newUri = newUri.replace(".dart", "_test.dart");
        }
    }

    renameFile(oldUri, newUri);
}

exports.createHandler = (e, onSuccess) => {
    let path = e.path;

    if (isOnLib(path)) {
        path = path.replace("/lib/", "/test/");
    } else {
        path = path.replace("/test/", "/lib/");
    }

    if (isFolder(path)) {
        createFolder(path);
        return;
    }

    if (isDartFile(path)) {
        if (isTestFile(path)) {
            path = path.replace('_test.dart', '.dart');
        } else {
            path = path.replace('.dart', '_test.dart');
        }
        createFile(path, onSuccess);
    }
};

const createFolder = (filePath) => {
    mkdirp(vscode.Uri.parse(filePath).fsPath);
}

const createFile = (filePath, onSuccess) => {
    let wsedit = new vscode.WorkspaceEdit();
    wsedit.createFile(vscode.Uri.parse(filePath), { ignoreIfExists: true });
    vscode.workspace.applyEdit(wsedit);
    onSuccess()
}

const renameFile = (oldUri, newUri) => {
    let wsedit = new vscode.WorkspaceEdit();
    wsedit.renameFile(vscode.Uri.parse(oldUri), vscode.Uri.parse(newUri), { ignoreIfExists: false });
    vscode.workspace.applyEdit(wsedit);
}