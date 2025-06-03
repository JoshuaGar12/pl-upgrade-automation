import { Given, When, Then } from '@wdio/cucumber-framework';
import ReusablesPage from '../../page-objects/reusables.page';
import Designpicker from '../../page-objects/designpicker';

Then('I scroll down in the design picker page', async () => {
  await Designpicker.scrollDownPage()
});

Then('I select colors in color wheel', async () => {
  await Designpicker.selectTeamColors();
});

When(/^I search for the (.*) in design picker$/, async (navBarButton) => {
  await ReusablesPage.navBarButtonClick(navBarButton)
});