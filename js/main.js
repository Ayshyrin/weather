const apiKey = '292e0a0198074f95bc4185259231709'

const header = document.querySelector('header');
const form = document.querySelector('form');
const input = document.querySelector('input');

form.onsubmit = (e) => {
    e.preventDefault();
    let city = input.value;
    console.log(city);

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        console.log(data.location.name);
        console.log(data.current.temp_c);
        console.log(data.current.condition.text);

        const prevCard = document.querySelector('.card');
        if (prevCard) prevCard.remove();

        const html = `<div class="card">
        <div class="card-city">
            ${data.location.name}
        </div>

        <div class="card-weather">
            <div class="card-value">
                ${data.current.temp_c}°C
            </div>
        </div>
        <div class="card-description">
            ${data.current.condition.text}
        </div>
    </div>`

    header.insertAdjacentHTML('afterend', html)
    })
}  

