$(document).ready(function(){

    /* TRANSLATION STACK */

    /* CONSTANTS */

    // transalation direction flags
    var OC_E2Z = true;
    var OC_Z2E = false;

    // collection of target strings and associated regex for transalation
    // token order reflects highest accuracy in two-way translation
    var OC_TOKENS = {
        'txPunc'    : { en:'. ',  enr:/(\.\s)/g,      zb:'.!? ',      zbr:/(\.\!\?\s)/g },
        'txLcR'     : { en:'r',   enr:/r$/g,          zb:'rh',        zbr:/(rh)$/g },
        'txUcR'     : { en:'R',   enr:/(RR)/g,        zb:'RR',        zbr:/(RR)/g },
        'txBcE'     : { en:'e',   enr:/[Ee]/g,        zb:'rr',        zbr:/(rr)/g },
        'txBcI'     : { en:'i',   enr:/[Ii]/g,        zb:'rrRr',      zbr:/(rrRr)/g },
        'txBcO'     : { en:'o',   enr:/[Oo]/g,        zb:'rrrRr',     zbr:/(rrrRr)/g },
        'txBcU'     : { en:'u',   enr:/[Uu]/g,        zb:'rrrrRr',    zbr:/(rrrrRr)/g },
        'txLoneA'   : { en:' a ', enr:/(\s[Aa]\s)/g,  zb:' hra ',     zbr:/(\s(hra)\s)/g },
        'txBcY'     : { en:'y',   enr:/[Yy]/g,        zb:'yz',        zbr:/(yz)/g },
        'txBcZ'     : { en:'z',   enr:/[Zz]/g,        zb:'zh',        zbr:/(zh)/g },
    };

    /* MAIN */

    // order of operations given in global tokens object
    function zombify(en){
         var str = en;
         var dir = OC_E2Z;
         str = txPunc( str , dir );
         str = txLcR( str , dir );
         str = txUcR( str , dir );
         str = txBcE( str , dir );
         str = txBcI( str , dir );
         str = txBcO( str , dir );
         str = txBcU( str , dir );
         str = txLoneA( str , dir );
         str = txBcY( str , dir );
         str = txBcZ( str , dir );
         return str;
    }

    function unzombify(zb){
         var str = zb;
         var dir = OC_Z2E;
         str = txBcZ( str , dir );
         str = txBcY( str , dir );
         str = txLoneA( str , dir );
         str = txBcU( str , dir );
         str = txBcO( str , dir );
         str = txBcI( str , dir );
         str = txBcE( str , dir );
         str = txUcR( str , dir );
         str = txLcR( str , dir );
         str = txPunc( str , dir );
         return str;
    }

    /* RULES */

    /*
    Specific rule functions for translation (required per spec)
    str: target string
    dir: boolean, true for english-to-zombie, false for zombie-to-english
    returns string
    */

    var txPunc = function txPunc( str, dir ) {
        var tokens = OC_TOKENS['txPunc'];
        return translate( str, tokens, dir );
    }

    var txLcR = function txLcR( str, dir ) {
        var tokens = OC_TOKENS['txLcR'];
        return translate( str, tokens, dir );
    }

    var txUcR = function txUcR( str, dir ) {
        var tokens = OC_TOKENS['txUcR'];
        return translate( str, tokens, dir );
    }

    var txBcE = function txBcE( str, dir ) {
        var tokens = OC_TOKENS['txBcE'];
        return translate( str, tokens, dir );
    }

    var txBcI = function txBcI( str, dir ) {
        var tokens = OC_TOKENS['txBcI'];
        return translate( str, tokens, dir );
    }

    var txBcO = function txBcO( str, dir ) {
        var tokens = OC_TOKENS['txBcO'];
        return translate( str, tokens, dir );
    }

    var txBcU = function txBcU( str, dir ) {
        var tokens = OC_TOKENS['txBcU'];
        return translate( str, tokens, dir );
    }

    var txLoneA = function txLoneA( str, dir ) {
        var tokens = OC_TOKENS['txLoneA'];
        return translate( str, tokens, dir );
    }

    var txBcY = function txBcY( str, dir ) {
        var tokens = OC_TOKENS['txBcY'];
        return translate( str, tokens, dir );
    }

    var txBcZ = function txBcZ( str, dir ) {
        var tokens = OC_TOKENS['txBcZ'];
        return translate( str, tokens, dir );
    }

    /*
    Utility function for handling search and replace
    str: target string
    tokens: object containing regex and strings needed for execution
    dir: boolean [e2z, z2e] for which direction to go with translation
    returns string
    */
    function translate( str, tokens, dir ) {
        // console.log(dir + ': ' + str);

        // init to OC_E2Z
        var search = tokens.enr;
        var replace = tokens.zb;

        if ( dir === OC_Z2E ) {
            search = tokens.zbr;
            replace = tokens.en;
        }
        // execute translation
        return str.replace(search, replace);
    }

    /* INTERFACE STACK */

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

     /* TESTING STACK */

     /* automated string tests to the console */

     function test() {

         var testStrings = [
             'The quick brown fox jumped over the lazy dog. Just keep examining every low bid quoted for zinc etchings.',
             'How razorback-jumping frogs can level six piqued gymnasts! Grumpy wizards make toxic brew for the evil queen and jack.',
             'Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!',
             'Cozy lummox gives smart squid who asks for job pen. Amazingly few discotheques provide jukeboxes.',
             'The quick onyx goblin jumps over the lazy dwarf. Woven silk pyjamas exchanged for blue quartz.',
             'Pack my box with five dozen liquor jugs. Jackdaws love my big sphinx of quartz.',
             'The five boxing wizards jump quickly. Five quacking zephyrs jolt my wax bed.',
             'Sphinx of black quartz, judge my vow!',
             '~! @ # $%. ^&* ()_+- ={}|[]\\. :\";\'<>?,./'
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

});
