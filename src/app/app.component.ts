import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.servic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];
  constructor(private accountsService: AccountsService){
    this.accountsService.onChangeStatusNotify.subscribe(
      (status: string) => alert(status)
    );
  }

  ngOnInit(){
    this.accounts=this.accountsService.accounts;
  }

}
