const VendingMachine = require("../src/vending-machine");
const inventory = require("../src/inventory");
const cash = require("../src/cash");

describe("VendingMachine", () => {
  let vendingMachine = [];
  beforeEach(() => {
    vendingMachine = new VendingMachine(inventory, cash);
  }); //beforeEach gets called everytime before a test is run

  describe("when asked for inventory", () => {
    it("should return inventory object", () => {
      expect(vendingMachine.printInv()).toEqual(inventory);
    });
  });
  //   describe("when asked for inventory", () => {
  //     it("should return inventory object", () => {
  //       expect(vendingMachine.printInv()).toEqual(inventory);
  //     });
  //   });
});
