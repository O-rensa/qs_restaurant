import { Component } from '@angular/core';
import { AccountHeaderComponent } from "./layout/account-header.component";
import { AccountFooterComponent } from './layout/account-footer.component';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  imports: [
    AccountHeaderComponent, 
    AccountFooterComponent, 
    RouterOutlet
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  title: string = "Admin Portal Login";

  constructor(private readonly _titleService: Title) {
    this._titleService.setTitle(this.title);
  }
}