export const createImage = imgUrl => {
    const img = document.createElement('img');
    img.classList.add("carousel-img", "d-block", "w-100");
    img.src = imgUrl;

    return img;
}