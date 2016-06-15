angular
    .module("whatapop")
    .service("ProductService", function ($http, Propiedades) {

        // Toda funcionalidad que quieras exponer hacia
        // afuera, tiene que estar publicada en this.

        // Obtenemos la colección de productos.
        this.getProducts = function () {

            return $http.get(Propiedades.urlServidor + Propiedades.endpointProducts);
        };

        // Obtenemos el producto correspondiente al identificador indicado.
        this.getOneProduct = function (productId) {

            return $http.get(Propiedades.urlServidor + Propiedades.endpointProducts + "/" + productId);
        };

        // Montamos la ruta absoluta a la imagen indicada.
        this.obtenerRutaImagenAbsoluta = function (rutaRelativa) {

            return rutaRelativa
                ? (Propiedades.urlServidor + "/" + rutaRelativa)
                : undefined;
        };
    });