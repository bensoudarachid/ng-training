import { Injectable } from '@angular/core'
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Training } from '../../model/training'
import { catchError } from 'rxjs/operators'
import { ApiConnection } from '../api-connection.service'
import { of } from 'rxjs/observable/of'
import { CookieService } from 'ngx-cookie-service'

@Injectable()
export class TrainingsService {
  ac = new ApiConnection()
  constructor(public http: HttpClient, private cookiesService: CookieService) {
    // console.log('trainingsservice connected...')
  }
  // getTrainings(){
  //   return this.http.get('http://abbaslearn.schoolapi.royasoftware.com:8080/api/trainings/123')
  //     .map(res => res)
  // }
  getTrainings(): Observable<Training[]> {
    // console.log('trainingsservice get trainings')
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    //   .map(res => res.json())
    // return this.http.get('http://abbaslearn.schoolapi.royasoftware.com:8080/api/trainings/123')
    return this.http
      .get<Training[]>(ApiConnection.API_ENDPOINT + '/api/trainings/123')
      .pipe(catchError((error: any) => Observable.throw(error.json())))
  }
  getTraining(id: Number): Observable<Training> {
    // console.log('trainingsservice get trainings')
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    //   .map(res => res.json())
    // return this.http.get('http://abbaslearn.schoolapi.royasoftware.com:8080/api/trainings/123')
    return this.http
      .get<Training>(ApiConnection.API_ENDPOINT + '/api/training/item/' + id)
      .pipe(catchError((error: any) => Observable.throw(error.json())))
  }
  saveTraining(
    payload: Training,
    trainingImageFile: File
  ): Observable<Training> {
    if (trainingImageFile)
      console.log(
        'trainingImageFile=' +
          require('util').inspect(trainingImageFile.name, false, null)
      )
    console.log(
      'training service save. payload=' +
        require('util').inspect(payload, false, null)
    )
    let jwtToken = this.cookiesService.get('jwt')
    let headers = new HttpHeaders()
    if (jwtToken) {
      headers = headers.set('Authorization', 'Bearer ' + jwtToken)
    }
    var body = new FormData()
    body.append(
      'trainingParam',
      new Blob([JSON.stringify(payload)], { type: 'application/json' })
    )
    body.append('uploadfile', trainingImageFile)

    return this.http
      .post<Training>(
        ApiConnection.API_ENDPOINT + '/api/training/updatetraining/',
        body,
        {
          headers: headers,
        }
      )
      .pipe(catchError((error: any) => Observable.throw(error.json())))
    // return of(payload)
  }
}
