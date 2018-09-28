"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var image_source_1 = require("tns-core-modules/image-source");
var file_system_1 = require("tns-core-modules/file-system");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var imgFromResources = image_source_1.fromResource("icon");
    vm.set("imageFromResources", imgFromResources);
    var folder = file_system_1.knownFolders.currentApp();
    var folderPath = file_system_1.path.join(folder.path, "images/logo.png");
    var imageFromLocalFile = image_source_1.fromFile(folderPath);
    vm.set("imageFromResourcesLocalFile", imageFromLocalFile);
    var imageFromBase64 = image_source_1.fromBase64(base64string);
    vm.set("imageFromBase64", imageFromBase64);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
var base64string = "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";