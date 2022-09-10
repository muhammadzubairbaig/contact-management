import { Component, Input } from '@angular/core';
import { IGetCustomerProps } from 'src/app/service/Interface';

@Component({
  selector: 'app-email-addresses',
  templateUrl: './email-addresses.component.html',
  styleUrls: ['./email-addresses.component.scss'],
})
export class EmailAddressesComponent {
  /*
   *  ==============================
   *  Here we are using input to use the records which is coming from CONTACT component
   *  ==============================
   */
  @Input() customer: IGetCustomerProps = {
    name: '',
    website: '',
    username: '',
    phone: '',
    address: { city: '', street: '', suite: '' },
    company: { catchPhrase: '', bs: '', name: '' },
    email: '',
    id: '',
  };
  
}
