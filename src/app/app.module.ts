import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SelectorsCombinatorsComponent } from './components/selectors-combinators/selectors-combinators.component';
import { PseudoClassesElementsComponent } from './components/pseudo-classes-elements/pseudo-classes-elements.component';
import { AtRulesComponent } from './components/at-rules/at-rules.component';
import { FunctionsComponent } from './components/functions/functions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SelectorsCombinatorsComponent,
    PseudoClassesElementsComponent,
    AtRulesComponent,
    FunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
