import puppetteer from 'puppeteer';
import { fork } from 'child_process';
import { format } from 'path';

jest.setTimeout(60000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('valid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget="card-num-form"]');
    const input = await form.$('[data-id="card-input"]')
    await input.type('4276550011117820');
    const button = await page.$('[data-id="card-button"]');
    button.click();
    await page.waitForSelector('[data-id="valid"]');
  });
  test('novalid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget="card-num-form"]');
    const input = await form.$('[data-id="card-input"]')
    await input.type('4286550011117820');
    const button = await page.$('[data-id="card-button"]');
    button.click();
    await page.waitForSelector('[data-id="novalid"]');
  });
  test('novalid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget="card-num-form"]');
    const input = await form.$('[data-id="card-input"]')
    await input.type('42aa550011117820');
    const button = await page.$('[data-id="card-button"]');
    button.click();
    await page.waitForSelector('[data-id="novalid"]');
  });
});
