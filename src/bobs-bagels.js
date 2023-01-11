class Item {
  constructor(id) {
    this.id = id;
  }
}
class Basket {
  constructor(capacity) {
    this.items = [];
    this.capacity = capacity;
  }
  addItem(item) {
    if (this.items.length === this.capacity) {
      console.log(`can't fit more items`);
    } else {
      let items = new Item(item);
      this.items.push(items);
    }
  }

  removeItem(index_id) {
    let itemIndex = this.items.findIndex((item) => item.id === index_id);
    if (itemIndex === -1) {
      console.log("item doesn’t exist!");
    } else {
      this.items.splice(itemIndex, 1);
      console.log("Item has been removed !");
    }
  }

  checkFull() {
    return this.items.length === capacity;
  }
}

let basket1 = new Basket(10);
basket1.addItem(`item1`);
basket1.addItem(`item2`);
basket1.addItem(`item3`);
basket1.addItem(`item4`);
basket1.addItem(`item5`);
basket1.addItem(`item11`);
basket1.addItem(`item21`);
basket1.addItem(`item31`);
basket1.addItem(`item25`);
basket1.addItem(`item211`);
basket1.addItem(`item221`);
basket1.addItem(`item231`);

console.log(basket1);
