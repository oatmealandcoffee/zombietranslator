$(document).ready(function(){


    var tokens = [
        { en:'. ',  enr:/(.\s)$/g,    zb:'.!? ',        zbr:/(.!?)\s$/g },
        { en:'r',   enr:/r$/g,        zb:'rh',          zbr:/(rh)$/g },
        { en:'r',   enr:/[Rr]/g,        zb:'RR',        zbr:/(RR)/g },
        { en:'a',   enr:/(\s[Aa]\s)/g,  zb:' hra ',     zbr:/(\s(hra)\s)/g },
        { en:'u',   enr:/[Uu]/g,        zb:'rrrrRr',    zbr:/(rrrrRr)/g },
        { en:'o',   enr:/[Oo]/g,        zb:'rrrRr',     zbr:/(rrrRr)/g },
        { en:'i',   enr:/[Ii]/g,        zb:'rrRr',      zbr:/(rrRr)/g },
        { en:'e',   enr:/[Ee]/g,        zb:'rr',        zbr:/(rr)/g },
        { en:'y',   enr:/[Yy]/g,        zb:'yz',        zbr:/(yz)/g },
        { en:'z',   enr:/[Zz]/g,        zb:'zh',        zbr:/(zh)/g },
    ];

    var testStrings = [
        'r a e i o u y z r',
        'raeiouyzr',
        'The quick brown fox jumped over the lazy dog.',
        'Oak is strong and also gives shade.',
        'Cats and dogs each hate the other.',
        'The pipe began to rust while new.',
        'Open the crate but don\'t break the glass.',
        'Add the sum to the product of these three.',
        'Thieves who rob friends deserve jail.',
        'The ripe taste of cheese improves with age.',
        'Act on these orders with great speed.',
        'The hog crawled under the high fence.',
        'Move the vat over the hot fire.',
    ];

    var lastTest = testStrings.length - 1;
    for (var i = 0; i < lastTest; i++) {
        var en = testStrings[i];
        var e2z = zombify(en);
        var z2e = unzombify(e2z);
        console.log(en);
        console.log(e2z);
        console.log(z2e);
        console.log('');
    }

    $('#english-to-zombie-btn').click(function(event){
        var en = $('#english').val();
        if ( en != '' ) {
            var zb = zombify(en);
            $('#english').val('');
            $('#zombie').val(zb);
        }
        return false;
    });

    $('#zombie-to-english-btn').click(function(event){
        var zb = $('#zombie').val();
        if ( zb != '' ) {
            var en = unzombify(zb);
            $('#zombie').val('');
            $('#english').val(en);
        }
        return false;
    });

    function zombify(en){
        var zb = en;
        var lastToken = tokens.length - 1;
        for (var i = 0; i < lastToken; i++) {
            var t = tokens[i];
            var zb = zb.replace(t.enr, t.zb);
        }
        return zb;
    }

    function unzombify(zb){
        var en = zb;
        var lastToken = tokens.length - 1;
        for (var i = 0; i < lastToken; i++) {
            var t = tokens[i];
            var en = en.replace(t.zbr, t.en);
        }
        return en;

    }

});
