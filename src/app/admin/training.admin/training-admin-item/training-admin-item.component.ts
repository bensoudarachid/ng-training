import { Component,Input,OnInit } from '@angular/core';
// import {Map,List} from 'immutable'


@Component({
  selector: 'app-admin-training-item',
  templateUrl: './training-admin-item.component.html',
  styleUrls: ['./training-admin-item.component.scss']
})
export class TrainingAdminItemComponent implements OnInit {
  @Input() trainingInput:any
  @Input() api
  trainingid:string
  // imgid:string
  constructor() { }

  ngOnInit() {
    // trainingInput.imgid
    this.trainingid=this.trainingInput.id
    // console.log('Image id = '+this.trainingInput.get('id'))
  }


}
