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

         // 01_txPunc
         it("should translate \'.\' (period) to \'.!?\'", function() {

             // ALL TESTS: test the token itself to be sure it is capturing the
             // atomic target
             var tokens = tx.OC_TOKENS[ '01_txPunc' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( tx.OC_TOKENS ).toBeDefined();

             expect( tokens.en ).toMatch( tokens.enr );
         });

         // 02_txLcR
         it("should translate lower-case \'r\' to \'rh\'", function() {

             var tokens = tx.OC_TOKENS[ '02_txLcR' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( tx ).not.toBeNull();

             expect( tx ).toBeTruthy();

         });
         // 03_txUcR
         it("should translate upper-case \'R\' to \'RR\'", function() {

             var tokens = tx.OC_TOKENS[ '03_txUcR' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( tx.foobar ).toBeUndefined();

             var f = function () {
                 return tx.translate( 42 , tokens, dir );
             }
            expect( f ).toThrow();


         });
         // 04_txBcE
         it("should translate upper- and lower-case \'E\' to \'rr\'", function() {

             var tokens = tx.OC_TOKENS[ '04_txBcE' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( tx ).not.toBeUndefined();

             tx = null;
             expect( tx ).toBeNull();

         });
         // 05_txBcI
         it("should translate upper- and lower-case \'I\' to \'rrRr\'", function() {

             var tokens = tx.OC_TOKENS[ '05_txBcI' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             // expect( tx.txBcI( 'I' ) ).not.toBeUndefined();

             // expect( tx.txBcI( 'I' ) ).not.toBeFalsy();

            // expect( tx.foobar ).toBeFalsy();

         });
         // 06_txBcO
         it("should translate upper- and lower-case \'O\' to \'rrrRr\'", function() {

             var tokens = tx.OC_TOKENS[ '06_txBcO' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

            // TODO Make specific to translation
            var f = function () {
                //return tx.txBcO( 'O' );
            }
            // expect( f ).not.toThrow();

            var en = 'Oo';
            //var zb = tx.txBcO( en );

            // expect( tx.txBcO ).toHaveBeenCalled();

            // expect( tx.txBcO ).toHaveBeenCalledWith( en );

         });
         // 07_txBcU
         it("should translate upper- and lower-case \'U\' to \'rrrrRr\'", function() {

             var tokens = tx.OC_TOKENS[ '07_txBcU' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             var i;
             if ( tx.OC_E2Z == true ) {
                 i = 1;
             }
             // expect( i ).toBe(1);

             // expect( i ).not.toBe('undefined');

             var en = 'Uu';
             //var zb = tx.txBcU( en );
             // expect( tx.txBcO ).not.toHaveBeenCalled();

         });
         // 08_txLoneA
         it("should translate standalone upper- and lower-case \'A\' to \'hra\'", function() {

             var tokens = tx.OC_TOKENS[ '08_txLoneA' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             var en = 'A';
             //var zb = tx.txBcO( en );
             // expect( tx.txLoneA ).not.toHaveBeenCalledWith( 42 );

             // expect( typeof tx.OC_TOKENS ).not.toBe( 'string' );

             // expect( typeof tx.OC_E2Z ).not.toBe( null );

         });
         // 09_txBcY
         it("should translate upper- and lower-case \'Y\' to \'yz\'", function() {

             var tokens = tx.OC_TOKENS[ '09_txBcY' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             var en = 'Y';
             //var zb = tx.txBcY( en );
             // expect( zb ).not.toBe( typeof Number );

             // expect( tx.OC_TOKENS ).not.toContain( {} );

             // expect( typeof tx ).not.toBe( 'function' );

         });
         // 10_txBcZ
         it("should translate upper- and lower-case \'Z\' to \'zh\'", function() {

             var tokens = tx.OC_TOKENS[ '10_txBcZ' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             // expect( tx.foobar ).toBe( undefined );

             // expect( tx.foobar ).not.toBeDefined();

             // expect( typeof tx ).toBe('object');
         });

    });

});
