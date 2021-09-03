describe('Tugas Akhir 1 - Basic Cypress', function(){
    it('TC01- Tambah Data Fasilitator', function(){
    cy.visit('https://admin.pkh.dojobox.id/')
    cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
    cy.get('#input-password').type('admin').should('have.value','admin')
    cy.get('#btn-login').click()
    cy.get('.d-flex > .btn').click()
    cy.get('#user_fullname').type('Ahmad Saiful Test').should('have.value','Ahmad Saiful Test')
    cy.get('#user_email').type('asaiful@email.com').should('have.value','asaiful@email.com')
    cy.get('.box-icon > .fa').click()
    cy.get('input[type="file"]').attachFile('mdpl.jpg')
    cy.get('#user_is_active').select('Aktif')
    cy.get('#user_password').type('asaiful123').should('have.value','asaiful123')
    cy.get('#user_province_id').select('KEPULAUAN RIAU')
    cy.get('#user_city_id').select('KAB. KARIMUN')
    cy.get('#user_subdistrict_id').select('Meral Barat')
    cy.get('#user_address').type('Kp. Suka Jadi No. 16').should('have.value','Kp. Suka Jadi No. 16')
    cy.get('#add').click()
    })
})