angular
    .module("whatapop")
    .value("Propiedades", {
        urlServidor: "http://localhost:8000",
        endpointCategories: "/api/categories",
        endpointProducts: "/api/products",
        endpointUsers: "/api/users"
    });