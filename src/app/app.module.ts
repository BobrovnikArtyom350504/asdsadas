import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {SimulatorComponent} from "./simulator.component";
import {CodeEditorComponent} from "./code-editor.component";

import {RobotFactory} from "./services/robots-factory";






@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
      AppComponent,
      SimulatorComponent,
      CodeEditorComponent
  ],
  providers: [RobotFactory],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
