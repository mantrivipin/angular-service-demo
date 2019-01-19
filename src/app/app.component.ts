import { Component, OnInit, OnChanges } from '@angular/core';
import { AccountService } from './shared/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  constructor(private accountService: AccountService){}
  title = 'service-demo1';
  accounts: {name: string, status: string}[];
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
