import { Component, OnInit} from '@angular/core';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert("New status:" + status)
    );
   }
  ngOnInit() {}
  addAccount(name: string, status: string) {
    this.accountService.addAccount(name, status);
  }
}
