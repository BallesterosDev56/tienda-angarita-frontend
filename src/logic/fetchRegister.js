export const fetchRegister = async (userData)=> {
    try {
        let response = await fetch('http://localhost:3000/tienda-angarita/register', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userData),
        })
    
        let data = await response.json();
        return data;
    
    } catch (error) {
        console.error(`Error: ${error}`);
        
    }
    
    }