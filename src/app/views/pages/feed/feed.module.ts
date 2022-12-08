import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { Role } from 'src/app/core/shared/enums/role.enum';
import { AdminComponent } from './admin/admin.component';
import { FeedComponent } from './feed.component';
import { QaComponent } from './qa/qa.component';

@NgModule({
  declarations: [AdminComponent, QaComponent, FeedComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: Role.Admin,
        },
      },
      {
        path: 'qa',
        component: QaComponent,
        data: {
          expectedRole: Role.QA,
        },
      },
    ]),
  ],
})
export class FeedModule {}
