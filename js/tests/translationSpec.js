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
             // TODO Rule 1
             // TODO Rule 2
             // TODO Rule 3
         });
         // txLcR
         it("should translate lower-case \'r\' to \'rh\'", function() {

         });
         // txUcR
         it("should translate upper-case \'R\' to \'RR\'", function() {

         });
         // txBcE
         it("should translate upper- and lower-case \'E\' to \'rr\'", function() {

         });
         // txBcI
         it("should translate upper- and lower-case \'I\' to \'rrRr\'", function() {

         });
         // txBcO
         it("should translate upper- and lower-case \'O\' to \'rrrRr\'", function() {

         });
         // txBcU
         it("should translate upper- and lower-case \'U\' to \'rrrrRr\'", function() {

         });
         // txLoneA
         it("should translate standalone upper- and lower-case \'A\' to \'hra\'", function() {

         });
         // txBcY
         it("should translate upper- and lower-case \'Y\' to \'yz\'", function() {

         });
         // txBcZ
         it("should translate upper- and lower-case \'Z\' to \'zh\'", function() {

         });

    });

});
