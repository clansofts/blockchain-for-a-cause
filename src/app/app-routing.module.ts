import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "mi-cuenta",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "loans",
        loadChildren: "./loan/loan.module#LoanModule"
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
