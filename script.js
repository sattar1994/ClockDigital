const time = document.getElementById('time');
const date = document.getElementById('date');
setInterval(()=>{
   let dater = new Date();
   let hours = dater.getHours();
   let minute = dater.getMinutes();
   let second = dater.getSeconds();
   if(hours < 10){
      hours = '0' + hours
   }
   if(minute < 10){
      minute = '0' + minute
   };
    
   time.innerHTML = `${second} :${minute} :${hours}`;
   let week = dater.toLocaleDateString('fa-IR',{weekday:'long'});
   let month = dater.toLocaleDateString('fa-IR',{month:'long'});
   let year = dater.toLocaleDateString('fa-IR',{year: 'numeric'});
   let day = dater.toLocaleDateString('fa-IR',{day: 'numeric'});
   let full = `${week} ${day} ${month} ${year} `;
   date.innerHTML = full

}, 1000);