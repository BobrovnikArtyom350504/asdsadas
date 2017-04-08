import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CodeEditorComponent} from "./code-editor.component";
import {SimulatorComponent} from "./simulator.component";

const routes: Routes = [
    { path: '', redirectTo: '/code-editor', pathMatch: 'full' },
    { path: 'code-editor',  component: CodeEditorComponent },
    { path: 'simulator', component: SimulatorComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}