import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor() { }

  items = [
    { Name: "Iphone", Mess: "Mô Tả Ngắn 1", Pride: 25 ,id: "a",InStock: 10},
    { Name: "Laptop", Mess: "Mô Tả Ngắn 2", Pride: 30 ,id: "a2",InStock: 5},
    { Name: "Ipad", Mess: "Mô Tả Ngắn 3", Pride: 20 ,id: "a3",InStock: 15},
  ];

  cart:any[] = [];

  addToCard(item: any) {
    console.log(item);
    if (item.InStock === 0) {
      return;
    }
    let itemIndex = this.items.findIndex((element) => element.id === item.id);
    console.log(itemIndex);
    this.items[itemIndex].InStock -= item.quantity;

    let cartIndex = this.cart.findIndex((element) => element.id === item.id);
    if (cartIndex != -1) {
      this.cart[cartIndex].quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
  }

  removeCard(index: any) {
    this.cart.splice(index, 1);
  }

  total() {
    return this.cart.reduce((acc, item) => {
      const price = parseFloat(item.Pride);
      const quantity = parseInt(item.quantity, 10);
      return acc + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
    }, 0);
  }
}
