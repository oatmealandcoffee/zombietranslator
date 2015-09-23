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

             var str = '. ';
             var zb = '.!? ';
             var dir = tx.OC_E2Z;
             var tokens = tx.OC_TOKENS[ '01_txPunc' ];

             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( tx.OC_TOKENS ).toBeDefined();

             expect( tokens.en ).toMatch( tokens.enr );
         });
         // txLcR
         it("should translate lower-case \'r\' to \'rh\'", function() {

             // expect( tx ).not.toBeNull();

             // expect( tx ).toBeTruthy();

             // expect( tx.foobar ).not.toBeTruthy();
         });
         // txUcR
         it("should translate upper-case \'R\' to \'RR\'", function() {

             // expect( tx.foobar ).toBeUndefined();

             var f = function () {
                 return tx.txUcR( 42 );
             }
            // expect( f ).toThrow();

             // expect( tx.OC_Z2E ).not.toBe( true );

         });
         // txBcE
         it("should translate upper- and lower-case \'E\' to \'rr\'", function() {

             // expect( tx.OC_TOKENS[ 'txBcE' ].en ).not.toMatch( tx.OC_TOKENS[ 'txBcE' ].zbr );

             // expect( tx ).not.toBeUndefined();

             tx = null;
             // expect( tx ).toBeNull();

         });
         // txBcI
         it("should translate upper- and lower-case \'I\' to \'rrRr\'", function() {

             // expect( tx.txBcI( 'I' ) ).not.toBeUndefined();

             // expect( tx.txBcI( 'I' ) ).not.toBeFalsy();

            // expect( tx.foobar ).toBeFalsy();

         });
         // txBcO
         it("should translate upper- and lower-case \'O\' to \'rrrRr\'", function() {

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
         // txBcU
         it("should translate upper- and lower-case \'U\' to \'rrrrRr\'", function() {

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
         // txLoneA
         it("should translate standalone upper- and lower-case \'A\' to \'hra\'", function() {
             var en = 'A';
             //var zb = tx.txBcO( en );
             // expect( tx.txLoneA ).not.toHaveBeenCalledWith( 42 );

             // expect( typeof tx.OC_TOKENS ).not.toBe( 'string' );

             // expect( typeof tx.OC_E2Z ).not.toBe( null );

         });
         // txBcY
         it("should translate upper- and lower-case \'Y\' to \'yz\'", function() {
             var en = 'Y';
             //var zb = tx.txBcY( en );
             // expect( zb ).not.toBe( typeof Number );

             // expect( tx.OC_TOKENS ).not.toContain( {} );

             // expect( typeof tx ).not.toBe( 'function' );

         });
         // txBcZ
         it("should translate upper- and lower-case \'Z\' to \'zh\'", function() {

             // expect( tx.foobar ).toBe( undefined );

             // expect( tx.foobar ).not.toBeDefined();

             // expect( typeof tx ).toBe('object');
         });

    });

});
