define([], function () {
    /* TRANSLATION STACK */

    var tx = function tx() {
        // initialize

        /* CONSTANTS */

        // transalation direction flags
        this.OC_E2Z = true;
        this.OC_Z2E = false;

        // collection of target strings and associated regex for transalation
        // token order reflects highest accuracy in two-way translation without
        // resorting to rules about specific spellings or grammars
        this.OC_TOKENS = {
            '01_txPunc'    : { en:'. ',  enr:/(\.\s)/g,      zb:'.!? ',      zbr:/(\.\!\?\s)/g },
            '02_txLcR'     : { en:'r',   enr:/r$/g,          zb:'rh',        zbr:/(rh)$/g },
            '03_txUcR'     : { en:'R',   enr:/(R)/g,        zb:'RR',        zbr:/(RR)/g },
            '04_txBcE'     : { en:'e',   enr:/[Ee]/g,        zb:'rr',        zbr:/(rr)/g },
            '05_txBcI'     : { en:'i',   enr:/[Ii]/g,        zb:'rrRr',      zbr:/(rrRr)/g },
            '06_txBcO'     : { en:'o',   enr:/[Oo]/g,        zb:'rrrRr',     zbr:/(rrrRr)/g },
            '07_txBcU'     : { en:'u',   enr:/[Uu]/g,        zb:'rrrrRr',    zbr:/(rrrrRr)/g },
            '08_txLoneA'   : { en:' a ', enr:/(\s[Aa]\s)/g,  zb:' hra ',     zbr:/(\s(hra)\s)/g },
            '09_txBcY'     : { en:'y',   enr:/[Yy]/g,        zb:'yz',        zbr:/(yz)/g },
            '10_txBcZ'     : { en:'z',   enr:/[Zz]/g,        zb:'zh',        zbr:/(zh)/g },
        };

        /* RULES */

        /* MAIN */

        // order of operations given in global tokens object
        this.zombify = function (en){
            // init values
             var str = en;
             var dir = this.OC_E2Z;

             // get the keys in order
             var keys = Object.keys( this.OC_TOKENS );
             keys.sort();

             // execute translation
             var lastKey = keys.length;
             for ( var thisKey = 0; thisKey < lastKey; thisKey++ ) {
                 var key = keys[ thisKey ];
                 var tokens = this.OC_TOKENS[ key ];
                 str = this.translate( str, tokens, dir );
             }
             return str;
        }

        this.unzombify = function (zb){
            // init values
             var str = zb;
             var dir = this.OC_Z2E;

             // get the keys in order
             var keys = Object.keys( this.OC_TOKENS );
             keys.sort();

             // execute translation
             var lastKey = keys.length - 1;
             for ( var thisKey = lastKey; thisKey >= 0; thisKey-- ) {
                 var key = keys[ thisKey ];
                 var tokens = this.OC_TOKENS[ key ];
                 str = this.translate( str, tokens, dir );
             }
             return str;
        }

        /*
        Utility function for handling search and replace
        str: target string
        tokens: object containing regex and strings needed for execution
        dir: boolean [e2z, z2e] for which direction to go with translation
        returns string
        */
        this.translate = function translate( str, tokens, dir ) {
            // console.log(dir + ': ' + str);

            // init to OC_E2Z
            var search = tokens.enr;
            var replace = tokens.zb;

            if ( dir === this.OC_Z2E ) {
                search = tokens.zbr;
                replace = tokens.en;
            }
            // execute translation
            return str.replace(search, replace);
        }
    }

    return tx;
});
