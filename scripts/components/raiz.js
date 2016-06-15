angular
    .module("whatapop")
    .component("raiz", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products"
        },
            {
                name: "OneProduct",
                path: "/product/:id",
                component: "oneProduct"
            }],
        templateUrl: "views/raiz.html"
    });