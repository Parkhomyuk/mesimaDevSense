import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }   from '@angular/common/http';
import { RouterModule, Routes} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(<Routes>[
      {path: 'gallary/:id', component: PictureComponent},
      {path: 'home', component: HomeComponent,  useAsDefault:true},
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
