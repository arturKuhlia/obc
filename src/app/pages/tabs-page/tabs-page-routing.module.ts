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
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [

  {
    path: "tabs",
    component: TabsPage,
    children: [
            

      { path: 'sign-in', component: SignInComponent},
      { path: 'register-user', component: SignUpComponent}, 
      { path: 'forgot-password', component: ForgotPasswordComponent },

      { path: 'search', component: SearchComponent },
      { path: 'verify-email-address', component: VerifyEmailComponent },
      {
        path: "account",
        component: AccountComponent, 
      },
        {
    path: 'support',
    loadChildren: () => import('../support/support.module').then(m => m.SupportModule)
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
      { path: "allblogs/:id", component: BlogComponent },

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
        canActivate: [AuthGuard],
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
