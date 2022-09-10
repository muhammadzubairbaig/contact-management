import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IGetCustomerProps } from 'src/app/service/Interface';

@Component({
  selector: 'app-customer-siderbar',
  templateUrl: './customer-siderbar.component.html',
  styleUrls: ['./customer-siderbar.component.scss'],
})
export class CustomerSiderbarComponent {
  /*
   *  ==============================
   *  Here we are using Input to use the records which is coming from CONTACT component
   *  Here we are using Output to send the ID to parent component
   *  ==============================
   */
  @Input() customers: IGetCustomerProps[] = [];
  @Output() editCustomer = new EventEmitter();
  isTyping = false;
  id: string = '';

  handleSelectCustomer = (id: string) => {
    this.id = id;
    /*
     *  ==============================
     *  Here we sending ID to contact component for selecting the user
     *  ==============================
     */
    this.editCustomer.emit(this.id);
  };
}
