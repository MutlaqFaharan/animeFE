import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Translate } from 'src/app/core/services/translate.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, TranslateModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [Translate],
})
export class LayoutModule {}
