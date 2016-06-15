angular
    .module("whatapop")
    .component("oneProduct", {
        bindings: {
            $router: "<"
        },
        templateUrl: "views/one-product.html",
        controller: function (ProductService, $sce) {

            var self = this;

            // El hook '$routerOnActivate' del router nos da información sobre
            // la ruta que se está navegando. Entre otros datos, podemos acceder
            // a los parámetros definidos en la ruta.
            self.$routerOnActivate = function (next) {

                // Recuperamos el identificador de la receta
                // a partir de los parámetros de la ruta.
                var productId = next.params.id;

                // Recuperamos el producto correspondiente al identificador recuperado.
                ProductService.getOneProduct(productId).then(function (response) {
                    self.product = response.data;
                    self.descriptionHtml = $sce.trustAsHtml(self.product.description);
                });
            };

            // Obtenemos la ruta absoluta de la imagen.
            self.obtenerRutaImagen = ProductService.obtenerRutaImagenAbsoluta;
        }
    });