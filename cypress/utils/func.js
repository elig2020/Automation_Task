/// <reference types="cypress" />

import element from "../page-objects/pages"

const func = {
    login: (email, password) => {
        element.login_btn.click()
        element.email.type(email);
        element.continue_btn.click()
        element.password.type(password);
        element.submit.click();
    },
}

export default func;