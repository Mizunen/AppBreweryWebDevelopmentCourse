$('h1').click(function(){
  $('h1').css('color','purple');
});

$('button').on('click',function(){
  $('h1').hide();

});
  /* if(event.key == "Backspace"){
  let newWord = word.substring(0,word.length-1);
      word = newWord;
    $('h1').text(word);
  }
 if(input.length == 1){
    word += event.key
    $('h1').text(word)
  }
});
*/
