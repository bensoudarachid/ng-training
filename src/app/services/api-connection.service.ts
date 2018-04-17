import { Injectable } from '@angular/core';
import './jsonextend'

// const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

@Injectable()
export class ApiConnection {
  static apiurl: string;
  static apiport: string;
  apiport = 8080
  apiurl = ''
  appbasename = ''
  constructor() {
    var appbasename = ''
    // JSON.useDateParser()

    var url = ''
    var authurl = ''
    // if (process.env.BROWSER) {
    const apiHostname = window.location.hostname.replace("school.", "schoolapi.");
    authurl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port
    // } else {
    //   authurl = 'http://' + process.env.TRAINING_API_LOCAL_IP + ':8080'
    // }
    url = authurl
    this.apiurl = url
  }
}






