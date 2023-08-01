
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
=======
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';
>>>>>>> bef9507fe3790f085c7ab454aa010309c6885cb1

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.css']
})
export class AddCoinComponent {
  coinForm:FormGroup;


<<<<<<< HEAD
 constructor(private _fb:FormBuilder,private _apiService:ApiService,private _dialogRef:MatDialogRef <AddCoinComponent>,
  @Inject(MAT_DIALOG_DATA) private data:any){
   this.coinForm=this._fb.group({
   
=======
 constructor(private _fb:FormBuilder,private _apiService:ApiService,private _dialogRef:MatDialogRef <AddCoinComponent>,private toast :NgToastService,
  @Inject(MAT_DIALOG_DATA) private data:any){
   this.coinForm=this._fb.group({
    id: [0, Validators.required],
>>>>>>> bef9507fe3790f085c7ab454aa010309c6885cb1
    name: ['', Validators.required],
    symbol: ['', Validators.required],
    marketCap: ['', Validators.required],
    volume24h: ['', Validators.required],
    change24h: ['', Validators.required]

     
  });
}
ngOnInit():void{
  this.coinForm.patchValue(this.data);

}
  onFormSubmit() {
    
      if(this.coinForm.valid)
      {
      // console.log(this.coinForm.value);
      this._apiService.addCoin(this.coinForm.value).subscribe({
        next:(val:any) => {
          this.toast.success({detail:"Success Message",summary:"Cion has been Added",duration:5000})
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
<<<<<<< HEAD
        }
      })

      }
    }
 

=======
          // this.toast.error({detail:"Login Failed",summary:"Wrong Email or Password ",duration:5000})
        }
        
      })

      }
      else{
          
        //throw the erroe using toaster and with required fields
        //calling the method her::
        this.validateallformfields(this.coinForm);
        this.toast.warning({detail:"WARNING",summary:"Miss Something? ",duration:5000})
     
      }
    
    }
      
    
    
 
    private validateallformfields(coinForm: FormGroup<any>) {
      Object.keys(coinForm.controls).forEach(field=>{
        const control = coinForm.get(field);
        if(control instanceof FormControl){
          control.markAsDirty({onlySelf:true});
        }
        else if (control instanceof FormGroup){
          this.validateallformfields(control)
        }
      })
      
      
      }
>>>>>>> bef9507fe3790f085c7ab454aa010309c6885cb1
 }

 
  


 


