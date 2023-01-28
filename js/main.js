const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const wrapper = document.querySelector("#container");

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    let search = input.value;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then(response => response.json())
        .then(data => renderData(data))
        .catch(err => renderError(err))

   function renderData(data) {
    wrapper.innerHTML = `<dl class="main__dl" id="dl">
            <dt class="main__title"> ${data [0].word}</dt>
            <dd class="main__text5">${data[0].meanings[0].definitions[0].definition}</dd>
            <audio src="  ${data[0].phonetics[0].audio}" controls>
            </audio>
        </dl>`
    }
    function renderError(err) {
        console.error(err);
        wrapper.innerHTML = `<h2>NOT FOUND!!!</h2>`
    }
      e.target.reset();
})
