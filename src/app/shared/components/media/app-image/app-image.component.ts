import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { ApiConnection } from '../../../../services/api-connection.service'

declare var $: any;

@Component({
  selector: 'app-image',
  templateUrl: './app-image.component.html',
  styleUrls: ['./app-image.component.scss']
})
export class AppImageComponent implements OnInit, AfterViewInit {
  @Input() imgid: string
  @Input() api: string
  datasrc: string
  errors = 0
  stage = 0
  queryimg = undefined
  img = undefined
  width: number;
  height: number;
  // @ViewChild("imgref", { read: ElementRef }) imgref: ElementRef;

  ngAfterViewInit(): void {
    // outputs `I am span`
    var elm = $('#imgwrap' + this.imgid)
    // var elm = document.querySelector('#imgwrap' + this.imgid);
    this.width = Math.round(elm.width())
    this.height = Math.round(elm.height())
    if(this.width>this.height)
      this.width=this.height
    else
    this.height = this.width
    // console.log('width = ' + this.width)
    // console.log('height = ' + this.height)

    this.queryimg = elm.find('.dataimg')
    this.img = this.queryimg[0]
    // let image =elm.find('.fulldataimg')
    // this.fullimg = image[0]
    // this.loadImage()
  }

  constructor() { }

  ngOnInit() {
    // const idToken = cookie.load('jwt')
    // console.log('app-image-comp imgid = ' + this.imgid)
    // var elm = $('#imgwrap' + this.imgid)
    // var elm = document.querySelector('#imgwrap' + this.imgid);
    // const width = elm.width()
    // const height = elm.height()
    // console.log('width = ' + width)
    // console.log('height = ' + height)

    // const idTokenParam = idToken == undefined ? '' : '&access_token=' + idToken
    // var datasrc = ApiConnection.apiurl + ApiConnection.appbasename + '/api/' + api + '/'
    // var image = elm.find('.dataimg')
    // var img = image[0]
    // this.loadImage()
    this.datasrc = 'http://abbaslearn.schoolapi.royasoftware.com:8080/api/' + this.api + '/img/' + this.imgid + '?width=5&height=5&rdparam=3410'
    // img.setAttribute('src', this.datasrc)
  }
  loadImage() {
    // console.log('tiny image loaded ' + this.imgid)
    // let wait = setTimeout(() => {
    let newImg = 'http://abbaslearn.schoolapi.royasoftware.com:8080/api/' + this.api + '/img/' + this.imgid + '?width=' + this.width + '&height=' + this.height + '&rdparam=861'
    if(this.img.getAttribute('src') != newImg )  {
      this.img.setAttribute('src', newImg)
    }else
      this.queryimg.addClass('imgunblur')
    // }, 100)
  }
  handleImageErrored() {
    // console.log("Image " + this.imgid )
    this.img.setAttribute('src', 'assets/images/0.png')
  }


}