import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: '[contactRow]',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent implements OnInit {

	@Input()
	contactRow: Contact;

	edit(contact: Contact) {

	}

	remove(contact: Contact) {

	}

  constructor() { }

  ngOnInit() {
  }

}
