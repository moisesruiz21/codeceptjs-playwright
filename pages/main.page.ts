const { I } = inject();
class MainPage {
    links = {
        workspace_link: "#testing"
    }
    buttons = {
        login: "Log in",
        edit: "a[href='/edit']"
    }

    async openWebSide(){
        I.amOnPage("/");
    }

    async openLogin(){
        this.openWebSide();
        I.click(this.buttons.login);
    }

    async openInputSection(){
        I.waitForElement(this.links.workspace_link, 5);
        I.click(this.links.workspace_link);
        I.waitForElement(this.buttons.edit, 5);
        I.click(this.buttons.edit)
    }

} 
export = new MainPage()
