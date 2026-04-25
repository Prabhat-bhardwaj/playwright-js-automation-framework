const BasePage = require("../base/BasePage");

class WebTablePage extends BasePage {

    constructor(page){
        super(page)
        // this.element = "//h5[text()='Elements']"
        this.webTableButton = "//span[text()='Web Tables']";
        this.addButton = "#addNewRecordButton";
        this.firstNameInput = "#firstName";
        this.lastNameInput = "#lastName";
        this.emailInput = "#userEmail";
        this.ageInput = "#age";
        this.salaryInput = "#salary";
        this.departmentInput = "#department";
        this.submitButton = "#submit";
        this.verifyNewEntry = "//div[text()='Prabhat']";
        
    }

    async clickElement(){
        await this.openElementsSection();
    }
     async clickWebTable(){
        await this.click(this.webTableButton);
     }
     async addEntry(fname, lname, email, age, salary, department){
        await this.click(this.addButton);
        await this.fill(this.firstNameInput, fname);
        await this.fill(this.lastNameInput, lname);
        await this.fill(this.emailInput, email);
        await this.fill(this.ageInput, age);
        await this.fill(this.salaryInput, salary);
        await this.fill(this.departmentInput, department);

     }
     async clickSubmit(){
        await this.click(this.submitButton);
     }

}
module.exports = { WebTablePage };