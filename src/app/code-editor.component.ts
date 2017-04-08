import {Component} from '@angular/core';
import {Robot} from "./robot/robot";
import {RobotFactory} from "./services/robots-factory";

interface RobotInterface {
    id: number,
    script: string
}

@Component({
    selector: 'code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: [ './code-editor.component.css' ]
})
export class CodeEditorComponent {
    private activeRobot: number;
    private robots: RobotInterface[];
    private activeRobotScript: string;
    constructor( private robotFactory: RobotFactory) {};

    onRobotChosen(id: number) {
        this.robotFactory.scripts.set(this.activeRobot, this.activeRobotScript);
        this.activeRobot = id;
        this.activeRobotScript = this.robotFactory.scripts.get(id);
    }

    onRunButtonClick() {
        this.robotFactory.run();
    }
}

