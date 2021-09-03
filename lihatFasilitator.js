describe('Tugas Akhir 1 - Basic Cypress', function(){
    it('TC01 - Lihat Data Fasilitator', function(){
    cy.visit('https://admin.pkh.dojobox.id/')
    cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
    cy.get('#input-password').type('admin').should('have.value','admin')
    cy.get('#btn-login').click()
    cy.get('#dataTable_filter > label > .form-control').type('Ahmad Saiful Test')
    // cy.get('.btn-group > .btn > .fas').click()
    // cy.get('[href="facilitator/detail/323"]').contains('Lihat').click()
    
    })
})