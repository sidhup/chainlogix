import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    this.userservice.subject.subscribe((message) => {
      alert(message);
      this.route.navigate(["/registered"]);
    });
  }
  constructor(private route: Router, private userservice: UsersService) {}
  @ViewChild("f", { static: false }) signinForm: NgForm;
  onSubmit() {
    let data = this.userservice.getData(
      this.signinForm.form.value.email,
      this.signinForm.form.value.password
    );
    this.signinForm.reset();
  }

  signuppage() {
    this.route.navigate(["/signup"]);
  }
}
