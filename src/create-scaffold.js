const mkdirp = require('mkdirp');
const vscode = require('vscode');

exports.createScaffold = () => {
    vscode.window.showInformationMessage('Hello World from facily_scaffold!');
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test");
    
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/controller");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/data");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/data/remote");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/data/local");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/controller");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/data");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/data/remote");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/data/local");

    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/view");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/view/pages");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/view/widgets");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/view");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/view/pages");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/view/widgets");

    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/utils");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/utils/constants");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/lib/utils/helpers");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/utils");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/utils/constants");
    mkdirp(vscode.workspace.workspaceFolders[0].uri.fsPath + "/test/utils/helpers");
}