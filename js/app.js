$(document).ready(function(){


    var tokens = [
        { en:'. ',  enr:/(.\s)$/g,    zb:'.!? ',      zbr:/(.!?\s)$/g },
        { en:'r',   enr:/[r$]/g,        zb:' rh ',        zbr:/[(rh)$]/g },
        { en:'r',   enr:/[Rr]/g,        zb:' RR ',        zbr:/(\sRR\s)/g },
        { en:'a',   enr:/(\s[Aa]\s)/g,  zb:' hra ',       zbr:/(\shra\s)/g },
        { en:'e',   enr:/[Ee]/g,        zb:' rr ',        zbr:/(\srr\s)/g },
        { en:'i',   enr:/[Ii]/g,        zb:' rrRr ',      zbr:/(\srrRr\s)/g },
        { en:'o',   enr:/[Oo]/g,        zb:' rrrRr ',     zbr:/(\srrrRr\s)/g },
        { en:'u',   enr:/[Uu]/g,        zb:' rrrrRr ',    zbr:/(\srrrrRr\s)/g },
        { en:'y',   enr:/[Yy]/g,        zb:' rrRhr ',     zbr:/(\srrRhr\s)/g },
        { en:'z',   enr:/[Zz]/g,        zb:' HH ',        zbr:/(\sHH\s)/g },
    ];

    $('#english-to-zombie-btn').click(function(event){
        var en = $('#english').val();
        var zb = zombify(en);
        $('#english').val('');
        $('#zombie').val(zb);
    return false;
    });

    $('#zombie-to-english-btn').click(function(event){
        var zb = $('#zombie').val();
        var en = unzombify(zb);
        $('#zombie').val('');
        $('#english').val(en);
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
