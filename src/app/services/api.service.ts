import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Adding http client And adding public apis her in each method::
  constructor(private http :HttpClient) { }
  private baseUrl:string ="https://localhost:7125/api/User/"
  //signup Api service 
  signup(user:any):Observable<any>{
    const url = `${this.baseUrl}register`;
    return this.http.post<any>(url, user);
 
  }
  //login api service 
  login(usser:any):Observable<any>{
    const url = `${this.baseUrl}authenticate`;
    return this.http.post<any>(url, usser);
  // return this.http.post<any>(`${this.baseUrl}regristration`,user)
  }
  

 

//It is a public Api From internet:
// This is the public Api link for the header to the top treanding crunnecy...
  getTrendingCrunnecy(crunnecy:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${crunnecy}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h
  }`)}
 getCurrency(currency:string)
 {
   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
 }
//it is private api for coin details :
  getCrunnecy(crunnecy:string){
return this.http.get<any>(`https://localhost:7125/api/Coin`);

   }
  //Crud operations private api link 
   addCoin(data:any):Observable<any>{
     //this is return observable 
     return this.http.post('https://localhost:7125/api/Coin',data)
   }
   deleteCoin(id:number):Observable<any>
   {
      return this.http.delete('https://localhost:7125/api/Coin/'+id)
   }
  
  //  openEditCoinForm(id:number):Observable<any>
  //  {
  //    return this.http('https://localhost:7125/api/Coin/${id}')
  //  }
  getGraphicalCureencyData(coinId:string,currency:string,days:string){
    return this.http.get<any>(`htttps://api.coingecko.com/api/v3/coins/${coinId}/market_chartvs_currency=${currency}&days=${days}`)
  }
  getCurrencyById(coinId:String)
  {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }
  
///these api is for cionPrice

 


  private apiUrl = 'https://localhost:7125/api/Price';


  getPrices(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addprice(price:any):Observable<any>{
    //this is return observable 
    return this.http.post('https://localhost:7125/api/Price',price)
  }

  updatePrice(id: number, price: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, price);
  }

  deletePrice(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }



  private apit = 'https://localhost:7125/api/Transaction';


  gettransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apit);
  }
  deletetransactions(id: number): Observable<any> {
    const url = `${this.apit}/${id}`;
    return this.http.delete<any>(url);
  }

  
  createTransactions(transaction:any):Observable<any>{
    //this is return observable 
    return this.http.post('https://localhost:7125/api/Transaction',transaction)
  }


  updatetransactions(id: number, price: any): Observable<any> {
    const url = `${this.apit}/${id}`;
    return this.http.put<any>(url, price);
  }

 


  // gettransactions(): Observable<any[]> {
  //   return this.http.get<any[]>('https://localhost:7125/api/Transaction');
  // }
  

  // private aiUrl = 'https://localhost:7125/api/Wallet';

  // getwallet(): Observable<any[]> {
   
  //   return this.http.get<any[]>('https://localhost:7125/api/Wallet');
  // }
  private walletapiUrl = 'https://localhost:7125/api/Wallet';


  getWallets(): Observable<any[]> {
    return this.http.get<any[]>(this.walletapiUrl);
  }

  createWallet(wallet: any): Observable<any> {
    return this.http.post('https://localhost:7125/api/Wallet',wallet)

  }
  






  private apiwUrl = 'https://localhost:7125/api/Wallet';


  getwallets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiwUrl);
  }

  addwallets(wallet:any):Observable<any>{
    //this is return observable 
    return this.http.post('https://localhost:7125/api/Wallet',wallet)
  }

  updatewallet(id: number, wallet: any): Observable<any> {
    const url = `${this.apiwUrl}/${id}`;
    return this.http.put<any>(url, wallet);
  }

  deletewallet(id: number): Observable<any> {
    const url = `${this.apiwUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}







