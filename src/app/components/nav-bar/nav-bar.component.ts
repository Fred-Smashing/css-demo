import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  protected readonly selectorRoute: string = "selectors-combinators";
  protected readonly pseudoRoute: string = "pseudo-classes-elements";
  protected readonly atRulesRoute: string = "at-rules";
  protected readonly functionsRoute: string = "functions";

  constructor(private router: Router) {
  }

  public NavigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
