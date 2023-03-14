import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtRulesComponent } from './components/at-rules/at-rules.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { PseudoClassesElementsComponent } from './components/pseudo-classes-elements/pseudo-classes-elements.component';
import { SelectorsCombinatorsComponent } from './components/selectors-combinators/selectors-combinators.component';

const routes: Routes = [
  { path: 'selectors-combinators', component: SelectorsCombinatorsComponent },
  { path: 'pseudo-classes-elements', component: PseudoClassesElementsComponent },
  { path: 'at-rules', component: AtRulesComponent },
  { path: 'functions', component: FunctionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
