import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { Role } from './core/shared/enums/role.enum';
import { BaseComponent } from './views/base/base.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/views/pages/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [],
  },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: [Role.Admin, Role.QA],
    },
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('../app/views/pages/feed/feed.module').then(
            (m) => m.FeedModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
