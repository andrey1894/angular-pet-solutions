import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { ICustomer } from '@core/models';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.scss']
})
export class AddCustomerFormComponent implements OnInit {

  @Input()
    set customerNameErr(isNameErr: boolean) {
      this.isNameErr = isNameErr;
    }
  @Output() newCustomer = new EventEmitter<ICustomer>();

  formGroup: FormGroup;
  isNameErr: boolean;

  MOBILE_PATTERN = /^\+?\d?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address1: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.pattern(this.MOBILE_PATTERN)),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
  });
  }

  ngOnInit(): void {
  }

  addCustomer(): void {
    const customer: ICustomer = {
      name: this.formGroup.get('name').value,
      address1: this.formGroup.get('address1').value,
      address2: this.formGroup.get('address2').value,
      postcode: this.formGroup.get('postcode').value,
      phone: this.formGroup.get('phone').value,
      email: this.formGroup.get('email').value,
    };

    this.newCustomer.emit(customer);
  }

}
