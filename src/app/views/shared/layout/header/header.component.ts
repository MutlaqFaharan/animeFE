import { Component } from '@angular/core';
import { Translate } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly translateService: Translate) {}

  changeLanguage() {
    this.translateService.setLanguage(
      this.translateService.getSelectedLanguage() === 'en' ? 'ar' : 'en'
    );
  }
}
