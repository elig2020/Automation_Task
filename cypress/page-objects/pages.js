/// <reference types="cypress" />

class element {

    // visit URL
    open(path){
        cy.visit(path)
    }

    // general locaters
    wait(time){
        cy.wait(time)
    }

    // page elements for Task_1
    get change_address_alert(){
        return cy.get('.a-button-base')
    }     
    get hamburger_menu(){
        return cy.get('#nav-hamburger-menu')
    }
    get customer_service(){
        return cy.get('.hmenu-visible > :nth-child(26) > .hmenu-item') 
    }
    get where_my_stuff(){
        return cy.get(':nth-child(2) > label')
    }
    get track_your_package(){
        return cy.get('.active > :nth-child(1) > .fs-match-card')
    }
    get verified_page_title(){
        return cy.get('.cs-help-title')
    }
    get verified_title_section_1(){
        return cy.get('#GUID-AEBE3FF9-5AAF-4CD6-AF09-0287157B72C3__GUID-1522E8A9-5031-467D-A776-7B00C9E48E73')
    }
    get verified_title_section_2(){
        return cy.get('#GUID-E0BEC163-DB4F-4E89-B733-E12E13B22F19__GUID-4D428B3E-B288-428E-B06A-7A01C022314D')
    }
    get carrier_contact_info(){
        return cy.get('#GUID-AEBE3FF9-5AAF-4CD6-AF09-0287157B72C3__GUID-704627F8-B335-40D2-A7F9-D1DD25CBA563 > .same_window')
    }
    
    // page elements for Task_2
    get login_btn(){
        return cy.get('#nav-link-accountList')
    }
    get logout_btn(){
        return cy.get('#nav-item-signout')
    }
    get continue_btn(){
        return cy.get('.a-button-inner > #continue')
    }      
    get email(){
        return cy.get('#ap_email')
    }
    get password(){
        return cy.get('#ap_password')
    }
    get submit(){
        return cy.get('#signInSubmit')
    }   
    get search(){
        return cy.get('#twotabsearchtextbox')
    } 
    get search_btn(){
        return cy.get('#nav-search-submit-button')
    }
    get product_img(){
        return cy.get('[data-asin="B00125KXGI"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image')
    }
    get colors_btn(){
        return cy.get('#a-autoid-14-announce > :nth-child(2) > :nth-child(1) > .imgSwatch')
    }
    get colors_txt(){
        return cy.get('#variation_color_name > .a-row > .selection')
    }
    get add_to_cart(){
        return cy.get('#add-to-cart-button')
    }
    get confirm_added(){
        return cy.get('.a-size-medium-plus')
    }
    get checkout_btn(){
        return cy.get('#desktop-ptc-button-celWidget')
    }
    get num_of_products_checkout(){
        return cy.get('.a-color-link clickable-heading')
    }
    get add_product_btn(){
        return cy.get('.a-button-text a-declarative')
    }
    get combobox(){
        return cy.get('#a-popover-4')
    }
    get cart(){
        return cy.get('#nav-cart')
    }
    get delete_product_from_cart(){
        return cy.get('.a-size-small sc-action-delete')
    }
    get num_of_products_cart(){
        return cy.get('#sc-subtotal-label-activecart')
    }
}

export default new element();