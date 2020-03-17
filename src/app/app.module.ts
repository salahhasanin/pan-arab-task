import { ArticalService } from "./services/artical.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AllArticalsComponent } from "./components/all-articals/all-articals.component";
import { EachArticalComponent } from "./components/each-artical/each-artical.component";
import { RouterModule } from "../../node_modules/@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { appRoutes } from "./routes";
@NgModule({
  declarations: [AppComponent, AllArticalsComponent, EachArticalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
