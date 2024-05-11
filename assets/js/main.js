var tvList = []

const xhr = new XMLHttpRequest();
xhr.open('GET', './assets/js/tv-list.json', false);  // Open XHR request in synchronous mode
xhr.send();

if (xhr.status === 200) {
    tvList = JSON.parse(xhr.responseText);
} else {
    console.error('XHR request failed:', xhr.statusText);
}

let listLength = tvList[0].tvlist.length;


// This variable is used to save menu position
let prevMenuPos = 5;
let menuPos = 0;

// This variable is used to selected channel
let prevChannelPos = listLength-1;
let channelPos = 0;

// This variable is used to know if stream is played or not 
let isPlay = false;



displayHome();






/*
document.addEventListener('keydown', function(event) {
  // Get the key that was pressed
  const key = event.key;

  // Log the pressed key to the console
  console.log('Pressed key:', key);


  // This key is used to full screen
  if(key == "f"){
    // Simulate pressing 'Tab' key five times (focus navigation)
    for (let i = 0; i < 5; i++) {
      // Manually trigger the 'Tab' key behavior (focus navigation)
      document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', code: '9', bubbles: true }));
    }
    // Press Enter
    document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter' }));
    alert("Done");
  }





  if(key == "ArrowRight"){
    prevMenuPos = menuPos
    menuPos += 1;
    if(menuPos > 5){menuPos = 0;}

    updateHeaderMenu(prevMenuPos, menuPos)
  }

  if(key == "ArrowLeft"){
    prevMenuPos = menuPos
    menuPos -= 1;
    if(menuPos < 0){menuPos = 5;}

    updateHeaderMenu(prevMenuPos, menuPos)
  }

  if(key == "l"){
    if(isPlay == false){
      prevChannelPos = channelPos
      channelPos += 1;
      if(channelPos > listLength-1){channelPos = 0;}
  
      updateChannel(prevChannelPos, channelPos);
    }
  }

  if(key == "k"){
    if(isPlay == false){
      prevChannelPos = channelPos
      channelPos -= 1;
      if(channelPos < 0){channelPos = listLength-1;}
  
      updateChannel(prevChannelPos, channelPos);
    }
  }

  if(key == "Enter"){
    if(isPlay == false){
      // If menu position is in "Home"
      if(menuPos == 0){
        play(channelPos); 
        isPlay = true;
      }
    }
  }

  if(key == "Backspace"){
    if(isPlay == true){
      isPlay = false;

      displayHome();
    }
  }

});


function updateHeaderMenu(prevNumber, number){
  var menuId = "menu" + String(number);
  var prevMenuId = "menu" + String(prevNumber);

  // update header menu
  document.getElementById(prevMenuId).classList.remove("active-nav")
  document.getElementById(menuId).classList.add("active-nav")

  document.getElementById('a' + prevMenuId).classList.remove("active-nav-text")
  document.getElementById('a' + menuId).classList.add("active-nav-text")
}

function updateChannel(prevNumber, number){
  var channelID = "list" + String(number);
  var prevChannelID = "list" + String(prevNumber);

  // update channel
  document.getElementById(prevChannelID).classList.remove("selected-list")
  document.getElementById(channelID).classList.add("selected-list")
}
*/