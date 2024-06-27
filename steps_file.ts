const { I, mainPage } = inject();

export = function () {
  return actor({

    openWebSide: async () => {
      I.amOnPage("/");
    },

    login: async () => {
      await mainPage.openLogin();
    }

  });
}

