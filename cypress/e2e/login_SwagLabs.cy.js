
// Load the fixture data synchronously at the top level
const users = require('../fixtures/swag_data.json');

describe('Swag Labs Login Test with Fixture Data', () => {
  users.forEach((user) => {
    const { testURL, username, password, verify, scenario } = user;

    describe(`Testing with user: ${username}, scenario: ${scenario}`, () => {
      beforeEach(() => {
        cy.visit(testURL);
      });

      it('should successfully log in with valid credentials if provided', function () {
        if (scenario !== 'valid_login') this.skip();
        cy.login(username, password);
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', verify);
      });

      it('should display an error message with invalid credentials', function () {
        if (scenario !== 'invalid_credentials') this.skip();
        cy.login(username, password);
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('contain', verify);
      });

      it('should display an error message with locked out user', function () {
        if (scenario !== 'locked_out_user') this.skip();
        cy.login(username, password);
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('contain', verify);
      });

      it('should require username if password is provided', function () {
        if (scenario !== 'missing_username') this.skip();
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('contain', verify);
      });

      it('should require password if username is provided', function () {
        if (scenario !== 'missing_password') this.skip();
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('contain', verify);
      });
    });
  });
});
