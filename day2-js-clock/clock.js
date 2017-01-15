setInterval(setDate,1000);


function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  var hours = now.getHours();
  if(hours >=12)
    hours -= 12;
  const secondsDegrees = ((seconds / 60)*360)+90;
  const minutesDegrees = ((minutes / 60)*360)+90;
  const hoursDegrees = ((hours / 12)*360)+90;
  applySecondHandStyles(secondsDegrees);
  applyMinuteHandStyles(minutesDegrees);
  applyHourHandStyles(hoursDegrees);
  console.log(hours+':'+minutes+':'+seconds);
};

function applySecondHandStyles(secondsDegrees){
  const secondHand = document.querySelector('.second-hand');
  if(secondsDegrees == 90){
    secondHand.style.transition = 'none';
    secondHand.style.transform = 'rotate('+secondsDegrees+'deg)';
  }  else {
      secondHand.style.transition = '0.5s';
      secondHand.style.transition = 'timing-function: cubic-bezier(.1,2.5,.5,1)';
      secondHand.style.transform = 'rotate('+secondsDegrees+'deg)';

  }
};

function applyMinuteHandStyles(minutesDegrees){
  const minuteHand = document.querySelector('.min-hand');
  if(minutesDegrees == 90){
    minuteHand.style.transition = 'none';
    minuteHand.style.transform = 'rotate('+minutesDegrees+'deg)';
  }  else{
      minuteHand.style.transition = '0.5s';
      minuteHand.style.transition = 'timing-function: cubic-bezier(.1,2.5,.5,1)';
      minuteHand.style.transform = 'rotate('+minutesDegrees+'deg)';

  }
};

function applyHourHandStyles(hoursDegrees){
  const hourHand = document.querySelector('.hour-hand');
  if(hoursDegrees == 90){
    hourHand.style.transition = 'none';
    hourHand.style.transform = 'rotate('+hoursDegrees+'deg)';
  }

  else{
      hourHand.style.transition = '0.5s';
      hourHand.style.transition = 'timing-function: cubic-bezier(.1,2.5,.5,1)';
      hourHand.style.transform = 'rotate('+hoursDegrees+'deg)';

  }
};
