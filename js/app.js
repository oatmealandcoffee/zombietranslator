$(document).ready(function(){

    var tokens = [
        { en:'. ',  enr:/(.)\s/g,    zb:'.!? ',        zbr:/(.!?)\s/g },
        { en:'r',   enr:/r$/g,        zb:'mx',          zbr:/(mx)$/g },
        { en:'a',   enr:/(\s[Aa]\s)/g,  zb:' bk ',     zbr:/(\s(bk)\s)/g },
        { en:'u',   enr:/[Uu]/g,        zb:'cf',    zbr:/(cf)/g },
        { en:'o',   enr:/[Oo]/g,        zb:'dx',     zbr:/(dx)/g },
        { en:'i',   enr:/[Ii]/g,        zb:'gq',      zbr:/(gq)/g },
        { en:'e',   enr:/[Ee]/g,        zb:'hv',        zbr:/(hv)/g },
        { en:'y',   enr:/[Yy]/g,        zb:'iy',        zbr:/(iy)/g },
        { en:'z',   enr:/[Zz]/g,        zb:'jl',        zbr:/(jl)/g },
        { en:'r',   enr:/[Rr]/g,        zb:'sz',        zbr:/(sz)/g }
    ];

    var testStrings = [
        'The pipe began to rust while new. Open the crate but don\'t break the glass.',
        'Add the sum to the product of these three. Thieves who rob friends deserve jail.',
        'The ripe taste of cheese improves with age. Act on these orders with great speed.',
        'The hog crawled under the high fence. Move the vat over the hot fire.',
        'Cats and dogs each hate the other. Oak is strong and also gives shade.',
        'The quick brown fox jumped over the lazy dog.',
        'Supercalifragilisticexpialidocious',
        'r a e i o u y z r. raeiouyzr.'
    ];

    /* automated string tests to the console */
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
        console.log('');
    }

    function zombify(en){
        var zb = en;
        var lastToken = tokens.length;
        for (var i = 0; i < lastToken; i++) {
            var t = tokens[i];
            // global method
            zb = zb.replace(t.enr, t.zb);
            console.log(t.enr.toString() + ": " + zb);
            }
        return zb;
    }

    function unzombify(zb){
        var en = zb;
        var lastToken = tokens.length;
        for (var i = 0; i < lastToken; i++) {
            var t = tokens[i];
            // global method
            en = en.replace(t.zbr, t.en);
            console.log(t.zbr.toString() + ": " + en);
        }
        return en;

    }

});
