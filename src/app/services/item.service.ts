import {Injectable} from '@angular/core';
import {Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'Manzana',
      price: 10.5,
      quantity: 4,
      completed: true
    },
    {
      id: 1,
      title: 'Pan',
      price: 4,
      quantity: 8,
      completed: false
    },
    {
      id: 2,
      title: 'Queso',
      price: 25,
      quantity: 1,
      completed: false
    }
  ];

  constructor() {
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.unshift(item);
  }
}
