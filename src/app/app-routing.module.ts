import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
 *  ==============================
 *  Here we are using lazy loading for importing modules
 *  ==============================
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full',
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./modules/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
