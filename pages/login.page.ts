const { I } = inject();
class LoginPage {
    fields = {
        email: "email",
        password: "password"
    }
    buttons = {
        submit: "LOGIN",
        signOut: "Sign out"
    }

    async performLogin(username: string, password: string){
        I.fillField(this.fields.email, username)
        I.fillField(this.fields.password, password)
        I.click(this.buttons.submit)
    }

    async validateSignOutButton(){
        I.wait(2);
        I.dontSeeElement(this.buttons.submit)
    }
} 
export = new LoginPage()