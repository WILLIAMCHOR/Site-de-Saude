function conteudo(a, b) {
    let lista = (document.querySelector('.' + a));
    const subMenu = lista.querySelector('.subMenu ul');
    lista = lista.querySelector('.conteudos');
    const conteudo = lista.querySelector('#' + b);

    if (conteudo.className == 'conteudo') {
        for (cadaFilho of lista.children) {
            cadaFilho.className = 'conteudo';
        }
        for (cadaFilho of subMenu.children) {
            cadaFilho.className = '';
        }
        (subMenu.querySelector('#' + b)).className = 'focado';
        conteudo.className = "conteudo visivel"
    }
}
const headerIndex = document.querySelector('.index').querySelector('header');
headerIndex.className = 'um';
let timer = 0;
setInterval(() => {
    if (timer == 0) {
        headerIndex.className = 'um';
        timer++;
    }
    else if (timer == 1) {
        headerIndex.className = 'dois';
        timer++;
    }
    else if (timer == 2) {
        headerIndex.className = 'tres';
        timer++;
    }
    else {
        headerIndex.className = 'quatro';
        timer = 0;
    }
}, 2 * 1000);