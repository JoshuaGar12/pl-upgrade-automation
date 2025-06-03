import { Given, When, Then } from '@wdio/cucumber-framework';
import SportPickerPage from '../../page-objects/sportpicker.page';
import ReusablesPage from '../../page-objects/reusables.page';

When(/^I choose (.*) sport and (.*) in sport picker$/, async (sport, gender) => {
    await SportPickerPage.selectSport(sport, gender)
});

Then(/^I should redirected (.*) design picker$/, async (sport) => {
    await SportPickerPage.assertSportPickerPage(sport);
  });

  