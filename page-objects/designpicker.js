class DesignPickerPage {
  async scrollDownPage() {
    await browser.pause(5000);
    const tipsElement = await $("/html/body/div[7]/div/div[2]/button");
    if (await tipsElement.isDisplayed()) {
      await tipsElement.click();
      await browser.pause(2000);
    }
    let previousCount = 0;
    let currentCount = 0;

    while (true) {
      const elements = await $$('//*[@id="leftMain"]/div/div/div');
      let currentCount = elements.length;

      if (previousCount === currentCount) {
        break;
      }
      previousCount = currentCount;

      // Smooth scrolling: Scroll step by step
      await browser.execute(() => {
        let totalHeight = document.body.scrollHeight;
        let scrollDistance = window.innerHeight / 2; // Scroll half viewport at a time
        let scrollStep = () => {
          window.scrollBy(0, scrollDistance);
          if (window.scrollY + window.innerHeight < totalHeight) {
            setTimeout(scrollStep, 300); // Adjust speed of scrolling
          }
        };
        scrollStep();
      });

      await browser.pause(10000);
    }
    console.log("Number of elements:", currentCount);
  }

  async selectTeamColors() {
    await browser.pause(5000);
    const tipsElement = await $("/html/body/div[7]/div/div[2]/button");
    if (await tipsElement.isDisplayed()) {
      await tipsElement.click();
      await browser.pause(2000);
    }
    const colorWheelButton = await $(
      '//*[@id="section-design-type"]/div[2]/div/div/div/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div/div[1]/button'
    );
    await colorWheelButton.click();
    // Get all elements matching the color palette
    const colorPaletteElements = await $$(
      `//*[@id="section-design-type"]//*[@id and translate(@id, '0123456789', '') = '']`
    );
    const colorPaletteCount = colorPaletteElements.length;

    // Ensure there are enough color options
    if (colorPaletteCount < 6) {
      console.warn("Not enough color options to select 6 different ones.");
      return;
    }

    // Create an array to store unique random indices
    let selectedIndices = [];

    // Randomly select 6 different indices
    while (selectedIndices.length < 6) {
      let randomIndex = Math.floor(Math.random() * colorPaletteCount);
      if (!selectedIndices.includes(randomIndex)) {
        selectedIndices.push(randomIndex);
      }
    }

    // Click on the selected elements
    for (let i = 0; i < selectedIndices.length; i++) {
      const colorElement = colorPaletteElements[selectedIndices[i]];
      await colorElement.click();
      await browser.pause(2000);
      console.log(
        "Clicked color with ID:",
        await colorElement.getAttribute("id")
      );
    }
  }
}

export default new DesignPickerPage();
