require(['translation', 'jquery'], function(translation, $) {

    $(document).ready(function(){

        var tx = new translation();

        /* INTERFACE STACK */

         $('#english-to-zombie-btn').click(function(event){
             var en = $("#english").val();
             if ( en !== '' ) {
                 $("#english").val('');
                 var zb = tx.zombify(en);
                 $("#zombie").val(zb);
             }
           return false;
         });

         $('#zombie-to-english-btn').click(function(event){
             var zb = $("#zombie").val();
             if ( zb !== '' ) {
                 $("#zombie").val('');
                 var en = tx.unzombify(zb);
                 $("#english").val(en);
             }
           return false;
         });

     }); // jquery

}); // require
