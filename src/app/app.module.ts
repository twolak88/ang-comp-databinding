import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerFormComponent } from './server-form/server-form.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { GameOddComponent } from './game-odd/game-odd.component';
import { GameEvenComponent } from './game-even/game-even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerFormComponent,
    ServerElementComponent,
    GameControlComponent,
    GameOddComponent,
    GameEvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
