import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./page/home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from "./home.routing";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
