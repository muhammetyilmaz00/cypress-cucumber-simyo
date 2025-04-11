class Helper{

    waitAndClick(selector: string, text?: string, waitTime: number = 0) {

        // Wait for the specified time before interacting with the element
        cy.wait(waitTime);

        if (text) {
            // Use cy.contains() if text is provided
            cy.get(selector).contains(text)
                .should('be.visible')
                .should('not.be.disabled')
                .scrollIntoView()
                .click();
        } else {
            // Use cy.get() if no text is provided
            cy.get(selector)
                .should('be.visible')
                .scrollIntoView()
                .click();
        }
    }

    waitAndType(selector: string, text: string) {
        cy.get(selector)
        .should('be.visible')
        .clear()
        .type(text, { force: true });
    }

    getText(selector: string) {
        return cy.get(selector);
    }
}

export const helper = new Helper();