angular
    .module("whatapop")
    .component("products", {

        // Con 'template' / 'templateUrl' establecemos la vista del componente.
        templateUrl: "views/products.html",

        // En 'controller' establecemos la lógica del componente.
        controller: function (ProductService) {

            var self = this;

            // Filtro para buscar productos por nombre.
            self.filtroProducts = {name: ""};

            // Filtro para buscar productos por categoria.
            self.filtroCategories = {name: ""};

            // Podemos engancharnos al hook '$onInit', que se
            // dispara cuando el componente se inicia.
            self.$onInit = function () {

                // Como 'getProducts()' retorna una promesa, tengo que
                // pasar un manejador a su funcion 'then()'.
                ProductService.getProducts().then(function (response) {

                    // En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo de la misma.
                    self.products = response.data;
                });
            };

            // Obtenemos la ruta absoluta de la imagen.
            self.obtenerRutaImagen = ProductService.obtenerRutaImagenAbsoluta;
        }
    });