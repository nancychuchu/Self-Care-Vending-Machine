const VendingMachine = require("../src/vending-machine");
const inventory = require("../src/inventory.json");
const fullInventory = require("../src/full-inventory.json");
const cash = require("../src/cash.json");

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

  describe("when customer didn't pay enough for product", () => {
    it("should return error message", () => {
      expect(() => vendingMachine.dispenseInv("soap", 3)).toThrow(
        "Not enough money"
      );
    });
  });
  describe("when customer pays the exact amount", () => {
    it("should return 'Enjoy your product' message", () => {
      expect(vendingMachine.dispenseInv("razor", 3.25)).toEqual(
        "Enjoy your razor!"
      );
    });
  });
  describe("when asked to dispense product that's empty", () => {
    it("should return error", () => {
      expect(() => vendingMachine.dispenseInv("loofa", 3)).toThrow(
        "Out of stock"
      );
    });
  });
  describe("when inventory is refilled and we check qty of any product", () => {
    it("should return 15", () => {
      expect(vendingMachine.refillInv()).toEqual(fullInventory);
    });
  });
});
