import { test, expect } from '@playwright/test';

test('has title and hero section', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Marco Condori/);

  // Expect the hero heading to be visible
  const heading = page.getByRole('heading', { name: /Building scalable/i });
  await expect(heading).toBeVisible();
});

test('can navigate to blog and read MDX post', async ({ page }) => {
  await page.goto('/');

  // Click the blog link
  await page.getByRole('link', { name: 'Blog' }).click();

  // Expects page to have a heading with the MDX title
  await expect(page.getByRole('heading', { name: /Integrating DeepSeek/i })).toBeVisible();
});

test('contact form interaction', async ({ page }) => {
  await page.goto('/');

  // Look for the "What brings you here?" step
  await expect(page.getByText('What brings you here?')).toBeVisible();

  // Click the Freelance option
  await page.getByRole('button', { name: 'Freelance Project' }).click();

  // It should now transition to step 2 automatically or via Next button
  // We can check if step 2 appears
  await expect(page.getByText('Tell me more about it')).toBeVisible();
});
