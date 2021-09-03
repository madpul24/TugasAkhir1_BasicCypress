describe('Tugas Akhir 1 - Basic Cypress', function(){
    it('TC01 - Login Fasilitator dengan data yang benar', function(){
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.get('#input-password').type('admin').should('have.value','admin')
        cy.get('#btn-login').click()
    }),
    it('TC02 - Login Fasilitator dengan data yang tidak terdaftar', function(){
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('ee@dojobox.id').should('have.value','ee@dojobox.id')
        cy.get('#input-password').type('adminn').should('have.value','adminn')
        cy.get('#btn-login').click()
    }),
    it('TC03 - Login dengan inputan yang kosong', function(){
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#btn-login').click()
        cy.get('.modal-footer > .btn').click()
    })
})