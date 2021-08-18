# Flutter Mimic

## Features

All the *.dart files and/or folders that you create/rename/move in test or lib folder will be mirrored in the other.

Limitations:
It only mimics .dart files and folders, it wont work with any other extension file. This is a open-source project so feel free to
extend and change this behaviour.

**ATTENTION: Only for *.dart files and folders**

Deletion, i choose not to automatic delete. So for deletion you have to do it all by hand. This is to avoid, accidental
deletions of test suites.

## Known Issues

I didnt find a way to identify directories by some sort of concrete type, so folders are identified by not having a
extension (example "*.mp4"). Dont know if this can cause any issue, but avoid using dots on folder names.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Mimics *.dart files in folders lib and test

-----------------------------------------------------------------------------------------------------------

### LICENSE

Copyright <2021> <COPYRIGHT ItzBala>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
