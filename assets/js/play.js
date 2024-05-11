function play(channelID){
  let channel = tvList[0].tvlist[channelID];

  document.getElementById("amenu0").innerHTML = `Back`;
  document.getElementById("main-frame").innerHTML = `
  <!-- Videostream -->
  <div class="row" style="">
    <div class="col">
      <div class="iframe-container">
        <!-- Replace the video ID with your YouTube video ID -->
        <iframe
          id="embeddedIframe"
          width="100%"
          height="100%"
          src="${channel["tv-streaming"]}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share; speaker-selection;screen-wake-lock;idle-detection"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>

  <!-- Television Information -->
  <div class="row" style="padding-top:20px">
    <div class="col">

    <!-- TV Censorship alert -->
    <!--
    <div class="alert alert-primary" role="alert">
      ${channel["tv-desc"]}
    </div>
    -->

    <!-- TV description -->
    <div class="alert alert-primary" role="alert">
      ${channel["tv-desc"]}
    </div>

    <!-- TV Location and type -->
    <p style="font-size:12px;">
      <i class='bx bxs-map'></i> ${channel["tv-loc"]}
      <br>
      <i class='bx bx-tv'></i> ${channel["tv-type"]}
    </p>
    </div>
  </div>
  `;


  /*
  // Function to request fullscreen mode for the iframe
  function requestFullscreen() {
    if (embeddedIframe.requestFullscreen) {
        embeddedIframe.requestFullscreen();  // Standard (W3C) method
    } else if (embeddedIframe.mozRequestFullScreen) {
        embeddedIframe.mozRequestFullScreen();  // Firefox-specific method
    } else if (embeddedIframe.webkitRequestFullscreen) {
        embeddedIframe.webkitRequestFullscreen();  // Webkit-specific method (Safari/Chrome)
    } else if (embeddedIframe.msRequestFullscreen) {
        embeddedIframe.msRequestFullscreen();  // IE-specific method
    }
  }

  
  // Function to run after the iframe is fully loaded
  function handleIframeLoad() {

    var embeddedIframe = document.getElementById('embeddedIframe');
    // Automatically trigger fullscreen mode when the document is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      requestFullscreen();  // Trigger fullscreen mode for the embedded iframe
    });
    // Now you can perform other actions or call functions
    // after the iframe is fully loaded and ready
  }

  // Wait for the iframe to fully load
  document.getElementById('embeddedIframe').addEventListener('load', handleIframeLoad);
  */
}