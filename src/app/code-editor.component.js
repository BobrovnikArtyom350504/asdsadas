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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var robots_factory_1 = require("./services/robots-factory");
var CodeEditorComponent = (function () {
    function CodeEditorComponent(robotFactory) {
        this.robotFactory = robotFactory;
    }
    ;
    CodeEditorComponent.prototype.onRobotChosen = function (id) {
        this.robotFactory.scripts.set(this.activeRobot, this.activeRobotScript);
        this.activeRobot = id;
        this.activeRobotScript = this.robotFactory.scripts.get(id);
    };
    CodeEditorComponent.prototype.onRunButtonClick = function () {
        this.robotFactory.run();
    };
    return CodeEditorComponent;
}());
CodeEditorComponent = __decorate([
    core_1.Component({
        selector: 'code-editor',
        templateUrl: './code-editor.component.html',
        styleUrls: ['./code-editor.component.css']
    }),
    __metadata("design:paramtypes", [robots_factory_1.RobotFactory])
], CodeEditorComponent);
exports.CodeEditorComponent = CodeEditorComponent;
//# sourceMappingURL=code-editor.component.js.map