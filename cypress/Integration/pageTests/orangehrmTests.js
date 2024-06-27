import login_po from "../../support/pageClasses/login_po.js"
import logout_po from "../../support/pageClasses/logout_po.js"
import link_po from "../../support/pageClasses/logout_po.js";
describe('', () => {

    //Create Objects of all the 3 classes

    const login=new login_po();
    const logout=new logout_po();
    const link=new link_po();
    //const login_po=new login_po();
    it('login and logout test', () => {
        login.enterurl();
        login.login();
        //link.clickonlink('admin');
        cy.wait(100)
        logout.logout();
    });
});