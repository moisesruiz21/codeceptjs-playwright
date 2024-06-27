const { I } = inject();
class InputPage {
    fields = {
        fullName: "#fullName"
    }
    title = {
        input_title: "Input"
    }

    async validateTitle(){
        I.seeElementInDOM(this.title.input_title)
    }

    async validateFirstElement() {
        I.seeElementInDOM(this.fields.fullName)
    }
} 
export = new InputPage()