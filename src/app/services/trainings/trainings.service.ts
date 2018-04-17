import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Training } from '../../model/training'
import { catchError } from 'rxjs/operators';

@Injectable()
export class TrainingsService {

  constructor(public http:HttpClient) { 
    // console.log('trainingsservice connected...')
  }
  // getTrainings(){
  //   return this.http.get('http://abbaslearn.schoolapi.royasoftware.com:8080/api/trainings/123')
  //     .map(res => res)
  // }
  getTrainings(): Observable<Training[]>{
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    //   .map(res => res.json())
    return this.http.get('http://abbaslearn.schoolapi.royasoftware.com:8080/api/trainings/123')
    .pipe(catchError((error:any)=>Observable.throw(error.json())  ))
  }
}
