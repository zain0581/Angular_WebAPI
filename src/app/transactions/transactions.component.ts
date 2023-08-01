import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AddtransactionsComponent } from '../addtransactions/addtransactions.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions:transaction[]=[];
  
  constructor( private api :ApiService, private router : Router ,private _dialog:MatDialog,private toast:NgToastService)   { 
  }
  openAddEditcoinForm(){
      const dialogRef=this._dialog.open(AddtransactionsComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if(val) {
            this.getalldata();
          }
        }
      })
     
  }


  ngOnInit():void{
    // calling the uder methods to see  Arrays with data in aplictaion inspect 
    if (sessionStorage.getItem('Email')) {


      } else {

         this.toast.error({detail:"error",summary:"Please login First",duration:5000})
        this.router.navigate(['/login']);

      }
    this.getalldata();
     this.getalldata();
      }

  getalldata() {
    this.api.gettransactions()
    .subscribe((data: transaction[]) => {
      this.transactions = data;
         // assigning the fetched data to the coins array
      });

  }
  openEditTransactionForm(transaction:transaction)
  {
    const dialogRef=this._dialog.open(AddtransactionsComponent,{data:{
     id:transaction.id,
      userId:transaction.userId,
      date:transaction.date





    }});
    dialogRef.afterClosed().subscribe({
     next:(val)=>{
       if(val){
         this.getalldata();
       }
     }
   });

}
 
  deletetransaction(id: number) {
    this.api.deletetransactions(id).subscribe({
      next: res => {
        this.toast.success({detail:"Success Message",summary:"Cion has been Deleted",duration:5000})
        // Reload the list of coins
        this.getalldata();
      },
      error: err => {
        console.log(err);
        alert('Error deleting coin'+err.message);
      }


    });
  }
  
}

  export interface transaction {
    id: number;
    userId: number;
    date: number;
  }


