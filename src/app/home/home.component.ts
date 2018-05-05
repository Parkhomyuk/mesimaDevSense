import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceService]
})
export class HomeComponent implements OnInit {


  errorMainContent: boolean=false;

  data: any;
  dataCurrent: any;
  error:any;
  key: number;

  constructor(private httpService: ServiceService){
    this.error={};

  }

  ngOnInit(){
    this.httpService.getData().subscribe((data) => {this.data= data;console.log(this.data);},

    error => {this.error = error;
      this.errorMainContent=true;
      if(error.status==404){
        error.text=error.url+'-'+error.statusText;
      }
      if(error.status==401){
        error.text='token is incorrect';
      }
      if(error.status==599){
        error.text='Server error. (Something funny happened. please try again!)';
      }
      if(error.status==500){
        error.text='representing a network connection error';
      }
      }
    )
  }
  getNode() {
    this.dataCurrent=this.data;
     this.dataCurrent=this.dataCurrent.data.children;
    let deg_start = 170;
    let deg_step = 0;
    let leng_start = -70;
    let leng_step = 55;
    let nodes = this.dataCurrent;
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].id = i;
      nodes[i].style = {};
      let currentDeg = deg_start + deg_step;
      deg_step += 10;
      if (currentDeg >= 240) {
        deg_step = 0;
        nodes[i].style.width = leng_start;
        leng_start = leng_start - leng_step;
      }

      if (currentDeg != 240) {
        nodes[i].style.width = leng_start;
      }
      nodes[i].style.rotate = currentDeg;
    }
    this.dataCurrent=nodes;

  }
  /*getNode() {
    console.log(this.data);
    this.dataCurrent=this.data.children;
     let deg_start = 170;
    let deg_step = 0;
    let leng_start = -70;
    let leng_step = 55;
    let nodes = this.dataCurrent;
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].id = i;
      nodes[i].style = {};
      let currentDeg = deg_start + deg_step;
      deg_step += 10;
      if (currentDeg >= 240) {
        deg_step = 0;
        nodes[i].style.width = leng_start;
        leng_start = leng_start - leng_step;
      }

      if (currentDeg != 240) {
        nodes[i].style.width = leng_start;
      }
      nodes[i].style.rotate = currentDeg;
    }
    this.dataCurrent=nodes;

  }*/
  selectPicture(id){
    this.key=id;
  }

  closeInfoNoActiveNode(){
    this.errorMainContent=false;
  }
  pushNotActiveNode(){
    this.error.text='This node does not contain a picture'
    this.errorMainContent=true;

  }
}
