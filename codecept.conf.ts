export const config = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://letcode.in/test',
      show: true,
    },
  },
  plugins: {
    coverage: {
      enabled: true,
    },
    heal: {
      enabled: true
    }
  },
  include: {
    loginPage: './pages/login.page.ts',
    inputPage: './pages/input.page.ts',
    mainPage: './pages/main.page.ts'
  },
  name: 'CodeceptJS-Playwright',
};