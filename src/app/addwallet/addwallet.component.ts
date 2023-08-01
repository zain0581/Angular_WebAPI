import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AddPriceComponent } from '../add-price/add-price.component';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-addwallet',
  templateUrl: './addwallet.component.html',
  styleUrls: ['./addwallet.component.css']
})
export class AddwalletComponent {
  walletForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _dialogRef: MatDialogRef<AddPriceComponent>,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.walletForm = this._fb.group({
      id: [0, Validators.required],
      userId: ['', Validators.required],
      balance: ['', Validators.required]
    });
  }
  ngOnInit():void{
    this.walletForm.patchValue(this.data);
  }

  savePrice() {



    if(this.walletForm.valid)
      {
      // console.log(this.coinForm.value);
      this._apiService.addwallets(this.walletForm.value).subscribe({
        next:(val:any) => {
          this.toast.success({detail:"Success Message",summary:"Cion has been Added",duration:5000})
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);

        }

      })

      }
      else{

        //throw the erroe using toaster and with required fields
        //calling the method her::
         this.validateallformfields(this.walletForm);
        this.toast.warning({detail:"WARNING",summary:"Miss Something? ",duration:5000})

      }
  }
  private validateallformfields(walletForm: FormGroup<any>) {
    Object.keys(walletForm.controls).forEach(field=>{
      const control = walletForm.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if (control instanceof FormGroup){
        this.validateallformfields(control)
      }
    })


    }

}