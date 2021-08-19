const vscode = require('vscode');
const { createHandler, renameHandler } = require('./src/handlers');
const { isTestFile } = require('./src/helpers');

function activate(context) {
	vscode.window.showInformationMessage("Flutter Mimic Active!");
	let nextActionIsRename = false;
	let watcher = vscode.workspace.createFileSystemWatcher('**/*')

	watcher.ignoreCreateEvents = false;
	watcher.ignoreChangeEvents = true;
	watcher.ignoreDeleteEvents = true;

	watcher.onDidCreate((e) => {
		if (nextActionIsRename) {
			nextActionIsRename = false;
		} else {
			if (!e.path.endsWith('test.dart')) {
				vscode.window.showInformationMessage(
					"Flutter Mimic: You just created a new Dart file. Do you want to create a mirrored test file?",
					...["Yes", "No"]
				).then((answer) => {
					answer === "Yes"
						? createHandler(e, () => { vscode.window.showInformationMessage("Flutter Mimic: File create!") })
						: vscode.window.showInformationMessage("Flutter Mimic: Nothing done!")

				})
			}
		}
	})

	vscode.workspace.onDidRenameFiles((e) => {
		nextActionIsRename = true;
		e.files.forEach((file) => {
			renameHandler(file);
		})
		vscode.window.showInformationMessage("Adjusment made");
	})

	vscode.workspace.onDidDeleteFiles((e) => {
		vscode.window.showInformationMessage("Flutter Mimic: Files arent deleted automatic.");
	});

	context.subscriptions.push(watcher);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
