import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { ApiConnection } from '../../../../services/api-connection.service'
import { HttpImageService } from '../http-image.service';
// import {map,switchMap,catchError} from 'rxjs/operators'
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-image',
  templateUrl: './app-image.component.html',
  styleUrls: ['./app-image.component.scss']
})
export class AppImageComponent implements OnInit, AfterViewInit {
  @Input() imgid: string
  @Input() api: string
  @ViewChild("appimage") image: ElementRef;

  // datasrc: string
  errors = 0
  stage = 0
  queryimg = undefined
  // img = undefined
  width: number;
  height: number;
  // @ViewChild("imgref", { read: ElementRef }) imgref: ElementRef;

  ngAfterViewInit(): void {
    var elm = $('#imgwrap' + this.imgid)
    this.width = Math.round(elm.width())
    this.height = Math.round(elm.height())
    if (this.width > this.height)
      this.width = this.height
    else
      this.height = this.width
    // this.queryimg = elm.find('.dataimg')
    // this.img = this.queryimg[0]

    // this.image.nativeElement.src= 'assets/images/0.png'
  }

  constructor(private imageService: HttpImageService) { }


  // .map(e => URL.createObjectURL(e))
  ngOnInit() {
    // console.log('Image URL: ' + ApiConnection.API_ENDPOINT + '/api/' + this.api + '/img/' + this.imgid + '?width=5&height=5&rdparam=3410')
    // this.imageService.getImage(ApiConnection.API_ENDPOINT + '/api/' + this.api + '/img/' + this.imgid + '?width=5&height=5&rdparam=3410').pipe(
    //   map(data => console.log('data '+data)),
    //   catchError(error =>{
    //     console.log('error '+error)
    //     return of('error') 
    //   })
    // )

    this.imageService.getImage(ApiConnection.API_ENDPOINT + '/api/' + this.api + '/img/' + this.imgid + '?width=5&height=5&rdparam=3410')
      .subscribe((data) => {
        // console.log('init blurred data for img ' + this.imgid)
        // console.log(data)
        this.image.nativeElement.src = URL.createObjectURL(data)
        this.stage++
        // this.datasrc = data
      }, err => {
        console.log('error ' + err)
      })

    // this.datasrc = ApiConnection.API_ENDPOINT + '/api/' + this.api + '/img/' + this.imgid + '?width=5&height=5&rdparam=3410'
  }
  loadImage() {
    // console.log('Stage for image' + this.imgid + ' is ' + this.stage+' src ='+this.image.nativeElement.src)
    if (this.image.nativeElement.src.indexOf('assets/images/0.png')>=0) {
      // console.log('init empty img ' + this.imgid)
      return
    }

    if (this.stage > 1) {
      this.image.nativeElement.className = 'dataimg imgunblur'
      // this.image.nativeElement.addClass('imgunblur')
      // this.queryimg.addClass('imgunblur')
      return
    }
    this.stage++
    this.imageService.getImage(ApiConnection.API_ENDPOINT + '/api/' + this.api + '/img/' + this.imgid + '?width=' + this.width + '&height=' + this.height + '&rdparam=861')
      .subscribe((data) => {
        // console.log('end data for img ' + this.imgid)
        // console.log(data)
        this.image.nativeElement.src = URL.createObjectURL(data)
        // this.stage++
        // this.datasrc = data
      }, err => {
        console.log('error ' + err)
      })

    // let newImg = ApiConnection.API_ENDPOINT+'/api/' + this.api + '/img/' + this.imgid + '?width=' + this.width + '&height=' + this.height + '&rdparam=861'
    // if(this.img.getAttribute('src') != newImg && this.img.getAttribute('src') != 'assets/images/0.png')  {
    //   this.img.setAttribute('src', newImg)
    // }else
    //   this.queryimg.addClass('imgunblur')
  }
  handleImageErrored() {
    this.image.nativeElement.src ='assets/images/0.png'
  }

}