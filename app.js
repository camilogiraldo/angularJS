(function () {
    var app = angular.module('store', []);
    
    app.controller('StoreController', function(){
        this.product = gems;
    });
    
    var gems = [
        {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'A dodecahedron is a gem',
        canPurchase: true,
        soldOut: false,
    }, {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'A Pentagonal gem',
        canPurchase: true,
        soldOut: false,
    }
    ]
})();