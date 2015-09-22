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

             // setup some spying
              spyOn(tx, 'txBcO');
              spyOn(tx, 'txLoneA');
              spyOn(tx, 'txBcU');

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

             expect(tx).toBeTruthy();

             expect(tx.foobar).not.toBeTruthy();
         });
         // txUcR
         it("should translate upper-case \'R\' to \'RR\'", function() {

             // TODO Make specific to translation
             expect(2).toBeGreaterThan(1);

             // TODO Make specific to translation
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

             // TODO Make specific to translation --> update version to history
             var vals = [0, 1, 2, 3];
             expect(vals).not.toContain(5);
             // TODO Make specific to translation --> version
             expect(vals[3]).not.toBeLessThan(vals[2]);
             // TODO Make specific to translation --> version
             expect(vals[2]).not.toBeGreaterThan(vals[3]);

         });
         // txBcO
         it("should translate upper- and lower-case \'O\' to \'rrrRr\'", function() {

            // TODO Make specific to translation
            var f = function () {
                return 1 + 1;
            }
            expect(f).not.toThrow();

            var en = 'Oo';
            var zb = tx.txBcO( en );

            expect(tx.txBcO).toHaveBeenCalled();
            expect(tx.txBcO).toHaveBeenCalledWith( en )
         });
         // txBcU
         it("should translate upper- and lower-case \'U\' to \'rrrrRr\'", function() {
             var i;
             if ( tx.OC_E2Z == true ) {
                 i = 1;
             }
             expect(i).toBe(1);
             expect(i).not.toBe('undefined');

             // TODO

         });
         // txLoneA
         it("should translate standalone upper- and lower-case \'A\' to \'hra\'", function() {
             var en = 'A';
             var zb = tx.txBcO( en );
             expect(tx.txLoneA).not.toHaveBeenCalledWith( 42 );

             expect(tx.OC_TOKENS).not.toBe(typeof 'string');

             // TODO make test
         });
         // txBcY
         it("should translate upper- and lower-case \'Y\' to \'yz\'", function() {
             var en = 'Y';
             var zb = tx.txBcY( en );
             // TODO: Checking the typeof return value of the typeof property is not a test
             expect(typeof zb).toBe(typeof 'string');
             expect(typeof zb).not.toBe(typeof Number);

             // TODO make test

         });
         // txBcZ
         it("should translate upper- and lower-case \'Z\' to \'zh\'", function() {
             expect( tx.foobar ).toBe( undefined );
             expect( tx.foobar ).not.toBeDefined();
             expect(typeof tx).toBe('object');
         });

    });

});
