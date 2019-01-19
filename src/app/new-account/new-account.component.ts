import { Component, OnInit} from '@angular/core';
import { LoggingService } from '../shared/services/logging.service';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  constructor(private loggingService: LoggingService, private accountService: AccountService) { }
  ngOnInit() {}
  addAccount(name: string, status: string) {
    this.accountService.addAccount(name, status);
    this.loggingService.logStatusChange(status);
  }
}
