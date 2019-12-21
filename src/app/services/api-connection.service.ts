// import { Injectable } from '@angular/core';
// import './jsonextend'
import { environment } from '../../environments/environment';
// const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

export class ApiConnection {
//  authurl = 'http://' + process.env.TRAINING_API_LOCAL_IP + ':8080'

  //public static API_ENDPOINT='http://abbaslearn.schoolapi.royasoftware.com:8080'
//  public static API_ENDPOINT = 'http://reactlearn.schoolapi.royasoftware.com'
  //public static API_ENDPOINT='http://localhost:8080'
  // public static API_ENDPOINT='http://demo1.schoolapi.royasoftware.com'
  // public static API_ENDPOINT='https://trainingspringboot-multitenant-training.a3c1.starter-us-west-1.openshiftapps.com'
  // public static API_ENDPOINT='http://trainingspringboot-multitenant-training.a3c1.starter-us-west-1.openshiftapps.com'
  // public static API_ENDPOINT = 'http://'+window.location.hostname.replace("school.", "schoolapi.")
  //public static apiHostname = window.location.hostname.replace("school.", "schoolapi.");
  public static API_ENDPOINT = environment.production?window.location.protocol+'//'+window.location.hostname.replace("school.", "schoolapi.")+':'+window.location.port:'http://abbaslearn.schoolapi.royasoftware.com:8080'
}
