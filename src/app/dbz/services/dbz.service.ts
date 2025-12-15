import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

// Este decorador permite que el servicio sea inyectable en cualquier parte de la aplicación.
@Injectable({
  providedIn: 'root' // Esto indica que el servicio estará disponible en toda la aplicación.
})
export class DBZService {


  public characters: Character[] = [
    {
      id: uuid(),
      name: "krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500,
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 7500,
    }
  ];

  public addCharacter(event: Character): void {

    // Usar el spread operator para clonar el objeto event y agregar el id.
    const newCharacter: Character = { id: uuid(), ...event };

    // Forma tradicional de hacerlo.
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: event.name,
    //   power: event.power
    // };

    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id != id);
  }
}
