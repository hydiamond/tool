import { sleep } from "../utils/utils.js";

export async function scrollTopPage(page) {
  await page.evaluate(async () => {
    window.scrollBy(0, -250);
  });
  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, -500);
  });
  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, -750);
  });
  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, -1000);
  });

  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, -1250);
  });

  await sleep(1000);
}

export async function scrollToBottomPage(page) {
  await page.evaluate(async () => {
    window.scrollBy(0, 250);
  });

  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, 500);
  });

  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, 750);
  });

  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, 1000);
  });

  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, 1250);
  });

  await sleep(1000);

  await page.evaluate(async () => {
    window.scrollBy(0, 1500);
  });

  await sleep(1000);
}

export async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      let distance = 100;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
