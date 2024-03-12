let obj= { 
  hour2: 0,
  min2: 0, 
  sec2: 0, 
  ms2: 0
};

let ms=0,sec=0,min=0,hour=0,id;
let arr=[];

document.querySelector('.js-reset-btn').addEventListener('click',()=>{resetAll()});

document.querySelector('.js-mark-btn').addEventListener('click',()=>displayMarkedTimes());

function resetAll()
{
  sec=0;
  min=0;
  hour=0;
  document.querySelector('.js-time').innerHTML='00:00:00:00';
  stopTime();
  document.querySelector('.js-start-btn').innerHTML='Start';
  document.querySelector('.js-mark-time').innerHTML='';
  arr=[];
  document.querySelector('.js-start-btn').classList.remove('to-red');
}

document.querySelector('.js-start-btn').addEventListener('click',()=>startTime());

function startTime()
{
  if(document.querySelector('.js-start-btn').innerHTML==='Stop')
  {
    stopTime();
    document.querySelector('.js-start-btn').innerHTML='Start';
    document.querySelector('.js-start-btn').classList.remove('to-red');
    return;
  } 
  id=setInterval(()=>
  {
    ms++;
    sec+=Math.floor(ms/100);
    ms=ms%100;
    min+=Math.floor(sec/60);
    sec=sec%60;
    hour+=Math.floor(min/60);
    min=min%60;

    obj.ms2=ms.toString().padStart(2,'0');
    obj.sec2=sec.toString().padStart(2,'0');
    obj.min2=min.toString().padStart(2,'0');
    obj.hour2=hour.toString().padStart(2,'0');
    document.querySelector('.js-time').innerText=`${obj.hour2}:${obj.min2}:${obj.sec2}:${obj.ms2}`;

  },10);

  if(document.querySelector('.js-start-btn').innerHTML==='Start')
  {
  document.querySelector('.js-start-btn').innerHTML='Stop';
  document.querySelector('.js-start-btn').classList.add('to-red');
  }
  else if(document.querySelector('.js-start-btn').innerHTML==='Stop')
  {
    document.querySelector('.js-start-btn').innerHTML='Start';
    stopTime();
    document.querySelector('.js-start-btn').classList.remove('to-red');
  }
}

function stopTime()
{
  clearInterval(id);
  id=null;
}

function displayMarkedTimes()
  {
    arr.push({...obj});
    document.querySelector('.js-mark-time').innerHTML='';
    for(let i=0;i<arr.length;i++)
    {
    document.querySelector('.js-mark-time').innerHTML=`
    <p><span class="time-span">#${i+1}</span>  ${arr[i].hour2}:${arr[i].min2}:${arr[i].sec2}:${arr[i].ms2}</p>
    `+document.querySelector('.js-mark-time').innerHTML;
    }
  }