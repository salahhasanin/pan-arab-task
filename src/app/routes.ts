import { EachArticalComponent } from "./components/each-artical/each-artical.component";
import { AllArticalsComponent } from "./components/all-articals/all-articals.component";

import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: "allarticals", component: AllArticalsComponent },
  { path: "artical", component: EachArticalComponent },

  { path: "", redirectTo: "/allarticals", pathMatch: "full" },
  { path: "**", redirectTo: "/allarticals", pathMatch: "full" }
];
