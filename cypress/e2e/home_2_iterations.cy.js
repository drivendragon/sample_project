

describe('Fixture Data Iteration', () => {
  it('iterates through sample_2_iterations_of_data.json data', () => {
    cy.fixture('sample_2_iterations_of_data').then((testData) => {
      testData.forEach((testData) => {
        // Accessing properties for each user:
        const { test_name, username, password, verify } = testData;

        // Logging (optional, for demonstration):
        cy.log(`Test Name: ${test_name}`);

        // Using the data in assertions:
        expect(test_name).to.contain('');
        expect(username).to.contain('@example.com');
        expect(password).to.not.be.empty;
        expect(verify).to.not.equal('wall___1');
      });
    });
  });

  it('accessing a specific user', () => {
      cy.fixture('sample_2_iterations_of_data').then((testData) => {
          const second_username = testData[1];
          expect(second_username.username).to.equal('jane.smith@example.com');
      })
  })
});




