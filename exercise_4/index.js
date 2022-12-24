const btn = document.querySelector('.btn');
const text = document.querySelector('.text')



const error = () => {
   text.textContent = "Error"
}


const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`)
    .then((response) => {
        return response.json();})
    .then((data) => {
        console.log(data);
        text.textContent = `Вы находитесь в ${data.timezone}, местные дата и время ${data.date_time}`
    })
  };

btn.addEventListener('click', ()=>{
  if (!navigator.geolocation){
    text.textContent = "Не удалось получить данные"
  } else {
    navigator.geolocation.getCurrentPosition(success, error); 
    
}
})