import { BlogCardComponent } from "./../blog-card/blog-card.component";
import { BlogComponent } from "./../blog/blog.component";
import { BlogEditorComponent } from "./../blog-editor/blog-editor.component";
import { DocPage } from "./../doc/doc";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs-page";
import { SchedulePage } from "../schedule/schedule";
import { AuthGuard } from "../../guards/auth.guard";
import { AdminAuthGuard } from "../../guards/admin-auth.guard";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "addpost",
        component: BlogEditorComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "editpost/:id",
        component: BlogEditorComponent,
        canActivate: [AdminAuthGuard],
      },
      { path: "blog/:id/:slug", component: BlogComponent },

      { path: "allblogs", component: BlogCardComponent },
      {
        path: "schedule",
        children: [
          {
            path: "",
            component: SchedulePage,
          },
          {
            path: "session/:sessionId",
            loadChildren: () =>
              import("../session-detail/session-detail.module").then(
                (m) => m.SessionDetailModule
              ),
          },
        ],
      },
      {
        path: "doc",
        children: [
          {
            path: "",
            component: DocPage,
          },
          {
            path: ":id",
            loadChildren: () =>
              import("../doc-detail/doc-detail.module").then(
                (m) => m.DocDetailModule
              ),
          },
        ],
      },

      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../about/about.module").then((m) => m.AboutModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/app/tabs/schedule",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
