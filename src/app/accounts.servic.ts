import { Injectable, EventEmitter, Output } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
    providedIn: 'root'
})
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      @Output() onChangeStatusNotify = new EventEmitter<string>();

      constructor(private loggingService: LoggingService){}
    
      onAccountAdded(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.loggingStatusChange(status);
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.loggingStatusChange(newStatus);
      }
}