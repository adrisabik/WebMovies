export const createImageTitle = imgUrl => {
    const img = document.createElement('img');
    img.classList.add("img-title", "img-fluid");
    img.src = imgUrl;

    return img;
}