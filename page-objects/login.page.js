class LoginPage {
 
    async reloginUser(username, password) {
        const usernameElement = await $('//*[@id="login-dropdown"]/form/div[1]/div/input');
        const passwordElement = await $('//*[@id="login-dropdown"]/form/div[2]/div/div/input');
        const loginButton = await $('//*[@id="login-dropdown"]/form/div[3]/button');

        await usernameElement.setValue(username);
        await passwordElement.setValue(password);
        await loginButton.click();

    }
    async reloginMethod(username, password) {
        const loginElement = await $('//*[@id="qx-header"]/div[4]/ul/li[2]/a/span');
        const logoutButton = await $('//*[@id="qx-header"]/div[4]/ul/li[2]/div/ul/li[12]/button');
        const checkElement = await $('//*[@id="qx-header"]/div[4]/ul/li[2]/a/span');
    
        // Get user status text
        const userStatus = await checkElement.getText();

        if(userStatus === 'Login') {
            await loginElement.click();
            await browser.pause(2000);
            await this.reloginUser(username, password);
            await browser.pause(5000);
        } else {
            await loginElement.click();
            await browser.pause(2000);
            await logoutButton.click();
            await browser.pause(4000);
            await loginElement.click();
    
            // Ensure login page is visible before proceeding
            const isLoginPageVisible = await browser.waitUntil(
                async () => await loginElement.isDisplayed(),
                {
                    timeout: 5000,
                    timeoutMsg: 'Login page did not appear in time'
                }
            );
    
            if (isLoginPageVisible) {
                await this.reloginUser(username, password);
            } else {
                console.error("Login element not found, relogin aborted.");
            }    
            await browser.pause(5000);
        }
    }
    

    async assertLandingPage() {
        const element = await $('//*[@id="menu-customizer"]/div/img')
        await expect(element).toBeDisplayed();
        await browser.pause(8000)

    }
}
export default new LoginPage(); 