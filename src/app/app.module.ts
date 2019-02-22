import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './components/Home/home.component'
import { ParentSession } from './components/ParentSession/parent-session.component'
import { appRoutes } from './routes/app.routes'

@NgModule({
  declarations: [
    AppComponent,
    Home,
    ParentSession
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
