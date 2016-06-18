angular.module("whatapop").directive("productLines", function (ProductService) {

    return {
        restrict: "EA",
        templateUrl: "views/product-lines.html",
        scope: {
            product: "<"
        },
        link: function (scope) {

            scope.obtenerImagen = ProductService.obtenerRutaImagenAbsoluta;

        }
    };

});
