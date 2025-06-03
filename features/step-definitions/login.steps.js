import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from "../../page-objects/login.page";
import ReusablesPage from '../../page-objects/reusables.page';
import dotenv from 'dotenv';
dotenv.config();

Given(/^I logged in with valid (.*) and (.*)$/, async (username, password) => {
  await browser.url(process.env.BASE_URL);
  await browser.maximizeWindow();
  await LoginPage.reloginMethod(username, password)
});

When(/^I click (.*) button$/, async (navBarButton) => {
  await ReusablesPage.navBarButtonClick(navBarButton)
});

Then('I will be redirected to the Landing Page', async () => {
  await LoginPage.assertLandingPage()
});
     

