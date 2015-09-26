define([], function () {
    /* TRANSLATION STACK */

    var tx = function tx() {
        // initialize

        /* CONSTANTS */

        // transalation direction flags
        this.OC_E2Z = true;
        this.OC_Z2E = false;

        this.OC_FUNCTION_FLAG = 'OC_FUNCTION_FLAG';

        // collection of target strings and associated regex for transalation
        // token order reflects highest accuracy in two-way translation without
        // resorting to rules about specific spellings or grammars
        this.OC_TOKENS = {
            '01_txnthr' : { en:'r', enr:/r[\s\.\?\!]/g, zb:'rh', zbr:/(rh)[\s\.\?\!]/g}, // `r` at the end of word ∆ `rh`,
            '02_txWrdr' : { en:'r', enr:/[Rr](?!\s|\.|\?|\!|h)/g, zb:'RR', zbr:/(RR)/g}, // lone `r` (not at end of word or paired with `h`) ∆ `RR`
            '03_txBcE'  : { en:'e', enr:/[Ee]/g, zb:'rr', zbr:/(rr)/g}, // standard letter substution until noted otherwise
            '04_txBcI'  : { en:'i', enr:/[Ii]/g, zb:'rrRr', zbr:/(rrRr)/g},
            '05_txBcO'  : { en:'o', enr:/[Oo]/g, zb:'rrrRr', zbr:/(rrrRr)/g},
            '06_txBcU'  : { en:'u', enr:/[Uu]/g, zb:'rrrrRr', zbr:/(rrrrRr)/g},
            '07_txBcA'  : { en:'a', enr:/[Aa]/g, zb:'hra', zbr:/(hra)/g},
            '08_txBcY'  : { en:'y', enr:/[Yy]/g, zb:'yz', zbr:/(yz)/g},
            '09_txBcZ'  : { en:'z', enr:/[Zz]/g, zb:'zh', zbr:/(zh)/g},
        };

        /* RULES */

        /* MAIN */

        // translation rule that handles sentence case after rules in OC_TOKENS
        // have been run
        this.sentenceCase = function (str) {
            var delimiter = /\s/g;
            // split str at word boundary '\s' into components
            var components = str.split(delimiter);
            // check each of the components for sentence tokens
            var lastComponent = components.length;
            for ( var c = 0 ; c < lastComponent ; c++ ) {
                var tgt = components[c];
                // if component ends with [.?!] then capitalize first letter
                var lastChr = tgt.charAt(tgt.length);
                if ( lastChr == '.' || lastChr == '?' || lastChr == '!' ) {
                    tgt = tgt.charAt(0).toUpperCase() + tgt.substring(1);
                    components[c] = tgt;
                }
            }

            // join the array with '\s' and return
            var result = components.join(delimiter);
            return result;
        }

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
             // TODO update to sentence case
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
             // TODO update to sentence case
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
