document.addEventListener('DOMContentLoaded', () => {
    const audioLinks = document.querySelectorAll('.audio-link');
    const audioPlayer = document.getElementById('ct');
    
    
    audioLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const audioSrc = link.getAttribute('href');
            audioPlayer.setAttribute('src', audioSrc);
            audioPlayer.load();
            audioPlayer.play();

            
            audioLinks.forEach(link => {
                link.style.color = ''; // Reset to default color
            });


            link.style.color='red';
        
        });
    });

  
 
});

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();






 