
import { test, expect } from '@playwright/test';

test('Verify product from Fake Store API', async ({ request }) => {

  const response = await request.get('https://fakestoreapi.com/products');

  expect(response.status()).toBe(200);

  const products = await response.json();

  expect(products.length).toBeGreaterThan(0);

  const firstProduct = products[0];

  console.log('Title:', firstProduct.title);
  console.log('Price:', firstProduct.price);
  console.log('Category:', firstProduct.category);

  expect(firstProduct.title).toBeTruthy();
  expect(firstProduct.price).toBeGreaterThan(0);
  expect(firstProduct.category).toBeTruthy();
});

