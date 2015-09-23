define(['translation'], function(translation){

    describe("whole translation suite", function() {
        var tx;

        beforeEach(function() {
             tx = new translation();
         });

        it("should perform two-way English-Zombie translation", function() {

            var en = 'supercalifragilisticexpialidocius';
            var zb = 'srrrrRrprrrcalrrRrfragrrRrlrrRrstrrRrcrrxprrRralrrRrdrrrRrcrrRrrrrrRrs';

            expect( tx.zombify( en ) ).toBe( zb );

            expect( tx.unzombify( zb ) ).toBe( en );
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
             expect( tx.translate( str, tokens, dir ) ).toBe( zb );

             expect( tx.OC_TOKENS ).toBeDefined();

             expect( tokens.en ).toMatch( tokens.enr );
         });

         // 02_txLcR
         it("should translate lower-case \'r\' to \'rh\'", function() {

             var tokens = tx.OC_TOKENS[ '02_txLcR' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir ) ).toBe( zb );

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

            expect( tx.foobar ).not.toBeTruthy();

            expect( tx.foobar ).toBeFalsy();

         });
         // 06_txBcO
         it("should translate upper- and lower-case \'O\' to \'rrrRr\'", function() {

             var tokens = tx.OC_TOKENS[ '06_txBcO' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

            var f = function () {
                return tx.translate( str, tokens, dir );
            }
            expect( f ).not.toThrow();

            expect( typeof tokens ).not.toBe( 'string' );

         });
         // 07_txBcU
         it("should translate upper- and lower-case \'U\' to \'rrrrRr\'", function() {

             var tokens = tx.OC_TOKENS[ '07_txBcU' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( tx.OC_E2Z ).not.toBe( 42 );

             expect( tokens.en ).not.toMatch( tokens.zbr );

         });
         // 08_txLoneA
         it("should translate standalone upper- and lower-case \'A\' to \'hra\'", function() {

             var tokens = tx.OC_TOKENS[ '08_txLoneA' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( zb ).not.toBe( typeof Number );

             expect( tokens ).not.toContain( {} );

         });
         // 09_txBcY
         it("should translate upper- and lower-case \'Y\' to \'yz\'", function() {

             var tokens = tx.OC_TOKENS[ '09_txBcY' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( typeof tx ).not.toBe( 'function' );

             expect( tx.foobar ).toBe( undefined );

         });
         // 10_txBcZ
         it("should translate upper- and lower-case \'Z\' to \'zh\'", function() {

             var tokens = tx.OC_TOKENS[ '10_txBcZ' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

            expect( tx.foobar ).not.toBeDefined();

            expect( typeof tx ).toBe( 'object' );
         });

    });

});
