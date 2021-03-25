const { Builder } = require('selenium-webdriver');

(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://selenium.dev');


    // Opens a new tab and switches to new tab
    await driver.switchTo().newWindow('tab');
    await driver.get('https://google.com');
})();
