/// <reference types="cypress" />

import element from "../../page-objects/pages"
import func from "../../utils/func"

describe('Suitcase - add and remove items to cart', () => {

    beforeEach(() => {
        cy.fixture('data.json').as('data')         
    })

    // after(() => {
    //     element.login_btn.scrollIntoView().trigger('mouseover');
    //     cy.wait(2000)
    //     element.logout_btn.click()
    // })

    it(`Add first product to the cart`, function(){
        const urls = this.data.url_data
        const products = this.data.product_data 

        element.open(urls.amazon)
        element.search.type(products.product)
        element.search_btn.click()
        element.product_img.click()
        element.add_to_cart.click()
        element.confirm_added.should('contain.text', 'Added to Cart')
    })
        
    it(`Add new product to the cart`, function(){
        // cy.viewport(1366, 768) // desktop resolution example
        const urls = this.data.url_data 
        const login = this.data.login_data

        element.open(urls.product_path)
        func.login(login.email, login.password)

        element.colors_btn.click()
        element.colors_txt.should('have.text', 'Yellow, Grey, Blue')
        element.add_to_cart.scrollIntoView().click({force: true})
    })
    
    it('Confirm that product is added', function(){
        element.confirm_added.should('contain.text', 'Added to Cart')
        element.checkout_btn.click()
        element.num_of_products_checkout.should('contain.text', '2 item')
        cy.go(-1);
    })

    it('Add to cart 3 more Scissors, and make a checkout', function(){
        element.add_product_btn.click()
        element.combobox.select('3').click()
        element.checkout_btn.click()
    })

    it('Confirm all products was added to cart', function(){
        element.num_of_products_checkout.should('contain.text', '4 items')
        cy.go(-1);
    })

    it('Clear the cart of products', function(){
        element.delete_product_from_cart.click()
        element.num_of_products_cart.should('contain.text', '0 items')
    })
})
