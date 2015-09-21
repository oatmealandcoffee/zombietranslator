define([], function () {
    /* TRANSLATION STACK */

    var tx = function tx() {
        // initialize

        /* CONSTANTS */

        // place in roadmap where development stopped last
        // used solely for testing; not for translation purposes
        this.OC_VERSION = 1.8;
        // transalation direction flags
        this.OC_E2Z = true;
        this.OC_Z2E = false;

        // collection of target strings and associated regex for transalation
        // token order reflects highest accuracy in two-way translation
        this.OC_TOKENS = {
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

        /* RULES */

        /*
        Specific rule functions for translation (required per spec)
        str: target string
        dir: boolean, true for english-to-zombie, false for zombie-to-english
        returns string
        */

        this.txPunc = function txPunc( str, dir ) {
            var tokens = this.OC_TOKENS['txPunc'];
            return this.translate( str, tokens, dir );
        }

        this.txLcR = function txLcR( str, dir ) {
            var tokens = this.OC_TOKENS['txLcR'];
            return this.translate( str, tokens, dir );
        }

        this.txUcR = function txUcR( str, dir ) {
            var tokens = this.OC_TOKENS['txUcR'];
            return this.translate( str, tokens, dir );
        }

        this.txBcE = function txBcE( str, dir ) {
            var tokens = this.OC_TOKENS['txBcE'];
            return this.translate( str, tokens, dir );
        }

        this.txBcI = function txBcI( str, dir ) {
            var tokens = this.OC_TOKENS['txBcI'];
            return this.translate( str, tokens, dir );
        }

        this.txBcO = function txBcO( str, dir ) {
            var tokens = this.OC_TOKENS['txBcO'];
            return this.translate( str, tokens, dir );
        }

        this.txBcU = function txBcU( str, dir ) {
            var tokens = this.OC_TOKENS['txBcU'];
            return this.translate( str, tokens, dir );
        }

        this.txLoneA = function txLoneA( str, dir ) {
            var tokens = this.OC_TOKENS['txLoneA'];
            return this.translate( str, tokens, dir );
        }

        this.txBcY = function txBcY( str, dir ) {
            var tokens = this.OC_TOKENS['txBcY'];
            return this.translate( str, tokens, dir );
        }

        this.txBcZ = function txBcZ( str, dir ) {
            var tokens = this.OC_TOKENS['txBcZ'];
            return this.translate( str, tokens, dir );
        }
        /* MAIN */

        // order of operations given in global tokens object
        this.zombify = function (en){
             var str = en;
             var dir = this.OC_E2Z;
             str = this.txPunc( str , dir );
             str = this.txLcR( str , dir );
             str = this.txUcR( str , dir );
             str = this.txBcE( str , dir );
             str = this.txBcI( str , dir );
             str = this.txBcO( str , dir );
             str = this.txBcU( str , dir );
             str = this.txLoneA( str , dir );
             str = this.txBcY( str , dir );
             str = this.txBcZ( str , dir );
             return str;
        }

        this.unzombify = function (zb){
             var str = zb;
             var dir = this.OC_Z2E;
             str = this.txBcZ( str , dir );
             str = this.txBcY( str , dir );
             str = this.txLoneA( str , dir );
             str = this.txBcU( str , dir );
             str = this.txBcO( str , dir );
             str = this.txBcI( str , dir );
             str = this.txBcE( str , dir );
             str = this.txUcR( str , dir );
             str = this.txLcR( str , dir );
             str = this.txPunc( str , dir );
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
