import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registereduser",
  templateUrl: "./registereduser.component.html",
  styleUrls: ["./registereduser.component.css"],
})
export class RegistereduserComponent implements OnInit, OnDestroy {
  constructor(private userservice: UsersService, private route: Router) {}

  ngOnInit() {
    this.userservice.usersubject.subscribe((name) => {
      sessionStorage.setItem("username", name);
    });
  }
  user = sessionStorage.getItem("username");
  users = "";
  homePage() {
    this.route.navigate(["/home"]);
  }
  ngOnDestroy() {
    sessionStorage.clear();
  }
}
