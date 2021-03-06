import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import { Bredcrumb } from './bredcrumb';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public breadcrumbs: Bredcrumb[];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.generateBredcrumbs();
    this.isLogin();
  }
  private isLogin() {
    let login = this.authService.is_login();
    if (!login) {
      this.router.navigate(['auth/singin']);
    }
  }
  private generateBredcrumbs() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }
  private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: Bredcrumb[] = []): Bredcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //get the child routes
    let children: ActivatedRoute[] = route.children;

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: Bredcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

}
