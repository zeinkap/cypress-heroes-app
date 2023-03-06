describe('Landing page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User must be logged in to like a hero', () => {
    // click on first hero profile's like button
    cy.get('[icon="like"]').eq(0).click()
    // assert popup text
    cy.get('.p-8').contains("You must log in to like.")
    // click on Ok button in modal popup
    cy.get('.gap-2 > app-button').click()
  })

  it('User must be logged in to hire a hero', () => {
    // click on first hero profile's hire button
    cy.get('[icon="money"]').eq(0).click()
    // assert popup text
    cy.get('.p-8').contains("You must log in to hire this hero.")
    // click on Ok button in modal popup
    cy.get('.gap-2 > app-button').click()
  })

  it.only('Normal user can successfully log in', () => {
    cy.intercept('POST', '/auth').as('auth')
    const userEmail = "test@test.com"
    const userPassword = "test123"

    cy.get('li > app-button').click()
    cy.get('[label="Email"]').type(userEmail)
    cy.get('[label="Password"]').type(userPassword)
    cy.contains('Sign in').click()

    cy.wait('@auth').then(interception => {
      console.log(interception);
      cy.wrap(interception.response.statusCode)
        .should('eq', 201);
      cy.wrap(interception.request.body.username)
        .should('eq', userEmail)
      cy.wrap(interception.request.body.password)
        .should('eq', userPassword)

      // verify response body
      cy.wrap(interception.response.body.access_token)
        .should('exist')
      cy.wrap(interception.response.body.user.id)
        .should('eq', 1)
      cy.wrap(interception.response.body.user.isAdmin)
        .should('eq', false)
    })

  })

  it.skip('Admin user can successfully log in', () => {
  })

  it.skip('Logged in user can like a hero', () => {
  })

  it.skip('Logged in user can hire a hero', () => {
  })
})