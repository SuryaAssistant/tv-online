function displayHome(){
  let list = tvList;
  let totalRow = Math.floor(listLength / 6) + 1;

  document.getElementById("amenu0").innerHTML = `TV List`;

  // Create row based on total Row
  document.getElementById("main-frame").innerHTML = ``;

  for(let i=0; i<totalRow; i++){
    let rowID = "row" + String(i);
    document.getElementById("main-frame").innerHTML += `
      <div class="row" style="text-align: center" id=${rowID}>
      </div>
    `;

    // Fill row with tv channel
    for(let j=0; j<6; j++){
      let listID = "list" + String(i*6 + j);

      let listNow = list[0].tvlist[i*6 +j];

      if((i*6 + j) < listLength){
        document.getElementById(rowID).innerHTML += `
          <div class="col channel-slide" id="${listID}" style="margin-top:20px" onclick="play(${String(i*6 + j)})">
            <img src="${listNow["tv-logo"]}" class="card-img-top" alt="${listNow["tv-name"]}">
            <div class="card-body">
              <h5 class="card-title">${listNow["tv-name"]}</h5>
              <p class="card-text">${listNow["tv-loc"]}</p>
            </div>     
          </div>
        `;
      }
    }
  }

  // Add border to selected channel
  //updateChannel(prevChannelPos, channelPos);
}