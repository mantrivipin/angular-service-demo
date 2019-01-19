import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
	constructor(private loggingService: LoggingService) {}
  public accounts: any = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
	];
	addAccount(name: string, status: string) {
		this.accounts.push({name: name, status: status});
		this.loggingService.logStatusChange(status);
	}
	updateStatus(id: number, status: string) {
		this.accounts[id].status = status;
		this.loggingService.logStatusChange(status);
	}
}