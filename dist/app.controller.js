"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyController = void 0;
const common_1 = require("@nestjs/common");
let MyController = class MyController {
    getHelloGorgeousPeople() {
        return 'Hello Gorgeous People!';
    }
    getHelloAmazingPeople() {
        return 'Hello Amazing People!';
    }
    createamazingpeople(req) {
        return `New person add ${req.name}`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyController.prototype, "getHelloGorgeousPeople", null);
__decorate([
    common_1.Get('/amazing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyController.prototype, "getHelloAmazingPeople", null);
__decorate([
    common_1.Post('/amazing'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyController.prototype, "createamazingpeople", null);
MyController = __decorate([
    common_1.Controller()
], MyController);
exports.MyController = MyController;
//# sourceMappingURL=app.controller.js.map