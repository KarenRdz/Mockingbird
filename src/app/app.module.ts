import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './components/Home/home.component'
import { ParentSession } from './components/ParentSession/parent-session.component'
import { appRoutes } from './routes/app.routes'
import { NavBar } from './components/NavBar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    ParentSession,
    NavBar
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
