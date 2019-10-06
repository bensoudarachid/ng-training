import { Component, OnInit } from '@angular/core'

declare var $: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //   setTimeout(() => {
    //     // if (img.load(true) && img[0].hasAttribute('data-src')) {
    //     if (img[0].complete && img[0].hasAttribute('data-src')) {
    //         img[0].setAttribute('src', img[0].getAttribute('data-src'))
    //       img[0].onload = function () {
    //         img[0].removeAttribute('data-src')
    //         imgSpinner.remove()
    //         if (elm.is(':visible') && !img[0].hasAttribute('data-src')) {
    //           imgSpinner.remove()
    //           elm.addClass('animated')
    //           if (imgbg.hasClass('animated'))
    //             return
    //           else {
    //             imgbg.removeClass('imgbg')
    //             imgbg.addClass('animated imgwraptor')
    //           }
    //         }
    //       }
    //     }
    //   }, 50)
    // })
    // window.addEventListener('scroll', this.handleScroll)
    // window.addEventListener('resize', this.handleScroll)
  }
  // handleScroll(event) {
  //   // var idToken = cookie.load('jwt')
  //   var anim = function (elm) {
  //     var imgbg = elm.find('.imgbg')
  //     var img = elm.find('.dataimg')
  //     elm.addClass('animated')
  //     var rdm = Math.floor(Math.random() * 3) + 1
  //     var rdm2 = Math.floor(Math.random() * 2) + 1
  //     var imgAnim = rdm === 1 ? 'rubberBand' : rdm === 2 ? 'jello' : 'flip'
  //     img.addClass('animated ' + imgAnim + (rdm === 3 && rdm2 === 1 ? ' reverseanim' : ''))
  //     imgbg.removeClass('imgbg')
  //     var imgbgAnim = imgAnim === 'jello' ? 'rubberBand' : imgAnim === 'rubberBand' ? 'jello' : rdm2 === 1 ? 'fadeInLeft' : 'fadeInRight'
  //     imgbg.addClass('animated ' + imgbgAnim + ' imgwraptor')
  //   }
  //   $('.imgwrap').each(function (i, el) {
  //     var elm = $(el)
  //     var img = elm.find('.dataimg')
  //     var imgSpinner = elm.find('.mdl-spinner')
  //     if (img[0].complete && img[0].hasAttribute('data-src')) {
  //       // img[0].setAttribute('src', img[0].getAttribute('data-src') + (img[0].getAttribute('data-src').includes('/api/') ? ('?access_token=' + idToken) : ''))
  //       img[0].setAttribute('src', img[0].getAttribute('data-src'))
  //       img[0].onload = function () {
  //         console.log('image loaded on scroll: ' + img[0].getAttribute('data-src'))
  //         img[0].removeAttribute('data-src')
  //         imgSpinner.remove()

  //         if (elm.is(':visible') && !img[0].hasAttribute('data-src')) {
  //           if (elm.hasClass('animated')) {
  //             return
  //           } else {
  //             anim(elm)
  //           }
  //         }

  //       }
  //     }
  //     // if (elm.visible(true) && !img[0].hasAttribute('data-src')) {
  //     if (elm.is(':visible') && !img[0].hasAttribute('data-src')) {
  //         if (elm.hasClass('animated')) {
  //         return
  //       }
  //       else {
  //         anim(elm)
  //       }
  //     }
  //   })
  // }
}
