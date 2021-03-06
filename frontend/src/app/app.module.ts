import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./components/list/list.component";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
import { RouterModule, Routes } from "@angular/router";
import { ToolbarModule } from "primeng/toolbar";

const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "list", component: ListComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, ListComponent, CreateComponent, EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
