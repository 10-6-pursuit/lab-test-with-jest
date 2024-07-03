
const { calculateTotalFromIDs, getConcessionByID } = require("../src/concessions");
const concessionData = require("../data/concessions");


describe("getConcessionByID()", ()=> {


    test("returns an object that match the input ID", () => {
    expect(getConcessionByID(concessionData, "g9sZdG1hI")).toEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 }) // you can also use concessionsData[1]
    })
  
    test("returns null if there's no object that match the input ID", () => {
        expect(getConcessionByID(concessionData, "11")).toEqual(null);
    })
});


describe("calculateTotalFromIDs()", () => {
    const input= ["0Qs9Yp2NL", "NEHAsbTYk"]
    const actual =

    test("returns a total of the sum of input IDs", () => {
        expect(calculateTotalFromIDs(concessionData, input)).toEqual(1778)
    })
    test("should return a total when the given ID's do not match data", () => {
        expect(calculateTotalFromIDs(concessionData, ["ferrrr", "gtttt", "yuuuu"])).toEqual(0)
    })
});
