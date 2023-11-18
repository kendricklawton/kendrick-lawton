const { Builder, By } = require('selenium-webdriver');

async function chrome() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000'); // Replace with your Next.js app URL

        const toggleButtons = [
            'toggleButtonProject',
            'toggleButtonHome',
            'toggleButtonExperience'
        ];

        for (const buttonId of toggleButtons) {
            const toggleButton = await driver.findElement(By.id(buttonId));
            await toggleButton.click();
            await delay(2000); // Implement a custom delay using setTimeout
        }
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
}

// Example implementation of delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

chrome();
