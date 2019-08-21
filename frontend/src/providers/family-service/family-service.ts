import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';

// API for frontend
@Injectable()
export class FamilyServiceProvider {

  items: any = [];

  dataChanged$ : Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

// Backend API URL
  baseURL = "http://localhost:8080";

  constructor(public http: HttpClient) {
    console.log('Hello FamilyService Provider');
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

// Retrieve grocery items from backend.
  getItems(): Observable<object[]> {
    return this.http.get(this.baseURL + '/api/familyapps').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

// JSON data extractor
  private extractData(res: Response){
    let body = res;
    return body || {};
  }

// Error handler
  private handleError(error: Response | any){
    let errMsg : string;
    if(error instanceof Response){
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  //Delete member items
  removeItem(item){
    console.log('item ' + item._id + ' has been removed.');
    this.http.delete(this.baseURL+'/api/familyapps/'+item._id).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true);
    });
  }

  //Add item to db
  addItem(item){
    this.http.post(this.baseURL+'/api/familyapps/', item).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true);
    });
  }

  //edit item in db
  editItem(item, index){
    let id = item._id;
    this.http.put(this.baseURL+'/api/familyapps/'+id, item).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true);
    });
  }

}