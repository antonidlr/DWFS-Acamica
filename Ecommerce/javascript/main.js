//Product Manager

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.products_section = document.getElementById('products-section');
        this.dom_object = null;
        this.add_btn_dom_object = null;
        this.remove_btn_dom_object = null;

        this.build_dom_object();
    }

    get_html() {
        return `
        <h3 class="product-name">${this.name}</h3>
        <div class="product-price">${this.price}</div>
        <br>
        <div class="product-actions">
            <form>
                <button type="button" class="add-btn">Add</button>
                <button type="button" class="remove-btn">Remove</button>
            </form>
        </div>
        `;
    }

    build_dom_object() {
        this.dom_object = document.createElement("article");
        this.dom_object.innerHTML = this.get_html();
        this.add_btn_dom_object = this.dom_object.querySelector('.add-btn');
        this.dom_object.querySelector('.remove-btn');
    }

    render() {
        this.products_section.appendChild(this.dom_object);
    }

    register_callback_for_add_btn(callback_method) {
        let product = this;
        this.remove_btn_dom_object.addEventListener('click', e => callback_method(product));
    }

}

// Product Manager 

class Products {
    constructor(products) {
        this.products = products;
    }

    render() {
        this.products.forEach(product => product.render());
    }
}
