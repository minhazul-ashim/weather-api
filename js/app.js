const apiKey = `2738614b2f51ac2e6cf163832ae3cf61`;

const loadData = async () => {

    const inputID = document.getElementById('city-name');
    const inputCity = inputID.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`

    console.log(url)

    const fetchData = await fetch(url);
    const res = await fetchData.json();
    displayUI(res);
}

const displayUI = data => {

    document.getElementById('city').innerText = data.name;
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('condition').innerText = data.weather[0].main;
    const imgIcon = document.getElementById('weather-icon');
    // imgIcon.setAttribute('src', `http://openweathermap.org/img/wn/${}@2x.png`)
}