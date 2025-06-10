import { Given, When, Then } from '@wdio/cucumber-framework';
import ReusablesPage from '../../page-objects/reusables.page';
import ContactUsPage from '../../page-objects/contactUs.page';

Then(/^User should redirect to (.*)$/, async (nav) => {
    await ReusablesPage.navBarButtonClick(nav);
});

When(/^I enter a valid inputs in Contact Us Form (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*)$/, async (fname, lname, email, phoneNum, orgName, orderNum, zipCode, address, sport, message) => {
    await ContactUsPage.fillContactUsForm(fname, lname, email, phoneNum, orgName, orderNum, zipCode, address, sport, message);
})

//This is the updated version new push/commit

