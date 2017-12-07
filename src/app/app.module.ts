import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './shared/services/auth.service';
import { ProfileModule } from './profile/profile.module';
import { ClassesService } from './shared/services/classes.service';
import { UsersService } from './shared/services/users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    UsersModule,
    ProfileModule
  ],
  providers: [
    AuthService,
    ClassesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
