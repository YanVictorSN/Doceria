import { mainPage } from "../index.js";

export function candysCreatePage() {
    mainPage.innerHTML = `<div id='main-candys'><h4>CANDYS<h4>
    <img class = 'candys' src="assets/imgs/candy-cane.png" alt="">
    <img class = 'candys' src="assets/imgs/gummy-bear.png" alt="">
    <img class = 'candys' src="assets/imgs/lollipop.png" alt="">
    <img class = 'candys' src="assets/imgs/cotton-candy.png" alt=""></div>`

}