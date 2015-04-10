$(document).ready(function(){
  
  //make the sound gif transparent
  $('.effect').css('opacity', '0');
  
  //factoring out the functions//

  //playing the sound after clicking on the div
  function playSound(element){
    // console.log(element)
    $(element).click(function(){
      console.log('clicked');
      soundManager.play(element.id,{volume:50});
      $(element).css('opacity', '0.9');
      $('.effect').css('opacity', '0.1');
    });
  };
  
  //playing the sound after keypress... yeah I know the name is confusing
  function clickSound(element){
    console.log(element.id);
    soundManager.play(element.id,{volume:50});
    $(element).css('opacity', '0.9');
    $('.effect').css('opacity', '0.1');
  }

  //assigning the keypresses
  $(window).keypress(function(e){
    // console.log(String.fromCharCode(e.keyCode));
    key = String.fromCharCode(e.keyCode);
    // console.log(key);
    switch (key) {
      case '1': clickSound(one); break;
      case '2': clickSound(two); break;
      case '3': clickSound(three); break;
      case '4': clickSound(four); break;
      case '5': clickSound(five); break;
      case '6': clickSound(six); break;
      case '7': clickSound(seven); break;
      case '8': clickSound(eight); break;
    }

  });

  $(window).keypress(function(e){
    console.log(e.keyCode);
  });
  
  //function that establishes how sounds are created
  function createSound(element){
    soundManager.createSound({
      id: element.id, 
      url:'https://s3-eu-west-1.amazonaws.com/choral-app/sound-'+ element.id +'.wav', 
      onfinish: function(){endSound(element)}  //fix this later
    }); 
    // console.log(element.id)
  }
  
  //after a sound ends this function is called
  function endSound(element){
    console.log('end of sound');
    $(element).css('opacity', '0.5');
    $('.effect').css('opacity', '0');
  };

  //assigning the clicks
  playSound(one);
  playSound(two);
  playSound(three);
  playSound(four);
  playSound(five);
  playSound(six);
  playSound(seven);
  playSound(eight);
    
  //defining SoundManager
  soundManager.url = 'swf/soundmanager2.swf'; // path to movie  
  soundManager.useHighPerformance = true;
  soundManager.flashVersion = 9;  
  soundManager.debugMode = false; // disable debug output   
  
  //creating the eight sounds and linking to our audiofiles
  soundManager.onload = function() {    
    console.log('loaded sound');
    createSound(one);
    createSound(two);
    createSound(three);
    createSound(four);
    createSound(five);
    createSound(six);
    createSound(seven);
    createSound(eight);
  } 

});