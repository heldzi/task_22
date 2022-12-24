// Определение местоположения и размера экрана

const info = document.querySelector('#status_status');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.btn_location');

// Сообщение при ошибке

const error = () => {
    info.textContent = 'Информация о местоположении недоступна';
  }
  
  // Сообщение при удачной попытке

  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    info.textContent = `Ваши данные о местоположении: широта (${latitude}°), долгота(${longitude}°)`;

    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = 'Посмотреть на карте';
  }

//   Определяем размеры экрана

const screen = document.querySelector('#screen_size');
const width = window.screen.width;
const height = window.screen.height



//   Накладываем обработчик на кнопку

btn.addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent = '';
    screen.textContent = '';

    if (!navigator.geolocation) {
        info.textContent = 'Не удалось получить данные о Вашем местоположении'
    } else {
        info.textContent = 'Определяем Ваше местоположение...'
        navigator.geolocation.getCurrentPosition(success, error); 
    }

    setTimeout('screen.textContent = `Ширина вашего экрана ${width}, длина вашего экрана ${height}`;', 3000);
})
