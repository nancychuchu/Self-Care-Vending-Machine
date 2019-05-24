class VendingMachine {
  constructor(inventory, cash) {
    this.inventory = inventory;
    this.cash = cash;
    this.fullQuantity = 15;
  }

  printInv() {
    console.log(this.inventory);
    return this.inventory;
  }

  dispenseInv(product, payment) {
    if (this.inventory[product].quantity < 1) {
      throw new Error("Out of stock");
    }
    if (this.inventory[product].price > payment) {
      throw new Error("Not enough money");
    }
    if (this.inventory[product].price === payment) {
      this.inventory[product].quantity--;
      return `Enjoy your ${product}!`;
    }
    if (this.inventory[product].price < payment) {
      return `Enjoy your ${product}!`;
      //dispense change function here
    }
  }

  dispenseChg(payment, price) {
    const diff = payment - price;
  }

  refillInv() {
    for (const key in this.inventory) {
      if (!this.inventory.hasOwnProperty(key)) continue;
      const product = this.inventory[key];
      if (product.quantity < this.fullQuantity) {
        product.quantity = this.fullQuantity;
      }
    }
    console.log(this.inventory);
    return this.inventory;
  }

  //   () {
  //     return this.data.demographics;
  //   }
  //   queryExperience(years) {
  //     return this.data.experience[years];
  //   }
}

module.exports = VendingMachine;
