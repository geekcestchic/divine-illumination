$(document).ready(function(){
  //backgroun gif with sound waves
  var waves = document.getElementById('waves');
  waves.style.opacity = 0;

  //factoring out the functions//

  //playing the sound after clicking on the div
  function clickSound(element){
    
    $(element).click(function(){

      soundManager.play(element.id,{volume:50});

      //the button we clicked on should be 90% visible now
      $(element).css('opacity', '0.9');

      //increase the waves gif opacity by 0.1
      waves.style.opacity += 0.1;

      //show the angel for 4s
      showAngel();
    });

  };
  
  //playing the sound after keypress... yeah I know the name is confusing
  function pressSound(element){
    soundManager.play(element.id,{volume:50});
    $(element).css('opacity', '0.9');
    //increase the waves gif opacity by 0,1
    waves.style.opacity += 0.1;

    //show the angel for 4s
    showAngel();
  }

  //assigning the keypresses
  $(window).keypress(function(e){
    // console.log(String.fromCharCode(e.keyCode));
    key = String.fromCharCode(e.keyCode);
    // console.log(key);
    switch (key) {
      case '1': pressSound(one); break;
      case '2': pressSound(two); break;
      case '3': pressSound(three); break;
      case '4': pressSound(four); break;
      case '5': pressSound(five); break;
      case '6': pressSound(six); break;
      case '7': pressSound(seven); break;
      case '8': pressSound(eight); break;
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
    //decrease opacity by 0.1
    waves.style.opacity -= 0.1;
  };

  //assigning the clicks
  clickSound(one);
  clickSound(two);
  clickSound(three);
  clickSound(four);
  clickSound(five);
  clickSound(six);
  clickSound(seven);
  clickSound(eight);
    
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
  function showAngel(){
    $("#angel").animate({
      opacity: 0.35
    }, 4000, function(){ //this is the end function
      $("#angel").animate({opacity: 0},4000);
    });
  };

});