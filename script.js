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
