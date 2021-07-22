import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from './component/button/button.component'
// import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    CommonModule,
    MatTableModule,
    // MatTableModule
    // MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
