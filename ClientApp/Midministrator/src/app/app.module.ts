import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerInterceptorService } from './base/server-interceptor.service';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { SpinnerService } from './services/spinner.service';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { NgxSpinnerModule } from 'ngx-spinner';

export function storageFactory() : OAuthStorage {
  return localStorage
}

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        ConfirmDialogComponent,
        ErrorDialogComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        NgxSpinnerModule,
        OAuthModule.forRoot({
          resourceServer: {
            allowedUrls: [ `${environment.midentityUrl}/api`, ],
            sendAccessToken: true
          },
        })
    ],
    providers: [
        AuthGuardService,
         AuthService,
        SpinnerService,
         { provide: OAuthStorage, useFactory: storageFactory }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
