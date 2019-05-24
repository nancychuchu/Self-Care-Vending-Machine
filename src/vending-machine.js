class VendingMachine {
  constructor(inventory, cash) {
    this.inventory = inventory;
    this.cash = cash;
  }

  printInv() {
    console.log(this.inventory);
    return this.inventory;
  }

  dispenseInv(product, payment) {
    if (this.inventory[product].quantity < 1) {
      return "Out of stock";
    }
    if (this.inventory[product].price > payment) {
      throw new Error("Not enough money");
    }
    if (this.inventory[product].price === payment) {
      return `Enjoy your ${product}!`;
    }
    if (this.inventory[product].price < payment) {
      return `Enjoy your ${product}!`;
      //dispense change function here
    }
  }

  //   () {
  //     return this.data.demographics;
  //   }
  //   queryExperience(years) {
  //     return this.data.experience[years];
  //   }
}

module.exports = VendingMachine;
