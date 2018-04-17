import { Component,Input,OnInit } from '@angular/core';
import {Map,List} from 'immutable'


@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.scss']
})
export class TrainingItemComponent implements OnInit {
  @Input() trainingInput:Map<any,any>
  @Input() api
  trainingid:string
  // imgid:string
  constructor() { }

  ngOnInit() {
    // trainingInput.imgid
    this.trainingid=this.trainingInput.get('id')
    // console.log('Image id = '+this.trainingInput.get('id'))
  }


}
