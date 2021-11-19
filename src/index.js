import "./script/component/card-item.js";
import main from "./script/view/main.js";
import "./style/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { createImage } from "./script/view/createImage.js";
import { createImageTitle } from "./script/view/createImageTitle.js";

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import imgTitle1 from './img/1_title.png';
import imgTitle2 from './img/2_title.png';
import imgTitle3 from './img/3_title.png';

// generate image
const createImage1 = createImage(img1);
const createImage2 = createImage(img2);
const createImage3 = createImage(img3);
const createImageTitle1 = createImageTitle(imgTitle1);
const createImageTitle2 = createImageTitle(imgTitle2);
const createImageTitle3 = createImageTitle(imgTitle3);

const addImage = (img1, img2, img3) => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems[0].appendChild(img1);
    carouselItems[1].appendChild(img2);
    carouselItems[2].appendChild(img3);
}

const addImageTitle = (img1, img2, img3) => {
    const carouselCaptions = document.querySelectorAll(".carousel-caption");
    carouselCaptions[0].appendChild(img1);
    carouselCaptions[1].appendChild(img2);
    carouselCaptions[2].appendChild(img3);
}

document.addEventListener("DOMContentLoaded", main);

addImage(createImage1, createImage2, createImage3);
addImageTitle(createImageTitle1, createImageTitle2, createImageTitle3);
