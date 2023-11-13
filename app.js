import {Builder, By} from 'selenium-webdriver';
import GoLogin from "./src/gologin.js";


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTQ4Njg5NjlkYjQwYzY4MDgwZjZlNjAiLCJ0eXBlIjoiZGV2Iiwiand0aWQiOiI2NTQ5OWJkOTAzNjhlNDNiNGI2OWJkMWQifQ.Pc0O5v7_89fAsjCc_UyHG-QRzatZbGC_52nVMIULhMs';
const profile_id = '6549e16a34bb270486c456bc';
async function bootstrap() {
    const GL = new GoLogin({
        token,
        profile_id,
    });

    console.log(GL);

    const { status, wsUrl } = await GL.start().catch((e) => {
        console.trace(e);

        return { status: 'failure' };
    });

    if (status !== 'success') {
        console.log('Invalid status');

        return;
    }
    await GL.start();
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.get("https://dr-psy.com");
    await driver.executeScript(`window.scrollBy(0,${150})`);
    await sleep(1000);
    try {
        const listIframeElements = await driver.findElements(By.tagName("iframe"));
        await listIframeElements[0]?.click();
    } catch (e) {
        console.log(e);
    }
    await sleep(1000);

    await driver.executeScript(`window.scrollBy(0,${250})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${500})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${750})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${1000})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${1250})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${1500})`);
    await driver.get("https://dr-psy.com");
    await driver.executeScript(`window.scrollBy(0,${250})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${500})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${750})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${1000})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${1250})`);
    await sleep(1000);
    await driver.executeScript(`window.scrollBy(0,${1500})`);
    await sleep(1000);
    await driver.quit();
}

for (var i = 0; i < 5; i++) {
    bootstrap();
}
