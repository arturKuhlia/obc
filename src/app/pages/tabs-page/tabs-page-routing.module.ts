import { FavoritesComponent } from './../favorites/favorites.component'; 
import { BlogCardComponent } from "./../blog-card/blog-card.component";
import { BlogComponent } from "./../blog/blog.component";
import { BlogEditorComponent } from "./../blog-editor/blog-editor.component";
import { DocPage } from "./../doc/doc";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs-page"; 
import { AuthGuard } from "../../guards/auth.guard";
import { AdminAuthGuard } from "../../guards/admin-auth.guard";
import { AccountComponent } from '../account/account.component';

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
            
      {
        path: "account",
        component: AccountComponent, 
      },
      {
        path: "addpost",
        component: BlogEditorComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "addpost/:docId",
        component: BlogEditorComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "editpost/:id",
        component: BlogEditorComponent,
        canActivate: [AdminAuthGuard],
      },
      { path: "allblogs/:id/:slug", component: BlogComponent },

      { path: "allblogs",
      children: [
        {
          path: "",
          component: BlogCardComponent,
        },
        {
          path: ":pagenum",
          component: BlogCardComponent
            
        },
      ],},
      
      {
        path: "bookmarks",
        children: [
          {
            path: "",
            component: FavoritesComponent,
          }
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
        redirectTo: "/app/tabs/allblogs",
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
