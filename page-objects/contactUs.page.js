class ContactUsPage {
    // async assertContactUs() {
    //     const element = await $('//*[@id="body-content"]/div[1]/div[1]')
    //     await expect(element).toBeDisplayed();
    //     await browser.pause(5000)
    // }

    async fillContactUsForm(fname, lname, email, phoneNum, orgName, orderNum, zipCode, address, sport, message) {
        const fnameElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${fname}"]`);
        const lnameElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${lname}"]`);
        const emailElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${email}"]`);
        const phoneNumElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${phoneNum}"]`);
        const orgNameElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${orgName}"]`);
        const orderNumElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${orderNum}"]`);
        const zipCodeElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${zipCode}"]`);
        const addressElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${address}"]`);
        const sportElement = await $(`//*[@id="contact-us-form"]//input[@placeholder="${sport}"]`);
        const messageElement = await $(`//*[@id="contact-us-form"]//textarea[@placeholder="${message}"]`);
        await browser.pause(1000);
        await fnameElement.setValue(fname);
        await browser.pause(1000);
        await lnameElement.setValue(lname);
        await browser.pause(1000);
        await emailElement.setValue(email);
        await browser.pause(1000);
        await phoneNumElement.setValue(phoneNum);
        await browser.pause(1000);
        await orgNameElement.setValue(orgName);
        await browser.pause(1000);
        await orderNumElement.setValue(orderNum);
        await browser.pause(1000);
        await zipCodeElement.setValue(zipCode);
        await addressElement.setValue(address);
        await browser.pause(1000);
        await sportElement.setValue(sport);
        await browser.pause(1000);
        await messageElement.setValue(message);
        await browser.pause(1000);     
    }
}
export default new ContactUsPage();