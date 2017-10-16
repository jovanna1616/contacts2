import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contacts: any[] = [];
  private filter: String = '';
  private newContact: Contact = new Contact();

  constructor(private contactService: ContactsService) {
    contactService.getContacts().subscribe(
      data => {
        this.contacts = data;
      },
      (err:HttpErrorResponse) => {
        alert('Something went wrong');
        // nisu navodnici vec tik  ecmascript 6 syntax
        alert(`Backend returned code ${err.status} with message: ${err.error}`);

      });

  }
  addContact(contact: Contact) {
    
    this.newContact = new Contact();// anuliranje inputa forme
    this.contactService.addContact
    (
      contact.firstName,
      contact.lastName,
      contact.email
    ).subscribe
    (
      contact => {
        this.contacts.push(contact);
      }
    );
  }

  remove(contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

}
