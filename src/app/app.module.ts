import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPageComponent } from './new-page/new-page.component';
import { AwesomeComponentComponent } from './awesome-component/awesome-component.component';
import { TestComponent } from './test/test.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { NotComponent } from './not/not.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPageComponent,
    AwesomeComponentComponent,
    TestComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    NotComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
