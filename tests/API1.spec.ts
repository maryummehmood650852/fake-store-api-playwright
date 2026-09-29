
import { test, expect } from '@playwright/test';

test('Get products from Fake Store API', async ({ request }) => {

  const response = await request.get('https://fakestoreapi.com/products');

  expect(response.ok()).toBeTruthy();

  const data = await response.json();

  console.log(data);

  expect(data.length).toBeGreaterThan(0);
});

