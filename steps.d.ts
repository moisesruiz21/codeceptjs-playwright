type steps_file = typeof import('./steps_file');

type LoginPage = typeof import('./pages/login.page.ts');
type InputPage = typeof import('./pages/input.page.ts');
type MainPage = typeof import('./pages/main.page.ts');

declare namespace CodeceptJS {
  interface SupportObject { 
      I: I, 
      current: any,
      loginPage: LoginPage,
      inputPage: InputPage,
      mainPage: MainPage,
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
