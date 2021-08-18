exports.isFolder = (path) => !path.match(RegExp('^(.+[.]{1}([a-z0-9]+))$'));
exports.isOnLib = (path) => path.match("/lib/");
exports.isDartFile = (path) => path.endsWith(".dart")
exports.isTestFile = (path) => path.endsWith("_test.dart");