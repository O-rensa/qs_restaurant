import { Routes } from "@angular/router";
import { AccountComponent } from "./account.component";
import { LoginComponent } from "./login/login.component";

export const ACCOUNTROUTES: Routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      }
    ]
  }
];