import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  constructor(private sessionService: SessionService) {}
  ngOnInit(): void {
    this.sessionService.redirectToRoleByToken();
  }
}
