require('../app/app');

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(buildData(10).length).toBe(10);
    });
});