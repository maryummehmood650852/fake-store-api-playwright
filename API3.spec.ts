
import { test, expect } from '@playwright/test';

test('Create a new product', async ({ request }) => {

  const response = await request.post(
    'https://fakestoreapi.com/products',
    {
      data: {
        title: 'Laptop',
        price: 999,
        description: 'Test laptop',
        image: 'https://example.com/laptop.jpg',
        category: 'electronics'
      }
    }
  );

  expect(response.status()).toBe(201);

  const data = await response.json();

  console.log(data);

  expect(data.title).toBe('Laptop');
  expect(data.price).toBe(999);
});

