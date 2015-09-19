define(['translation'], function(translation){

    describe("general translation suite", function() {
        var tx;

        beforeEach(function() {
             tx = new translation();
         });

        it("should perform two-way English-Zombie translation", function() {
            var en = 'supercalifragilisticexpialidocius';
            var zb = 'srrrrRrprrrcalrrRrfragrrRrlrrRrstrrRrcrrxprrRralrrRrdrrrRrcrrRrrrrrRrs';
            expect(tx.zombify(en)).toBe(zb);
            expect(tx.unzombify(zb)).toBe(en);
        });

    });

    describe("translation rule suite", function() {
        var tx;

        beforeEach(function() {
             tx = new translation();
         });

         // txPunc
         it("should translate \'.\' (period) to \'.!?\'", function() {
             // TODO toBe boolean
             expect(typeof tx != 'undefined').toBe(true);
             // TODO toBeDefined tx
             expect(tx.OC_TOKENS).toBeDefined();
             // TODO toMatch regex
             expect(tx.OC_TOKENS['txPunc'].en).toMatch(tx.OC_TOKENS['txPunc'].enr);
         });
         // txLcR
         it("should translate lower-case \'r\' to \'rh\'", function() {
             // TODO not.toBeNull rule result
             // TODO toContain array
             // TODO toBeLessThan int
         });
         // txUcR
         it("should translate upper-case \'R\' to \'RR\'", function() {
             // TODO toBeGreaterThan int
             // TODO toThrow
             // TODO not.ToBe boolean
         });
         // txBcE
         it("should translate upper- and lower-case \'E\' to \'rr\'", function() {
             // TODO not.toMatch regex
             // TODO not.toBeUndefined tx
             // TODO toBeNull var
         });
         // txBcI
         it("should translate upper- and lower-case \'I\' to \'rrRr\'", function() {
             // TODO not.ToContain array
             // TODO not.toBeLessThan int
             // TODO not.toBeGreaterThan int
         });
         // txBcO
         it("should translate upper- and lower-case \'O\' to \'rrrRr\'", function() {
             // TODO not.ToThrow
             // TODO spyOn, toHaveBeenCalled
             // TODO spyOn, toHaveBeenCalledWith
         });
         // txBcU
         it("should translate upper- and lower-case \'U\' to \'rrrrRr\'", function() {
             // TODO toBe int
             // TODO spyOn, not.toHaveBeenCalled
             // TODO spyOn, not.toHaveBeenCalledWith
         });
         // txLoneA
         it("should translate standalone upper- and lower-case \'A\' to \'hra\'", function() {
             // TODO not.toBe int
             // TODO not.toBe str
             // TODO toBe int
         });
         // txBcY
         it("should translate upper- and lower-case \'Y\' to \'yz\'", function() {
             // TODO toBe str
             // TODO toBeDefined var
             // TODO toBeUndefined var
         });
         // txBcZ
         it("should translate upper- and lower-case \'Z\' to \'zh\'", function() {
             // TODO toBeGreaterThan int
             // TODO not.ToBeDefined var
             // TODO toBe obj
         });

    });

});
