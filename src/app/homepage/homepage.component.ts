import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  loginPage() {
    this.route.navigate(["/login"]);
  }
  signupage() {
    this.route.navigate(["/signup"]);
  }
}
