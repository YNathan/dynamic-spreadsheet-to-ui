import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class SpeakerService {

  public serveIpAndPortUrl = 'http://127.0.0.1:5611';
  private getCorrectionsURL = this.serveIpAndPortUrl + '/api/get_corrections';

  private getUserAuthorizationLevelUrl = this.serveIpAndPortUrl + '/api/get_user_authorization_level';
  private getUsersByPrefixUrl = this.serveIpAndPortUrl + '/api/get_users_by_prefix';
  private updateAuthorisationLavelUrl = this.serveIpAndPortUrl + '/api/update_user_authorization_lavel';
  private getSpreadsheetTablesNameUrl = this.serveIpAndPortUrl + '/api/get_spreadsheet_tables_names';
  private getSpreadsheetColumnsNameUrl = this.serveIpAndPortUrl + '/api/get_spreadsheet_columns_names';
  private updateTablesAndColumnsStructureUrl = this.serveIpAndPortUrl + '/api/update_tables_and_columns_structures';
  private getChosenColumnsUrl = this.serveIpAndPortUrl + '/api/get_chosen_columns';
  private getPrimarySelectionUrl = this.serveIpAndPortUrl + '/api/get_primary_selection';
  private getNextDataUrl = this.serveIpAndPortUrl + '/api/get_next_data';

  constructor(private http: HttpClient, private Http1: Http) {
  }


  getNextData(data) {
    return this.Http1.post(this.getNextDataUrl,data).map(function (data) {
      return data.json();

    });
  }
  
  getChosenColumns() {
    return this.Http1.get(this.getChosenColumnsUrl).map(function (data) {
      return data.json();

    });
  }

  updateTablesAndColumnsStructure(value) {
    return this.Http1.post(this.updateTablesAndColumnsStructureUrl, value).map(function (data) {
      return data.json();

    });
  }
  getSpreadsheetColumnsName() {
    return this.Http1.get(this.getSpreadsheetColumnsNameUrl).map(function (data) {
      return data.json();

    });
  }
  getSpreadsheetTablesName() {
    return this.Http1.get(this.getSpreadsheetTablesNameUrl).map(function (data) {
      return data.json();

    });
  }
  

  getUserAuthorizationLevel(value) {
    return this.Http1.post(this.getUserAuthorizationLevelUrl, value).map(function (data) {
      return data.json();

    });
  }

  getUsersByPrefix(email) {
    return this.Http1.post(this.getUsersByPrefixUrl, email).map(function (data) {
      return data.json();

    });
  }

  updateAuthorisationLavel(value) {
    return this.Http1.post(this.updateAuthorisationLavelUrl, value).map(function (data) {
      return data.json();

    });
  }

  getTripOfEvent(eventIndexes) {
    return this.Http1.post(this.getCorrectionsURL, eventIndexes).map(function (data) {
      return data.json();

    });
  }




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  dateEquals(fisrtDate, secondDate) {
    if ((fisrtDate.getUTCFullYear() == secondDate.getUTCFullYear()) &&
      (fisrtDate.getUTCMonth() == secondDate.getUTCMonth()) &&
      (fisrtDate.getDay() == secondDate.getDay()) &&
      (fisrtDate.getUTCHours() == secondDate.getUTCHours()) &&
      (fisrtDate.getUTCMinutes() == secondDate.getUTCMinutes()) &&
      (fisrtDate.getUTCSeconds() == secondDate.getUTCSeconds())) {
      return true;
    } else {
      return false;
    }
  }

  dateSmaller(firstDate, secondDate) {
    if ((firstDate.getUTCFullYear() < secondDate.getUTCFullYear()) ||
      ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() < secondDate.getUTCMonth())) ||
      ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() == secondDate.getUTCMonth()) && (firstDate.getDay() < secondDate.getDay())) ||
      ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() == secondDate.getUTCMonth()) && (firstDate.getDay() == secondDate.getDay()) && (firstDate.getUTCHours() < secondDate.getUTCHours())) ||
      ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() == secondDate.getUTCMonth()) && (firstDate.getDay() == secondDate.getDay()) && (firstDate.getUTCHours() == secondDate.getUTCHours()) && (firstDate.getUTCMinutes() < secondDate.getUTCMinutes())) ||
      ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() == secondDate.getUTCMonth()) && (firstDate.getDay() == secondDate.getDay()) && (firstDate.getUTCHours() == secondDate.getUTCHours()) && (firstDate.getUTCMinutes() == secondDate.getUTCMinutes()) && (firstDate.getUTCSeconds() < secondDate.getUTCSeconds()))) {
      return true;
    } else {
      return false;
    }
  }


}
