class ProductManager {

    constructor(){
        this.products = []
    }

    addProducts(title, description, price, thumbnail, code, stock){
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.#generateId()
        }

        const productCode = this.validateCodeProduct(code)
        debugger
        if(productCode === undefined && title && description && price && thumbnail && stock){
            this.products.push(product)
        } else {
            console.log("Error al cargar el producto")

        }
    }

    validateCodeProduct(code) {
        return this.products.find((product)=>product.code===code)
    }

    getProducts(){
        return this.products
    }
    
    getProductsById(id){
        const productById = this.products.find((product)=>product.id===id)
        if (productById === undefined){
            console.log("Not found")
        } else {
            return productById
        }
    }

    

    #generateId() {
        let id = 1
        if (this.products.length !== 0){
            id = this.products[this.products.length - 1].id + 1
        }
        return id
    }
}


/* PRUEBA */

/* let product = new ProductManager()
product.addProducts("Manzana", "Red", 10, "https://images.emojiterra.com/google/android-pie/512px/1f34e.png", 50, 100)
product.addProducts("Naranja", "Orange", 10, "https://images.emojiterra.com/google/android-pie/512px/1f34e.png", 50, 100)
product.addProducts("Naranja", 10, "https://images.emojiterra.com/google/android-pie/512px/1f34e.png", 50, 100)
console.log(product.getProducts())
console.log(product.getProductsById(1))
console.log(product.getProductsById(5)) */