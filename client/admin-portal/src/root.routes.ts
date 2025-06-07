import { Routes } from '@angular/router';

export const ROOTROUTES: Routes = [
  {
    path: "account",
    loadChildren: () => import("./account/account.routes").then(m => m.ACCOUNTROUTES)
  },
  {
    path: "",
    redirectTo: "account",
    pathMatch: "full"
  }
];
