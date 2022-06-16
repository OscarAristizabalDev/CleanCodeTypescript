type Size = ''|'S'|'M'|'XL'

class Product {
    constructor(
        public name: string = '', // indica que es opcional
        public price: number = 0, // indica que es opcional
        public size: Size = ''
    ){}

    isProductReady(): boolean{
        // Se itera los atribustos de la clase producto
        for (const key in this) {
            // Se valida el tipo de dato de los atributos
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
                break;
                default: 
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }
        return true;
    }

    toString(){
        // No Dry, porque se tendría que repetir por cada atributo de la clase una validación
        // if(this.name.length <= 0 ) throw Error('name is empty');
        // if(this.price <= 0 ) throw Error('price is empty');
        // if(this.size.length <= 0 ) throw Error('size is empty');

        if (!this.isProductReady) return;

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {

    const bluePants = new Product('Blue large pants', 10, 'S');
    console.log(bluePants.toString());

})();