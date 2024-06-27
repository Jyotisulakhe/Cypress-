class login_po{
    enterurl(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }
    login(){
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('.orangehrm-login-button').click();
    }
}

export default login_po;