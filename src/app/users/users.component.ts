import {Component, OnInit} from '@angular/core';
import {SpeakerService} from "../speaker.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: SpeakerService) {
    this.userPrefix = "";
  }

  ngOnInit() {
  }

  userPrefix: string;
  suggestedUsers: any;

  public keyDownFunction(evt): void {
    if (this.userPrefix !== "") {
      let value = {
        email: this.userPrefix
      }
      this.service.getUsersByPrefix(value).subscribe(data => {
        this.suggestedUsers = data.users;
      });
    }
  }

  public authorisationLavelChange(id: number, lavel: number) {
    let value = {
      id: id,
      lavel: lavel
    }
    this.service.updateAuthorisationLavel(value).subscribe(data => {
      this.suggestedUsers = data.users;
    });
  }


}
