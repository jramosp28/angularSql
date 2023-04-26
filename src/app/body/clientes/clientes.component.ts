import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../../services/service/service.component'
import { formMoto } from 'src/interfaces/interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  form: formMoto[] = [];

  constructor(private serviceComponent: ServiceComponent) {

  }
  ngOnInit(): void {
    this.serviceComponent.getLocalData().subscribe((data: any) => {
      console.log("esto es la data " + data);
      this.form = data;
      console.log(this.form);
    });
  }
}
