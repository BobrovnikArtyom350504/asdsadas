import {Robot} from "../robot/robot";
import {MainLoop} from "../code-interpreter/main-loop";
import { TSMap as Map } from "typescript-map";
export class RobotFactory {
    robots: Robot[] = [];
    scripts: Map<number, string> = new Map<number, string>();
    constructor() {
        this.robots.push(new Robot());
        this.robots.push(new Robot());
        this.robots.push(new Robot());
        this.robots.forEach((robot)=>{
            let robotId = robot.getId();
            MainLoop.addLoop(robotId);
            let variables = new Map<string, any>();
            variables.set(`robot${robotId}`, robot);
            MainLoop.addVariables(robotId, variables);
            this.scripts.set(robotId, '');
        });
    }

    run() {
        this.scripts.forEach((script, id)=>{
            MainLoop.setScript(id, script);
        });
        MainLoop.run();
    }
}