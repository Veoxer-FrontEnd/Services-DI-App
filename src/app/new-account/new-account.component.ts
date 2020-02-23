import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.servic';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded(accountName, accountStatus);
    // this.accountAdded.emit( {
    //   name: accountName,
    //   status: accountStatus
    // });
    // this.loggingService.loggingStatusChange(accountStatus);
  }
}
