import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers: any;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'X-TOKEN': "2d4e69f4823176197ccf41caa5ee6456"});
  }
  //Get data from local file assets/data.json start
  /*getData(){
    return this.http.get('assets/data.json')
  }


  getPictures() {
    return this.http.get('assets/data.json').subscribe(data=>{
      let pictures = data["children"];
      for(let i=0;i<pictures.length;i++){
        pictures[i].id=i;
      }
      return pictures.map(
        function(p){
          let obj={id:0,url:''};
          obj.id=p.id;
          obj.url=p.url;
          return obj}).filter(p=> p.url!=undefined);

    });

  }*/
  //Get data from local file assets/data.json end
  //Get data from API file   start
  private apiUrl = 'http://dvns.me/yaniv/clientest/public/explorePictures';

  getData(){
    return this.http.get(this.apiUrl, {headers: this.headers});

  }



  //Get data from API   end


}/*
return this.http.request(new Request(this.requestoptions))
  .map((res: Response) => {
    if (res) {
      if (res.status === 201) {
        return [{ status: res.status, json: res }]
      }
      else if (res.status === 200) {
        return [{ status: res.status, json: res }]
      }
    }
  }).catch((error: any) => {
    if (error.status === 500) {
      return Observable.throw(new Error(error.status));
    }
    else if (error.status === 400) {
      return Observable.throw(new Error(error.status));
    }
    else if (error.status === 409) {
      return Observable.throw(new Error(error.status));
    }
    else if (error.status === 406) {
      return Observable.throw(new Error(error.status));
    }
  });
}*/
