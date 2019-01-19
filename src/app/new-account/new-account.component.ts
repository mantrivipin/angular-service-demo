import { Component, OnInit} from '@angular/core';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  constructor(private accountService: AccountService) { }
  ngOnInit() {}
  addAccount(name: string, status: string) {
    this.accountService.addAccount(name, status);
  }
}
