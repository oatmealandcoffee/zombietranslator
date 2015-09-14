// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
requirejs.config({
    'baseUrl': 'js',
    'paths': {
      'jquery': 'vendors/jquery.min',
      'bootstrap': 'vendors/bootstrap.min',
  },
  shim: {
      'bootstrap': ['jquery']
  }
});

// Load the main app module to start the app
//require(['main']);

require(['jquery', 'translation'], function($, translation) {

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
              var e2z = tx.zombify(en);
              console.log(e2z);
              var z2e = tx.unzombify(e2z);
              console.log(z2e);
              console.log('');
          }
     }

     test();

}); // jquery

}); // require
