import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtDepartmentsComponent } from './art-departments/art-departments.component';
import { SingleArtDepartmentComponent } from './art-departments/single-art-department/single-art-department.component';
import { ArtObjectComponent } from './art-departments/single-art-department/art-object/art-object.component';
import {CarouselModule} from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import { ArtObjectModalComponent } from './art-departments/single-art-department/art-object-modal/art-object-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtDepartmentsComponent,
    SingleArtDepartmentComponent,
    ArtObjectComponent,
    ArtObjectModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
