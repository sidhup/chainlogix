import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-signuppage",
  templateUrl: "./signuppage.component.html",
  styleUrls: ["./signuppage.component.css"],
})
export class SignuppageComponent implements OnInit {
  constructor(private routes: Router, private userservice: UsersService) {}
  @ViewChild("f", { static: false }) signupForm: NgForm;
  ngOnInit() {
    this.userservice.subject.subscribe((message) => {
      alert(message);
      this.routes.navigate(["/home"]);
    });
  }
  onSubmit() {
    let data = this.userservice.postData(
      this.signupForm.form.value.UserName,
      this.signupForm.form.value.email,
      this.signupForm.form.value.password
    );
    this.signupForm.reset();
  }
  loginPage() {
    this.routes.navigate(["/login"]);
  }
}
