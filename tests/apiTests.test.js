import { test, expect } from '@playwright/test';
import ApiService from '../services/ApiService';

test('Test 1: Verify Products List API', async ({ request }) => {
    const apiService = new ApiService(request);

    const response = await apiService.getProductsList();
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('products');
    expect(responseBody.products.length).toBeGreaterThan(0);

    console.log(`Total Products: ${responseBody.products.length}`);
});

test('Test 2: Verify Brands List API', async ({ request }) => {
    const apiService = new ApiService(request);

    const response = await apiService.getBrandsList();
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('brands');
    expect(responseBody.brands.length).toBeGreaterThan(0);

    console.log(` Total Brands: ${responseBody.brands.length}`);
});

test('Test 3: Verify Search Product API', async ({ request }) => {
    const apiService = new ApiService(request);

    const searchQuery = "jean";

    const response = await apiService.searchProduct(searchQuery);
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('products');
    expect(responseBody.products.length).toBeGreaterThan(0);

    responseBody.products.forEach(product => {
        expect(product.name.toLowerCase()).toContain(searchQuery.toLowerCase());
    });

    console.log(`Products found for search: ${searchQuery}`);
});
