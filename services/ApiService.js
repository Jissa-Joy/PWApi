class ApiService {
    constructor(request) {
        this.request = request;
        this.baseUrl = 'https://automationexercise.com/api';
    }

    async getProductsList() {
        return await this.request.get(`${this.baseUrl}/productsList`);
    }

    async getBrandsList() {
        return await this.request.get(`${this.baseUrl}/brandsList`);
    }







        async searchProduct(productName) {
            return await this.request.post(`${this.baseUrl}/searchProduct`, {
                form: { search_product: productName }, // Correct way to send JSON data in POST request
            });
        }
        
    
}

export default ApiService;
