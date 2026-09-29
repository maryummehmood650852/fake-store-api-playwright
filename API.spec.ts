
import { test, expect } from '@playwright/test';

test('Update a product', async ({ request }) => {

  const response = await request.put(
    'https://fakestoreapi.com/products/1',
    {
      data: {
        title: 'Updated Laptop',
        price: 1200,
        description: 'Updated laptop',
        image: 'https://example.com/laptop.jpg',
        category: 'electronics'
      }
    }
  );

  expect(response.ok()).toBeTruthy();

  const data = await response.json();

  console.log(data);

  expect(data.title).toBe('Updated Laptop');
  expect(data.price).toBe(1200);
});

