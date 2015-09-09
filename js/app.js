$(document).ready(function(){

    var tokens = [
         { en:'. ',  enr:/(\.\s)/g,    zb:'.!? ', zbr:/(\.\!\?\s)/g },
         { en:'r',   enr:/r$/g, zb:'mx',   zbr:/(mx)$/g },
         { en:' a ',   enr:/(\s[Aa]\s)/g,  zb:' bk ',     zbr:/(\sbk\s)/g },
         { en:'u',   enr:/[Uu]/g, zb:'cf',    zbr:/(cf)/g },
         { en:'o',   enr:/[Oo]/g, zb:'dx',     zbr:/(dx)/g },
         { en:'i',   enr:/[Ii]/g, zb:'gq',      zbr:/(gq)/g },
         { en:'e',   enr:/[Ee]/g, zb:'hv', zbr:/(hv)/g },
         { en:'y',   enr:/[Yy]/g, zb:'iy', zbr:/(iy)/g },
         { en:'z',   enr:/[Zz]/g, zb:'jl', zbr:/(jl)/g },
         { en:'r',   enr:/[Rr]/g, zb:'sz', zbr:/(sz)/g }
    ];

    /* TESTING STACK */

    /* automated string tests to the console */

    function test() {

        var testStrings = [
             'Oak is strong and also gives shade. Cats and dogs each hate the other.',
             'supercalifragilisticexpialidocius',
             'r a e i o u y z r. raeiouyzr.'
        ];

         var lastTest = testStrings.length;
         for (var i = 0; i < lastTest; i++) {
             var en = testStrings[i];
             // two-way translation
             console.log(en);
             var e2z = zombify(en);
             console.log(e2z);
             console.log('');
             var z2e = unzombify(e2z);
             console.log(z2e);
             console.log(en);
             console.log('');
         }
    }

    //test();

    /* CONTROLLER STACK */

     $('#english-to-zombie-btn').click(function(event){
         var en = $("#english").val();
         if ( en !== '' ) {
             $("#english").val('');
             var zb = zombify(en);
             $("#zombie").val(zb);
         }
       return false;
     });

     $('#zombie-to-english-btn').click(function(event){
         var zb = $("#zombie").val();
         if ( zb !== '' ) {
             $("#zombie").val('');
             var en = unzombify(zb);
             $("#english").val(en);
         }
       return false;
     });

    /* TRANSLATION STACK */

    function zombify(en){
         var zb = en;
         var lastToken = tokens.length;
         for (var i = 0; i < lastToken; i++) {
             var t = tokens[i];
             // global method
             zb = zb.replace(t.enr, t.zb);
             //console.log(t.enr.toString() + ": " + zb);
             }
         return zb;
    }

    function unzombify(zb){
         var en = zb;
         var lastToken = tokens.length - 1;
         for (var i = lastToken; i >= 0; i--) {
             var t = tokens[i];
             // global method
             en = en.replace(t.zbr, t.en);
             //console.log(t.zbr.toString() + ": " + en);
         }
         return en;
    }
});
