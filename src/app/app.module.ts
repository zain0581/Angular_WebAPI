
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './UserComponent/dashboard/dashboard.component';

<<<<<<< HEAD
import { NgToastModule } from 'ng-angular-popup';
=======
// import { NgToastModule } from 'ng-angular-popup';


import { AddCoinComponent } from './add-coin/add-coin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import{MatFormField} from '@angular/material/form-field';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IntegrationComponent } from './integration/integration.component';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { ReportsComponent } from './reports/reports.component';
import { TransactionsComponent } from './transactions/transactions.component';
// import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';

import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { DragDropModule } from '@angular/cdk/drag-drop'; 
>>>>>>> bef9507fe3790f085c7ab454aa010309c6885cb1
import { NotFoundComponent } from './not-found/not-found.component';
import { PricesComponent } from './prices/prices.component';
import { WalletComponent } from './wallet/wallet.component';
import { AddPriceComponent } from './add-price/add-price.component';
import { AboutComponent } from './about/about.component';




// import { SidenavComponent } from './sidenav/sidenav.component';

import { AddCoinComponent } from './add-coin/add-coin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import{MatFormField} from '@angular/material/form-field';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IntegrationComponent } from './integration/integration.component';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { ReportsComponent } from './reports/reports.component';



// import { SidenavComponent } from './sidenav/sidenav.component';





@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CoinDetailComponent,
    LoginComponent,
    SignupComponent,
<<<<<<< HEAD
    DashboardComponent,
  NotFoundComponent,
  
=======
    DashboardComponent,  
>>>>>>> bef9507fe3790f085c7ab454aa010309c6885cb1
  AddCoinComponent,
  IntegrationComponent,
  CryptoCurrencyComponent,
  ReportsComponent,
<<<<<<< HEAD
=======
  TransactionsComponent,
  NotFoundComponent,
  PricesComponent,
  WalletComponent,
  AddPriceComponent,
  AboutComponent,
  
>>>>>>> bef9507fe3790f085c7ab454aa010309c6885cb1
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
<<<<<<< HEAD
    NgToastModule,
=======
>>>>>>> bef9507fe3790f085c7ab454aa010309c6885cb1
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSortModule,
<<<<<<< HEAD
    MatMenuModule
=======
    MatMenuModule,
      // ToastrService,
    // ToastrModule,
    MatSidenavModule,
    MatListModule,

  NgToastModule,
    DragDropModule,
   
   
   
    
>>>>>>> bef9507fe3790f085c7ab454aa010309c6885cb1
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
