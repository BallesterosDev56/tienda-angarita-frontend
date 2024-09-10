export const FetchNewProduct = async (formData)=> {
    try {
        let response = await fetch('http://localhost:3000/tienda-angarita/home', {
            method: 'POST',
            body : formData
        });
        let data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        
    }
}