import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'

import { User } from '../../model/user';
@Injectable()
export class AuthService {


    
  constructor(private http: HttpClient, private cookieService: CookieService) { }


  login(email: string, password: string) {
    // let params = new HttpParams()
    // params =params.set('grant_type','password')
    const httpOptions = {
      // params,
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa('clientapp:123456')
      })
    }

    let body = new HttpParams()
    body = body.set('username', email)
    body = body.set('password', password);
    body = body.set('grant_type', 'password')
    
    return this.http.post('http://abbaslearn.school.royasoftware.com:8081/oauth/token',
      body.toString()
      , httpOptions
    )

  }
  refreshToken(refreshToken: string): any {
    const httpOptions = {
      // params,
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa('clientapp:123456')
      })
    }
    let body = new HttpParams()
    body = body.set('refresh_token', refreshToken)
    body = body.set('grant_type', 'refresh_token')
    
    return this.http.post('http://abbaslearn.school.royasoftware.com:8081/oauth/token',
      body.toString()
      , httpOptions
    )

  }
  logout( jwtToken:string ) {
    const httpOptions = {
      // params,
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + jwtToken
      })
    }

    let body = new HttpParams()
    // body = body.set('username', email)
    // body = body.set('password', password);
    // body = body.set('grant_type', 'password')

    return this.http.post('http://abbaslearn.school.royasoftware.com:8081/oauth/logout',
      body.toString()
      , httpOptions
    )
  }


}
