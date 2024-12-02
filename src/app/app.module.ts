import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [AppComponent, AboutComponent

  ],
  imports: [BrowserModule, RouterOutlet, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
