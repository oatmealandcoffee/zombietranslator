$(document).ready(function(){

    // token order is immutable
    var tokens = [
        { en:'. ',  enr:/(.\s)$/g,      zb:'.!? ',      zbr:/(.!?)\s$/g },
        { en:'r',   enr:/r$/g,          zb:'rh',        zbr:/(rh)$/g },
        { en:'R',   enr:/(RR)/g,        zb:'RR',        zbr:/(RR)/g },
        { en:'e',   enr:/[Ee]/g,        zb:'rr',        zbr:/(rr)/g },
        { en:'i',   enr:/[Ii]/g,        zb:'rrRr',      zbr:/(rrRr)/g },
        { en:'o',   enr:/[Oo]/g,        zb:'rrrRr',     zbr:/(rrrRr)/g },
        { en:'u',   enr:/[Uu]/g,        zb:'rrrrRr',    zbr:/(rrrrRr)/g },
        { en:' a ',   enr:/(\s[Aa]\s)/g,  zb:' hra ',     zbr:/(\s(hra)\s)/g },
        { en:'y',   enr:/[Yy]/g,        zb:'yz',        zbr:/(yz)/g },
        { en:'z',   enr:/[Zz]/g,        zb:'zh',        zbr:/(zh)/g },
    ];

    /* TESTING STACK */

    /* automated string tests to the console */

    function test() {

        var testStrings = [
            'Five quacking zephyrs jolt my wax bed. Sphinx of black quartz, judge my vow!',
            'Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!',
             'r a e i o u y z r. raeiouyzr.'
        ];

         var lastTest = testStrings.length;
         for (var i = 0; i < lastTest; i++) {
             var en = testStrings[i];
             // two-way translation
             console.log(en);
             var e2z = zombify(en);
             console.log(e2z);
             var z2e = unzombify(e2z);
             console.log(z2e);
             console.log('');
         }
    }

    test();

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
    /* main stack */
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

    /* rules stack */

    /*
    Specific rule function for translation
    str: target string
    returns string
    */



    /* helper stack */

    /*
    Utility function for handling search and replace
    str: target string
    search: regex
    replace: token string
    returns string
    */
    function translate( str, search, replace ) {
        return str.replace(search, replace);
    }

});
