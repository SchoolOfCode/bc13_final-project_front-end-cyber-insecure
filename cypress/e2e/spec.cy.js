describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email > .form-control').type('email');
    cy.get('#password > .form-control').clear();
    cy.get('#password > .form-control').type('password');
    cy.get('#login-button').click();
    cy.get(':nth-child(2) > :nth-child(1) > .dashboard-card-main > img').click();
    cy.get(':nth-child(1) > .questionsList > .carousel > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="4"] > .react-multi-carousel-item > .cardStyling > .answer-button > .exampleButton').click();
    cy.get('.close-button').click();
    cy.get('.navbar-links > :nth-child(2)').click();
    cy.get('.app-buttons-left > button > svg').click();
    cy.get('.form-companyName > textarea').click();
    cy.get('.form-jobTitle > textarea').click();
    cy.get('.form-location > textarea').click();
    cy.get('.form-salary > textarea').click();
    cy.get('.form-jobLink > textarea').click();
    cy.get('.form-notes > textarea').click();
    cy.get('[type="submit"]').click();
    cy.get('.button > svg').click();
    cy.get('.navbar-links > :nth-child(6)').click();
    cy.get('.knowledge-category-buttons > :nth-child(1)').click();
    cy.get('.knowledge-category-buttons > :nth-child(2)').click();
    cy.get('.knowledge-category-buttons > :nth-child(3)').click();
    cy.get('.knowledge-category-buttons > :nth-child(4)').click();
    cy.get('.knowledge-category-buttons > :nth-child(5)').click();
    cy.get('.knowledge-category-buttons > :nth-child(6)').click();
    cy.get('input').clear('p');
    cy.get('input').type('python');
    cy.get('.input-container > .knowledge-buttons').click();
    cy.get('.navbar-links > :nth-child(7)').click();
    cy.get('.quiz-buttons-div > :nth-child(1)').click();
    cy.get('.quiz-buttons-div > :nth-child(2)').click();
    cy.get('.quiz-buttons-div > :nth-child(3)').click();
    cy.get('.quiz-buttons-div > :nth-child(4)').click();
    cy.get('.quiz-buttons-div > :nth-child(5)').click();
    cy.get('.quiz-buttons-div > :nth-child(6)').click();
    cy.get('.quiz-ul > :nth-child(4)').click();
    cy.get('.navbar-links > :nth-child(8)').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email > .form-control').type('email');
    cy.get('#password > .form-control').clear();
    cy.get('#password > .form-control').type('password');
    cy.get('#login-button').click();
    cy.get(':nth-child(2) > :nth-child(1) > .dashboard-card-main > img').click();
    cy.get(':nth-child(1) > .questionsList > .carousel > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="4"] > .react-multi-carousel-item > .cardStyling > .answer-button > .exampleButton').click();
    cy.get('.close-button').click();
    cy.get('.navbar-links > :nth-child(2)').click();
    cy.get('.app-buttons-left > button > svg').click();
    cy.get('.form-companyName > textarea').click();
    cy.get('.form-jobTitle > textarea').click();
    cy.get('.form-location > textarea').click();
    cy.get('.form-salary > textarea').click();
    cy.get('.form-jobLink > textarea').click();
    cy.get('.form-notes > textarea').click();
    cy.get('[type="submit"]').click();
    cy.get('.button > svg').click();
    cy.get('.navbar-links > :nth-child(6)').click();
    cy.get('.knowledge-category-buttons > :nth-child(1)').click();
    cy.get('.knowledge-category-buttons > :nth-child(2)').click();
    cy.get('.knowledge-category-buttons > :nth-child(3)').click();
    cy.get('.knowledge-category-buttons > :nth-child(4)').click();
    cy.get('.knowledge-category-buttons > :nth-child(5)').click();
    cy.get('.knowledge-category-buttons > :nth-child(6)').click();
    cy.get('input').type('python');
    cy.get('.input-container > .knowledge-buttons').click();
    cy.get('.navbar-links > :nth-child(7)').click();
    cy.get('.quiz-buttons-div > :nth-child(1)').click();
    cy.get('.quiz-buttons-div > :nth-child(2)').click();
    cy.get('.quiz-buttons-div > :nth-child(3)').click();
    cy.get('.quiz-buttons-div > :nth-child(4)').click();
    cy.get('.quiz-buttons-div > :nth-child(5)').click();
    cy.get('.quiz-buttons-div > :nth-child(6)').click();
    cy.get('.quiz-ul > :nth-child(4)').click();
    cy.get('.navbar-links > :nth-child(8)').click();
    /* ==== End Cypress Studio ==== */
  })
})
