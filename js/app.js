$(document).ready(function(){
  $('#zombie-to-english-btn').click(function(event){
      var zb = $('#zombie').val();
      var en = unzombify(zb);
      $('#zombie').val('');
      $('#english').val(en);
    return false;
  });

  $('#english-to-zombie-btn').click(function(event){
      var en = $('#english').val();
      var zb = zombify(en);
      $('#english').val('');
      $('#zombie').val(zb);
    return false;
  });

  function zombify(en){
      return en;
    // 1. lower-case "r" at the end of words replaced with "rh".
    // 2. an "a" or "A" by itself will be replaced with "hra".
    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    //   ".!?", followed by a space, followed by a letter.)
    // 4. "e" or "E" is replaced by "rr"
    // 5. "i" or "I" is replaced by "rrRr"
    // 6. "o" or "O" is replaced by "rrrRr"
    // 7. "u" or "U" is replaced by "rrrrRr"
    // 8. "r" or "R' is replaced by "RR"
  }

  function unzombify(zb){
      return zb;

  }

});
