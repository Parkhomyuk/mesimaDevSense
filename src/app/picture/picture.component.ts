import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ServiceService} from "../service.service";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  providers: [ServiceService]
})
export class PictureComponent implements OnInit {
  data: any;
  dataMainPictures: any;
  currentPicture: any;
  currentPicture2: any;
  error:any;
  private subscription: Subscription;
  key:number;
  constructor(private httpService: ServiceService, private activatedRoute: ActivatedRoute) {

    this.currentPicture={};
    this.currentPicture2={};
    this.data=[];
    this.subscription = activatedRoute.params.subscribe(params=>this.key=params['id'] );
  }
  ngOnInit() {
    /*this.httpService.getData().subscribe((data) => {*/
      this.httpService.getData().subscribe((data) => {
      this.data=data;
        this.dataMainPictures=this.data.data["children"];

      for(let i=0;i<this.dataMainPictures.length;i++){
        this.dataMainPictures[i].id=i;
      }
      let promt=0;
      this.currentPicture=this.dataMainPictures.filter(p=>p.id==this.key);
      this.dataMainPictures=this.dataMainPictures .filter(p=> p.type!='0');
      for(let i=0;i<this.dataMainPictures.length;i++){
        if(this.dataMainPictures[i].id==this.key){
          this.currentPicture2=this.dataMainPictures[i];
          promt=i;
        }
      }
      let promt0=this.dataMainPictures[0];

      this.dataMainPictures[0]=this.currentPicture2;
      this.dataMainPictures[promt]=promt0;
      this.dataMainPictures.splice(0,1);
    }) ;
  }

  choosePicture(id){
    let arr=this.dataMainPictures;
    let promt=0;
    let promt2=this.currentPicture2;
    for(let i=0;i<arr.length;i++){
      if(arr[i].id==id){
        promt=i;
      }
    }
    this.currentPicture2=arr[promt];
    arr[promt]=promt2;
    this.dataMainPictures=arr;
  }
}
