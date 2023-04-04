import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';

const routes: Routes = [
  { path: 'example-1', component: Example1Component },
  { path: 'example-2', component: Example2Component },
  { path: 'example-3', component: Example3Component },
  { path: 'example-4', component: Example4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
