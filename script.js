const main = document.querySelector('main');
const input = document.getElementById('themeInput');

function createImage(image_src) {
    let div = document.createElement("div");
    let img = document.createElement("img");

    div.classList.add('card');
    img.src = image_src;
    img.alt = 'ImageAI';
    
    div.append(img);
    main.append(div);
}

let theme = `theme`;

async function setImages(url, event) {
    if (!!event) event.preventDefault();
    main.innerHTML = "";
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${url}&per_page=30&orientation=landscape&client_id=V906Ry6rWcix8mos2tvpXSPEUSAT2HbNJpGfYB052FY`);
    const base = await res.json();

    console.log(base.results.slice(0, 30));
    let data = base.results.slice(0, 30);
    data.map(obj => createImage(obj.urls.regular));
}
setImages(theme);


input.addEventListener('input', event => theme = event.target.value);

setTimeout(()=>{
    input.focus();
}, 300)