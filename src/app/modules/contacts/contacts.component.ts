import { Component, OnInit } from '@angular/core';
import { HTTPService } from 'src/app/service/http.service';
import { IGetCustomerProps } from 'src/app/service/Interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  customers: IGetCustomerProps[] = [];
  customer: IGetCustomerProps = {
    name: '',
    website: '',
    username: '',
    phone: '',
    address: { city: '', street: '', suite: '' },
    company: { catchPhrase: '', bs: '', name: '' },
    email: '',
    id: '',
  };
  id: string = '';
  isLoading = false;

  constructor(private http: HTTPService) {}

  /*
   *  ==============================
   *  As we don't have CONTACT MANAGEMENT MOCK API so currenlty we using JSON placeholder for showing data
   *  ==============================
   */

  ngOnInit(): void {
    this.getCustomersList();
  }

  /*
   *  ==============================
   *  Here we are fetching the records from customer api
   *  Since we are using JSON placeholder so in this case there is only 1 email for a single customer
   *  ==============================
   */
  getCustomersList = () =>
    this.http
      .getCustomersList()
      .then((customer) => (this.customers = customer));

  /*
   *  ==============================
   *  Here we are fetching the single customer by sending ID to server and getting single customer from customer api
   *  ==============================
   */
  getCustomerById = () =>
    this.http.getCustomersById(this.id).then((res) => {
      /*
       *  ==============================
       *  Here we are using Loader/Spinner to display to a spinner while fetchin the record from server
       *  ==============================
       */
      this.isLoading = false;
      this.customer = res;
    });

  /*
   *  ==============================
   *  @Output event handler it receive the record when user have selected any customer
   *  ==============================
   */
  handleViewCustomer = (id: string) => {
    this.isLoading = true;
    /*
     *  ==============================
     *  Here we are using ID to send to server for getting single customer
     *  ==============================
     */
    this.id = id;
    this.getCustomerById();
  };
}
