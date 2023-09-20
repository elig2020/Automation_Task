/// <reference types="cypress" />
import element from "../../page-objects/pages"

describe('Sanity', () => {
            
    before(() => {
        cy.fixture('data.json').as('data')
    })
            
    it(`Task 1 - verified texts and elements in pages`, function(){
        const urls = this.data.url_data

        element.open(urls.amazon);
        cy.refresh_page(element.hamburger_menu)
        element.hamburger_menu.click()
        element.wait(1000)
        element.customer_service.scrollIntoView().should('be.visible').click()
        element.where_my_stuff.scrollIntoView().should('be.visible').click()
        element.track_your_package.click()
        cy.new_tab(urls.url_1)
        element.verified_page_title.should('contain.text', 'Help & Customer Service')
        element.verified_title_section_1.should('contain.text', 'Track Your Package')
        element.carrier_contact_info.scrollIntoView().should('be.visible').click()
        cy.new_tab(urls.url_2)
        element.verified_title_section_2.should('contain.text', 'Carrier Contact Information')
    })
})
