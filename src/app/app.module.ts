import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AddComponent } from './components/add/add.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFireStorageModule ,StorageBucket} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { DatetimeComponent } from './components/datetime/datetime.component'
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    DatetimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [AngularFireAuthGuard, { provide: StorageBucket, useValue: 'nfc-hack-198c6.appspot.com' }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
