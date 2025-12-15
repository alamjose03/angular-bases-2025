import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Este decorador se encarga de recibir información.
  @Input()
  public characterList: Character[] = [
    {
      name: "Trunks",
      power: 1000
    }
  ];

  @Output()
  public onDeleteCharacterEmit: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    console.log(id);
    this.onDeleteCharacterEmit.emit(id);
  }
}
