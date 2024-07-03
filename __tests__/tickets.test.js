
const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets")
const ticketsData = require("../data/tickets");

describe ("getTicketByName()", () => {

    test("should return ticket object with a matching ID", ()  => {
        expect(getTicketByName(ticketsData,"Senior Regular" )).toEqual({ id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 })
    })

    test("should return null if no object is found", () => {

        expect(getTicketByName(ticketsData, "hbhbajbhba")).toEqual(null)
    })
})



 describe ("calculateTotalFromTicketNames()" , () => {
    const input = [ "Adult Matinee", "Senior Regular"]
    test("should return value of all tickets from the names array", () => {
        expect(calculateTotalFromTicketNames(ticketsData, input)).toEqual(2268);
    })
 })