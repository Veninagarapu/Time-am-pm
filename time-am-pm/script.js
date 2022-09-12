const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');


// show time

function showTime(){
    let today= new Date(),
    hour= today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


    // SET AM OR PM
     
    const ampm = (hour>=12)? 'pm':'am';
    // console.log('ampm', ampm);

    hour= hour%12 || 12;

    // console.log('hour', hour);

      time.innerHTML =`${hour}<span>:<span>${addZero(min)}<span>:</span> ${addZero(sec)}`;

      setTimeout(showTime,1000 );
      
}

// ADD ZERO
function addZero(n){
    return(parseInt(n, 10)<10? '0':'')+n;

}

// SET BACKGROUND
function setBg(){
    let today= new Date(),
    hour= today.getHours();

    if(hour<12){
        // morning
     document.body.style.backgroundImage = "url('images/morning.jpg')";

     greeting.textContent ='Good Morning';
   //  console.log('morning', hour);



    }
    else if(hour<18){
        // afternoon
        // console.log('morning', hour);
        document.body.style.backgroundImage = "url('images/evening.jpg')";

     greeting.textContent ='Good Afternoon';

    }
    else{
        //evening
        document.body.style.backgroundImage = "url('images/night.jpg')";

     greeting.textContent ='Good Evening';
     document.body.style.color='white';
    }
}

showTime();
addZero();
setBg();



