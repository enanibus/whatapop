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
        },
        {
            name: "NewProduct",
                path: "/new-product",
            component: "newProduct"
        }],
        templateUrl: "views/raiz.html"
    });