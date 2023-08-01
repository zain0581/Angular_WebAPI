import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AddwalletComponent } from '../addwallet/addwallet.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  wallets:wallet[]=[];
  
  constructor( private api :ApiService, private router : Router ,private _dialog:MatDialog,private toast:NgToastService)   { 
  }
  openAddEditcoinForm(){
      const dialogRef=this._dialog.open(AddwalletComponent);
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
    this.api. getWallets()
    .subscribe((data: wallet[]) => {
      this.wallets = data;
         // assigning the fetched data to the coins array
      });

  }

 
 
 
  deleteWallet(id: number) {
    this.api.deletewallet(id).subscribe({
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
  openEditWalletForm(wallet:wallet)
    {
      const dialogRef=this._dialog.open(AddwalletComponent,{data:{
  id:wallet.id,
  userid:wallet.userId,
  balance:wallet.balance
  
  
  
  
  
      }});
    
     dialogRef.afterClosed().subscribe((val)=>
      //  next:(val)=>
       {
         if(val){
           this.getalldata();
         }
       
     });
    }
   
    
}


  interface wallet {
  id: number;
  userId: number;
  balance: number;
}