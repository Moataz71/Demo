import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AwesomeComponentComponent } from './awesome-component/awesome-component.component';
import { TestComponent } from './test/test.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { NotComponent } from './not/not.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'one',
    component: PageOneComponent
  },
  {
    path: 'two',
    component: PageTwoComponent
  },
  {
    path: 'three',
    component: PageThreeComponent
  },
  {
    path: '**',
    component: NotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
