import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceComponent } from 'src/app/services/service/service.component';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})

@Injectable()
export class FormulariosComponent implements OnInit {
  MyNewForm!: FormGroup;

  constructor(private fb: FormBuilder, private formService: ServiceComponent, private http: ServiceComponent) { }

  ngOnInit() {
    this.MyNewForm = this.fb.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      lastName2: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      bike: new FormControl(false, Validators.required),
      bikeModel: new FormControl('', Validators.required)
    });

  }

  SubmitData() {
    console.log(this.MyNewForm.value);
    this.formService.createEmployee(this.MyNewForm.value).subscribe(() => {
      console.log("enviado");
    })

  }

  onSubmit() {
    if (this.MyNewForm.valid) {
      this.formService.clientes(this.MyNewForm.value);
      this.MyNewForm.reset();
      
      if (this.MyNewForm.valid) {
        const form = this.MyNewForm.value;
        this.formService.createEmployee(form).subscribe(() => {
          this.MyNewForm.reset();
        });
      } else {
        console.log('form denied, try again please ;)');
      }
    }
  }
}
