import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { Pais } from 'src/app/interfaces/pais.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises:Pais[] = [];
  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.paisesService.getPaises().subscribe( paises => {
      this.paises = paises
      console.log(this.paises);
    });
  }

  drop(evento: CdkDragDrop<Pais>){
    // console.log(evento);
    // {previousIndex: 8, currentIndex: 0, previousContainer: CdkDropList, container: CdkDropList, item: CdkDrag, …}
    moveItemInArray(this.paises,evento.previousIndex,evento.currentIndex);
  }

}
