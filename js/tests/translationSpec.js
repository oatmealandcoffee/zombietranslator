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
             expect(typeof tx != 'undefined').toBe(true);
             expect(tx.OC_TOKENS).toBeDefined();
             expect(tx.OC_TOKENS['txPunc'].en).toMatch(tx.OC_TOKENS['txPunc'].enr);
         });
         // txLcR
         it("should translate lower-case \'r\' to \'rh\'", function() {
             expect(tx).not.toBeNull();

             var vals = [1, 2, 3, 4];
             expect(vals).toContain(2);

             expect(1).toBeLessThan(2);
         });
         // txUcR
         it("should translate upper-case \'R\' to \'RR\'", function() {
             expect(2).toBeGreaterThan(1);

             // TODO: Need to find something related to translation
             var f = function () {
                 return a + 1;
             }
            expect(f).toThrow();

             expect(tx.OC_Z2E).not.toBe(true);
         });
         // txBcE
         it("should translate upper- and lower-case \'E\' to \'rr\'", function() {
             expect(tx.OC_TOKENS['txBcE'].en).not.toMatch(tx.OC_TOKENS['txBcE'].zbr);
             expect(tx).not.toBeUndefined();

             tx = null;
             expect(tx).toBeNull();
         });
         // txBcI
         it("should translate upper- and lower-case \'I\' to \'rrRr\'", function() {
             var vals = [0, 1, 2, 3];
             expect(vals).not.toContain(5);
             expect(vals[3]).not.toBeLessThan(vals[2]);
             expect(vals[2]).not.toBeGreaterThan(vals[3]);
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
