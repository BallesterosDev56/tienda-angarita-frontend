export const fetchProducts = async ()=> {
    try {
        let response = await fetch('http://localhost:3000/tienda-angarita/home');
        let data  = await response.json();
        return data.products;

    } catch (error) {
        console.error(`Error: ${error}`);
    }
}