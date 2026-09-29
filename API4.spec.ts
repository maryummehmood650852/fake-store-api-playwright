
import { test, expect } from '@playwright/test';

test('Delete a product', async ({ request }) => {

  const response = await request.delete(
    'https://fakestoreapi.com/products/1'
  );

  expect(response.ok()).toBeTruthy();

  console.log('Status:', response.status());

  const data = await response.json();

  console.log('Response:', data);
});

