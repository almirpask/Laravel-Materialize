try {
    window.$ = window.jQuery = require('jquery');

    require('materialize-css');
} catch (e) {
    console.log('Erro no no acesso do materialize-css ou jquery');
}