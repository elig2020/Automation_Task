// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('new_tab', tab_url => {
    cy.window().then((win) => {
        win.location.href = tab_url
    })
})

Cypress.Commands.add('refresh_page', page_elememt => {
    cy.get(page_elememt).should('not.be.visible').then(($element) => {
        if (!$element.is(':visible')) {
          cy.reload();
        }
    })
})
