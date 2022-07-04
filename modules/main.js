import { mainPage } from "../index.js";

export function mainPageCreate(){

    mainPage.innerHTML = `
    <div id='left-content'>
    <h1>"Há tantas <br> doçuras 
    <br>no Universo<br> quanto <br> grãos 
    de açucar<br> na Terra."</h1>
    </div>
    <div id="right-side">
    <img id="right-side-img" src="assets/imgs/bolo (1).png" alt="" srcset="">
    </div>`
}