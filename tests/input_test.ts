import { commonData } from "../fixtures/common.data";
import inputPage from "../pages/input.page";
import mainPage from "../pages/main.page";
import loginPage from "../pages/login.page";


Feature('Work-Space');

Before(async() => {
  await mainPage.openLogin();
  await loginPage.performLogin(commonData.username, commonData.password)
  await mainPage.openInputSection();
});

Scenario('User should be located on the input page', async() => {
    await inputPage.validateTitle();
    await inputPage.validateFirstElement();
});
