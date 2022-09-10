import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HTTPService {
  /*
   *  ==============================
   *  IF we need to send header then we send header
   *  ==============================
   */
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  /**
   * ==============================
   *          Helper Methods
   *  ==============================
   */

  private successHandler(res: any) {
    const d = res;
    try {
      if (d.status) {
        return Promise.resolve(d.response);
      }
    } catch (err) {
      console.error('Success Handler catch', err);
    }
    return Promise.resolve(d);
  }

  /*
   *  ==============================
   *  As we don't have CONTACT MANAGEMENT MOCK API so currenlty we using JSON placeholder for showing data
   *  ==============================
   */

  /*
   *  ==============================
   *  Here we fetching all customers record
   *  NOTE: headers are not required to send in a request that's why we use empty headers for now
   *  ==============================
   */

  getCustomersList(): Promise<any> {
    const url = `${environment.api_base_url}/users`;
    return this.http
      .get(url, { headers: {} })
      .toPromise()
      .then(this.successHandler.bind(this));
  }

  /*
   *  ==============================
   *  Here we fetching a single customer record by ID
   *  ==============================
   */
  getCustomersById(id: string | null = ''): Promise<any> {
    const url = `${environment.api_base_url}/users/${id}`;
    return this.http
      .get(url, { headers: {} })
      .toPromise()
      .then(this.successHandler.bind(this));
  }
}
