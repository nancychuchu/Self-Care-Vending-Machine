const VendingMachine = require("../src/vending-machine");

describe("VendingMachine", () => {
    const 
  beforeEach(() => {
    const inventory = [
      {
        product: "Ice Cream Tub",
        quantity: 10,
        price: 5.2
      },
      {
        product: "Razor",
        quantity: 10,
        price: 3.25
      },
      {
        product: "Razor",
        quantity: 10,
        price: 3.25
      },
      {
        product: "shampoo",
        quantity: 10,
        price: 3.25
      }
    ];
  }); //beforeEach gets called everytime before a test is run

  describe("when ", () => {
    beforeEach(() => {
         = new VendingMachine(inventory); 
    });
    it("should tell me the % of the students ", () => {
      expect(test.result.passPercentage).toEqual(
        test.projectData.passPercentage
      );
    });

    it("should tell me the satisfaction level of the students that passed ", () => {
      expect(test.result.passSatisfaction).toEqual(
        test.projectData.passSatisfaction
      );
    });
});
