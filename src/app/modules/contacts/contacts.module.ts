import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import { ContactsRoutingModule } from './contacts-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from 'src/app/service/http.service';
import { EmailAddressesComponent } from './email-addresses/email-addresses.component';
import { CustomerSiderbarComponent } from './customer-siderbar/customer-siderbar.component';
/*
 *  ==============================
 *  Here we are importing modules and instantiate the service and also added the component in declaration
 *  ==============================
 */
@NgModule({
  imports: [CommonModule, ContactsRoutingModule, HttpClientModule],
  declarations: [
    ContactsComponent,
    EmailAddressesComponent,
    CustomerSiderbarComponent,
  ],
  providers: [HTTPService],
})
export class ContactsModule {}
