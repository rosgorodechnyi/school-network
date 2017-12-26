import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './shared/services/auth.service';
import { ProfileModule } from './profile/profile.module';
import { ClassesService } from './shared/services/classes.service';
import { UsersService } from './shared/services/users.service';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { AuthGuard } from './shared/services/auth.guard';
import { FriendsService } from './shared/services/friends.service';

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
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuard,
    FriendsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
