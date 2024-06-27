import { commonData } from "../fixtures/common.data"
const { 
  I, 
  loginPage, 
  mainPage
} = inject();

Feature('Login');

Before(async() => {
  await mainPage.openLogin();
});

Scenario('User should be able to login successfully to the application', async() => {
  await loginPage.performLogin(commonData.username, commonData.password)
  await loginPage.validateSignOutButton();
});
