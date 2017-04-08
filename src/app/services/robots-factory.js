"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var robot_1 = require("../robot/robot");
var main_loop_1 = require("../code-interpreter/main-loop");
var typescript_map_1 = require("typescript-map");
var RobotFactory = (function () {
    function RobotFactory() {
        var _this = this;
        this.robots = [];
        this.scripts = new typescript_map_1.TSMap();
        this.robots.push(new robot_1.Robot());
        this.robots.push(new robot_1.Robot());
        this.robots.push(new robot_1.Robot());
        this.robots.forEach(function (robot) {
            var robotId = robot.getId();
            main_loop_1.MainLoop.addLoop(robotId);
            var variables = new typescript_map_1.TSMap();
            variables.set("robot" + robotId, robot);
            main_loop_1.MainLoop.addVariables(robotId, variables);
            _this.scripts.set(robotId, '');
        });
    }
    RobotFactory.prototype.run = function () {
        this.scripts.forEach(function (script, id) {
            main_loop_1.MainLoop.setScript(id, script);
        });
        main_loop_1.MainLoop.run();
    };
    return RobotFactory;
}());
exports.RobotFactory = RobotFactory;
//# sourceMappingURL=robots-factory.js.map