export let mainPage = document.getElementById('main');

window.addEventListener('popstate', currentPage);

function currentPage(event) {

    if (window.history.state.details == 'index.html'){
        return mainPageCreate();
    } else if (window.history.state.details == 'brigadeiros.html') {
        return brigadeirosCreatePage();
    } else if(window.history.state.details == 'cupcakes.html'){
        return cupcakesCreatePage();
    } else if (window.history.state.details == 'candys.html') {
        return candysCreatePage();
    }
    event.preventDefault(event);
}       

//Importação dos Módulos.

import { brigadeirosCreatePage } from "./modules/brigadeiros.js"
import { cupcakesCreatePage } from "./modules/cupcakes.js"
import { candysCreatePage } from "./modules/candys.js"
import { mainPageCreate } from './modules/main.js'

//Botões para a página.

const brigadeirosPage = document.getElementById('brigadeiro');
const cadysPage = document.getElementById('candys');
const cupcakesPage = document.getElementById('cupcakes');
const candyStore = document.getElementById('logo');

//Eventos de Click para as páginas.

brigadeirosPage.addEventListener('click', brigadeiros);
cadysPage.addEventListener('click', candys);
cupcakesPage.addEventListener ('click', cupcakes);
candyStore.addEventListener('click', mainpage)

//Alterando dados URL.
function brigadeiros(event) {
    const brigadeiroUrl = 'brigadeiros.html'
    const brigadeiroRoot = {'details': 'brigadeiros.html'}
    const brigadeirotitle = '';
    window.history.pushState(brigadeiroRoot, brigadeirotitle, [brigadeiroUrl]);
    brigadeirosCreatePage();
    event.preventDefault(event);
}

function cupcakes(event) {
    const cupcakesUrl = 'cupcakes.html'
    const cupcakesRoot = {'details': 'cupcakes.html'}
    const cupcakestitle = '';
    window.history.pushState(cupcakesRoot, cupcakestitle, [cupcakesUrl]);
    cupcakesCreatePage();
    event.preventDefault(event);
}

function candys(event) {
    const candysUrl = 'candys.html'
    const candysRoot = {'details': 'candys.html'}
    const candystitle = '';
    window.history.pushState(candysRoot, candystitle, [candysUrl]);
    candysCreatePage();
    event.preventDefault(event);
}
function mainpage(event) {
    const indexUrl = 'index.html'
    const indexRoot = {'details': 'index.html'}
    const indextitle = '';
    window.history.pushState(indexRoot, indextitle, [indexUrl]);
    mainPageCreate()
    event.preventDefault(event);
}
window.addEventListener ('load', mainpage);