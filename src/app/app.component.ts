import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private accountService: AccountService){}
  title = 'service-demo1';
  accounts: {name: string, status: string}[] = this.accountService.accounts;
  ngOnInit() {}
}
