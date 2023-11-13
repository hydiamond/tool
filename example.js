import puppeteer from "puppeteer-core";

import GoLogin from "./src/gologin.js";
import { TOKEN_PROFILE, LIST_PROFILE } from "./src/constants/profile.js";
import { URLS } from "./src/constants/urls.js";
import { sleep } from "./src/utils/utils.js";
import { autoScroll, scrollTopPage } from "./src/actions/action.js";

async function bootstrap(profile_id) {
  let autoUpdateBrowser = false;
  let token = TOKEN_PROFILE;
  const GL = new GoLogin({
    token,
    profile_id,
    autoUpdateBrowser,
  });

  console.log(GL);

  const { status, wsUrl } = await GL.start().catch((e) => {
    console.trace(e);

    return { status: "failure" };
  });

  if (status !== "success") {
    console.log("Invalid status");

    return;
  }

  const browser = await puppeteer.connect({
    browserWSEndpoint: wsUrl.toString(),
    ignoreHTTPSErrors: true,
    defaultViewport: null,
    args: ["--start-fullscreen"],
  });

  const page = await browser.newPage();
  await page.goto("https://dr-psy.com", {
    timeout: 3000000,
  });

  while (1) {
    await sleep(1000);
    await page.goto(URLS[Math.floor(Math.random() * URLS.length)], {
      timeout: 300000,
    });
    let i = 0;

    while (i < 3) {
      await autoScroll(page);
      try {
        const iframes = await page.$$("iframe");
        await sleep(1000);

        if (iframes?.length > 0) {
          const frame_active = iframes[0];
          await page.waitFor(1500);
          await frame_active.click();
          console.log("done click");
          await autoScroll(page);
          await scrollTopPage(page);
        }
      } catch (e) {
        console.log("Error get element iframe click");
      }
      await scrollTopPage(page);
      i++;
    }
  }

  await browser.close();
  await GL.stop();
}

await Promise.all(
  LIST_PROFILE.map(async (profile) => {
    await bootstrap(profile.id);
  }),
);
