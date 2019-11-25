import { Component, OnInit, Input, Output, EventEmitter, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class RegisterComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  matcher = new MyErrorStateMatcher();

  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  sendMsg(adresse: string, firstname: string, lastname: string, subject: string, message: string): void {
    window.alert('You have subscribe with this ' + adresse + ' mail adresse and your name is ' + firstname + ' ' + lastname + ' you send this msg ' + message + ' the subject is ' + subject);
  }

}
