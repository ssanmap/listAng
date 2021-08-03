import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleado:  Empleado[] = [
    {legajo:1, nombre: 'seba', apellido:'sanma', sexo : 'Masculino', salario: 24444}
  ]
  radioButtonSeleccionado = 'Todos';
  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleado.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
  this.radioButtonSeleccionado = radioButtonSelec;
  }

}
