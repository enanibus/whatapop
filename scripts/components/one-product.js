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

                // Recuperamos el identificador del producto
                // a partir de los parámetros de la ruta.
                var productId = next.params.id;

                // Recuperamos el producto correspondiente al identificador recuperado.
                ProductService.getOneProduct(productId).then(function (response) {
                    self.product = response.data;
                    self.descriptionHtml = $sce.trustAsHtml(self.product.description);
                });

                // Recuperar valor de favorito
                self.isFavorite = localStorage.getItem(productId);
            };

            // Obtenemos la ruta absoluta de la imagen.
            self.obtenerRutaImagen = ProductService.obtenerRutaImagenAbsoluta;


            self.markAsFavorite = function () {
                if (typeof(Storage) !== "undefined") {

                    var marked = localStorage.getItem(self.product.id);

                    if (marked === "true") {
                        localStorage.removeItem(self.product.id);
                        self.isFavorite = false;
                        return;
                    }
                    if (marked !== "false") {
                        localStorage.setItem(self.product.id, "true");
                        self.isFavorite = true;
                        return;
                    }
                }
            }

        }

    });