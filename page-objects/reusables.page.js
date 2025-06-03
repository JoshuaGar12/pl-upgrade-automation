class reusablesPage {
  async buttonClick(element) {
    const buttonElm = await $(`//*[text()=' ${element} ']`);
    await buttonElm.click();
  }
  async navBarButtonClick(element) {
    const navBarElement = await $(`//*[@id="menu-${element}"]`);
    await navBarElement.click();
    await browser.pause(2000);
  }
  async ElementWaitToBeDisplayed(element) {
    const elm = await $(element);
    await elm.waitForDisplayed({ timeout: 5000 });
  }
  async assertNavBarElement(element) {
    const elm = await $(`//*[@class="uk-padding"]/div[1][normalize-space(text()) = "${element}"]`);
    await elm.waitForDisplayed({ timeout: 5000 });
  }

}

export default new reusablesPage();
