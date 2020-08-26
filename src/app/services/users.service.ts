import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor() {}
  subject = new Subject<string>();
  usersubject = new Subject<string>();

  userdata = [
    {
      id: 1,
      username: "sidhupuspa",
      email: "sidhupuspa@gmail.com",
      password: "111111",
    },
    {
      id: 2,
      username: "Dibya",
      email: "dibyaRanjan@gmail.com",
      password: "111112",
    },
    {
      id: 3,
      username: "manas",
      email: "manasranjan@gmail.com",
      password: "111113",
    },
  ];
  postData(username: string, email: string, password: string) {
    let user = this.userdata.filter((user) => user.email === email);
    if (user && user.length != 0) {
      this.setMessage("User already exist");
    } else {
      let userinput = {
        username: username,
        email: email,
        password: password,
        id: this.userdata.length + 1,
      };

      this.userdata.push(userinput);
      this.setMessage("Registered successfully");
    }
    return this.userdata;
  }
  getData(email: string, password: string) {
    let useremail = this.userdata.filter(
      (user) => user.email === email && user.password === password
    );

    if (useremail && useremail.length != 0) {
      this.setMessage("login successfully");
      this.setuserName(useremail[0].username);
    } else {
      this.setMessage("username or password is incorrect");
    }
    return this.userdata;
  }
  setMessage(value: string) {
    this.subject.next(value);
  }
  setuserName(value: string) {
    this.usersubject.next(value);
  }
}
