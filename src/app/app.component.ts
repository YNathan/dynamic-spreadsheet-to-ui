import {Component, OnInit} from '@angular/core';
import {SpeakerService} from './speaker.service';
import {AuthService, SocialUser, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
import {Globals} from "./globals";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{



  constructor(private service: SpeakerService, private socialAuthService: AuthService,public globals: Globals,private router: Router) {
  }

  private user: SocialUser;
  public authorized: boolean = false;

    public socialSignIn(socialPlatform: string) {

    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        if (userData != null) {
          this.globals.authorized = true;
          this.authorized = true;
          this.user = userData;
          let user = {
            email : this.user.email
          };
          this.service.getUserAuthorizationLevel(user).subscribe(data => {
            this.globals.authorizationLevel = parseInt(data.authorisationLevel);
          });
        }
      }
    );
  }

  public signOut() {
    this.socialAuthService.signOut();
    this.authorized = false;
    this.globals.authorized = false;
    this.globals.authorizationLevel = 0;
  }

  ngOnInit(): void {
      console.log(this.router.url)
  }
}
