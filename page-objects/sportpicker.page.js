class SportPickerPage {
    async selectSport(sport, gender) {
      let elementFound = false;
      for (let i = 1; i <= 15; i++) {
        await browser.pause(1000);
        const element = await $(`//*[@id="qx-sports-con"]/div[${i}]/div/div[2]`);
        const sportElementText = await element.getText();
        await element.moveTo();
        console.log('Element text:', sportElementText);
        if (sportElementText === sport) {
          console.log('Index value:', i);
          elementFound = true;
          switch (gender) {
            case 'men':
              await $(`//*[@id="qx-sports-con"]/div[${i}]/div/div[3]/div/div[1]/a/button/span`).click();
              await browser.pause(5000);
              break;
            case 'women':
              await $(`//*[@id="qx-sports-con"]/div[${i}]/div/div[3]/div/div[2]/a/button/span`).click();
              await browser.pause(5000);
              break;
            case 'browse':
              await $('//*[@id="qx-sports-con"]/div[4]/div/div[3]/div/div[1]/a/button/span').click();
              break;
            default:
              console.log('Gender not found!!!');
          }
          break;
        }
      }
      if (!elementFound) {
        console.log('Element not found!!!');
      }
    }
    async assertSportPickerPage(sport) {
      const formattedSport =
        sport.charAt(0).toUpperCase() + sport.slice(1).toLowerCase();
      console.log(formattedSport);
      await this.ElementWaitToBeDisplayed(
        `//*[@id="section-design-type"]/div[1]/div[1]//*[text()="${formattedSport}"]`
      );
    }
    async testfunc() {
      await browser.pause(5000);
      console.log('test');
      const val = 10;
      console.log(val);
    }
  }
  
  export default new SportPickerPage();