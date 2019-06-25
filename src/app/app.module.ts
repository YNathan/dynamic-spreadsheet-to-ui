import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SpeakerService} from "./speaker.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from "angular5-social-login";
import { UsersComponent } from './users/users.component';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatCard, MatCardModule, MatButtonModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import { MainAppComponent } from './main-app/main-app.component';
import {Globals} from "./globals";
import { ExcelManagmentComponent } from './excel-managment/excel-managment.component';
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("527666316846-q39apovkqlod3fa876o7toecppnohbgs.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}
const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'main-app', component: MainAppComponent },
  { path: 'excel-managment', component: ExcelManagmentComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MainAppComponent,
    ExcelManagmentComponent
  ],
  imports: [
    MatCardModule,
    MatCheckboxModule,
    SpreadSheetsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule,
    SocialLoginModule,
    RouterModule.forRoot(
      appRoutes,
      {onSameUrlNavigation: 'reload'}
    ),
  ],
  providers: [SpeakerService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },Globals],
  bootstrap: [AppComponent]
})
export class AppModule {
}
