const vscode = require('vscode');
const { createHandler, renameHandler } = require('./src/handlers');

function activate(context) {
	let nextActionIsRename = false;
	let watcher = vscode.workspace.createFileSystemWatcher('**/*')

	watcher.ignoreCreateEvents = false;
	watcher.ignoreChangeEvents = true;
	watcher.ignoreDeleteEvents = true;
	
	watcher.onDidCreate((e)=>{
		if(nextActionIsRename){ 
			nextActionIsRename = false;
		}else{
			createHandler(e);
			vscode.window.showInformationMessage("Flutter Mimic: File create!")
		}
	})

	vscode.workspace.onDidRenameFiles((e)=>{
		nextActionIsRename = true;
		e.files.forEach((file)=>{
			renameHandler(file);
		})
		vscode.window.showInformationMessage("Adjusment made");
	})

	vscode.workspace.onDidDeleteFiles((e)=>{
		vscode.window.showInformationMessage("Flutter Mimic: Files arent deleted automatic.");
	})

	context.subscriptions.push(watcher);
} 

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
