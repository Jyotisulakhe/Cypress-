class link_po{
    clickonlink(link){ //the we have to pass it from our test script as a parameter
        cy.contains(link).click();
    }
}

export default link_po;