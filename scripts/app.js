const fetchNasaImages = async () => {
    const res = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=KGxbJr3psbujVh49ZKDhH5aCRWVfXIpwShYa9nDk');
    const data = await res.json();
    console.log(data);



    for (var i = 0; i < data.photos.length; i++) {

        const body = document.querySelector('body');

        const figure = document.createElement('figure');
        figure.classList.add('img_result');

        const container = document.createElement('div');
        container.classList.add('container');

        const image = document.createElement('img');
        image.src = data.photos[i].img_src;

        const caption = document.createElement('h4');
        caption.innerText = `${data.photos[i].rover.name} rover - ${data.photos[i].camera.full_name}`

        const heartAnimation = document.createElement('span');
        heartAnimation.classList.add('heartAnimation');
        heartAnimation.classList.add(`heart${i}`);
        heartAnimation.classList.add(`m-fadeOut`);

        heartAnimation.innerHTML = `<i class="fas fa-heart"></i>`;
        


        const date = document.createElement('p');
        date.innerText = `${data.photos[i].earth_date}`

        const like = document.createElement('button');
        like.classList.add('like');
        like.value = i;
        like.innerHTML = `<i class="fas fa-heart"></i>`;
        like.addEventListener('click', liked);
        like.addEventListener('click', animation);

        body.appendChild(figure);
        figure.appendChild(container);
        container.appendChild(image);
        container.appendChild(heartAnimation);
        figure.appendChild(caption);
        figure.appendChild(date);
        figure.appendChild(like);

    }



}

fetchNasaImages();

function liked() {
    this.classList.toggle('liked');
}

function animation() {
    const heart = document.querySelector(`.heart${this.value}`);
if(this.classList.contains('liked')){
    heart.classList.toggle("m-fadeOut");
    heart.classList.toggle("m-fadeIn");

    setTimeout(() => {
    heart.classList.toggle("m-fadeOut");
    heart.classList.toggle("m-fadeIn");
    },2000);
}
}
