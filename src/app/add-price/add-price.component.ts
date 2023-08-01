
 import { Component, Inject } from '@angular/core';
 import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent {
  priceForm: FormGroup;


  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _dialogRef: MatDialogRef<AddPriceComponent>,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.priceForm = this._fb.group({
      id: [0, Validators.required],
      coinid: ['', Validators.required],
      value: ['', Validators.required]
    });
  }
  ngOnInit():void{
    this.priceForm.patchValue(this.data);
  }

  savePrice() {



    if(this.priceForm.valid)
      {
      // console.log(this.coinForm.value);
      this._apiService.addprice(this.priceForm.value).subscribe({
        next:(val:any) => {
          this.toast.success({detail:"Success Message",summary:"Price has been Added",duration:5000})
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
         this.validateallformfields(this.priceForm);
        this.toast.warning({detail:"WARNING",summary:"Miss Something? ",duration:5000})

      }
  }
  private validateallformfields(priceForm: FormGroup<any>) {
    Object.keys(priceForm.controls).forEach(field=>{
      const control = priceForm.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if (control instanceof FormGroup){
        this.validateallformfields(control)
      }
    })


    }

}


