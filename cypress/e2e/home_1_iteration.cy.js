
describe('Fixture Data Access', () => {
  it('accesses data from sample.json', () => {
      cy.fixture('sample_1_iteration_of_data').as('testData'); // Create an alias

      cy.get('@testData').then(({ test_name, username, password, verify }) => { //Destructure the fixture data.
          // Using the data in assertions:
          expect(test_name).to.contain('testOne');
          expect(username).to.equal('john.doe@example.com');
          expect(password).to.equal('samsamsam');
          expect(verify).to.not.equal('wall___1');
      });
  });
});




