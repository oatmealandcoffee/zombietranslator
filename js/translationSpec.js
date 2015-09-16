describe("translation suite", function() {
    var tx;

    beforeEach(function() {
        tx = new translation();
    });

    it("should perform english-to-zombie translation", function() {
        var en = 'supercalifragilisticexpialidocius';
        var zb = 'srrrrRrprrrcalrrRrfragrrRrlrrRrstrrRrcrrxprrRralrrRrdrrrRrcrrRrrrrrRrs';
        expect(tx.zombify(en)).toBe(zb);
    });

    it("should perform zombie-to-english translation", function() {

    });

    it("should perform two-way translation", function() {

    });

});
