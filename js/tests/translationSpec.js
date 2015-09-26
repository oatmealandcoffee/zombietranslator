define(['translation'], function(translation){

    describe("whole translation suite", function() {
        var tx;

        beforeEach(function() {
             tx = new translation();
         });

        it("should perform two-way English-Zombie translation", function() {

            var en = 'The quick brown fox jumped over the lazy dog. Just keep examining every low bid quoted for zinc etchings.';
            var zb = 'Thrr qrrrrRrrrRrck bRRrrrRrwn frrrRrx jrrrrRrmprrd rrrRrvrrrh thrr lhrazhyzh drrrRrg. JrrrrRrst krrrrp rrxhramrrRrnrrRrng rrvrrRRyzh lrrrRrw brrRrd qrrrrRrrrrRrtrrd frrrRrrh zhrrRrnc rrtchrrRrngs.';

            expect( tx.zombify( en ) ).toBe( zb );

            expect( tx.unzombify( zb ) ).toBe( en );
        });

    });

    describe("translation rule suite", function() {
        var tx;

        beforeEach(function() {
             tx = new translation();

         });

         it("should translate \'r\' at the end of a sentence to \'rh\'", function() {

             // ALL TESTS: test the token itself to be sure it is capturing the
             // atomic target

             var tokens = tx.OC_TOKENS[ '01_txnthr' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir ) ).toBe( zb );

             expect( tx.OC_TOKENS ).toBeDefined();

             expect( tokens.en ).toMatch( tokens.enr );
         });

         it("should translate \'r\'s in words to \'RR\'", function() {

             console.log(tx);
             var tokens = tx.OC_TOKENS[ '02_txWrdr' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir ) ).toBe( zb );

             expect( tx ).not.toBeNull();

             expect( tx ).toBeTruthy();

         });

         it("should translate upper-case \'Ee\' to \'rr\'", function() {

             var tokens = tx.OC_TOKENS[ '03_txBcE' ];
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

         it("should translate upper- and lower-case \'Ii\' to \'rrRr\'", function() {

             var tokens = tx.OC_TOKENS[ '04_txBcI' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( tx ).not.toBeUndefined();

             tx = null;
             expect( tx ).toBeNull();

         });

         it("should translate upper- and lower-case \'Oo\' to \'rrrRr\'", function() {

             var tokens = tx.OC_TOKENS[ '05_txBcO' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

            expect( tx.foobar ).not.toBeTruthy();

            expect( tx.foobar ).toBeFalsy();

         });

         it("should translate upper- and lower-case \'Uu\' to \'rrrrRr\'", function() {

             var tokens = tx.OC_TOKENS[ '06_txBcU' ];
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

         it("should translate upper- and lower-case \'Aa\' to \'hra\'", function() {

             var tokens = tx.OC_TOKENS[ '07_txBcA' ];
             var str = tokens.en;
             var zb = tokens.zb;
             var dir = tx.OC_E2Z;
             expect( tx.translate( str, tokens, dir )).toBe( zb );

             expect( tx.OC_E2Z ).not.toBe( 42 );

             expect( tokens.en ).not.toMatch( tokens.zbr );

         });

         it("should translate standalone upper- and lower-case \'y\' to \'yz\'", function() {

             var tokens = tx.OC_TOKENS[ '08_txBcY' ];
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
         it("should fix sentence case", function() {

             var src = 'a sentence. a sentence? a sentence!';
             var tgt = 'A sentence. A sentence? A sentence!';
             expect( tx.sentenceCase( src ) ).toBe( tgt );

            expect( tx.foobar ).not.toBeDefined();

            expect( typeof tx ).toBe( 'object' );



         });

    });

});
