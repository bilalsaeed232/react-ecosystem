import { expect } from "chai";

import { getBorderStyleForWarning } from "../TodoListItem";

describe("getBorderStyleForWarning", () => {
    it("return none when the date is less than five days", () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 3);

        const expected = 'none';
        const actual = getBorderStyleForWarning(recentDate, today);

        expect(actual).to.equal(expected);
    });

    it("return red border when the date is greater than five days", () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 7);

        const expected = '2px solid red';
        const actual = getBorderStyleForWarning(recentDate, today);

        expect(actual).to.equal(expected);
    });


});