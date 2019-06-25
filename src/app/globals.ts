import {Injectable} from '@angular/core';

@Injectable()
export class Globals {
  languageSelected: string = 'hebrew';

  languages = [
    {
      value: 'hebrew',
      viewValue: 'עברית'
    }, {
      value: 'english',
      viewValue: 'English'
    }, {
      value: 'russian',
      viewValue: 'Р усский'
    }, {
      value: 'franch',
      viewValue: 'Francais'
    }
  ];

  authorized;
  authorizationLevel = 0;
  index = -1;

  filteredObj = function (str) {
    this.dialogTextes.find(function (item, i) {
      if (item.name === str) {
        this.index = i;
        return i;
      }
    });
  }
}
