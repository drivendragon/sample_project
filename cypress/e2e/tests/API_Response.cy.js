describe('API Response Verification', () => {
    it('should verify a 200 response for the browserLogos API', () => {
      cy.request('https://www.drivendragonsvba.com/__/assets/browserLogos-Cc2JWWea.js').then((response) => {
        expect(response.status).to.eq(200);
        // Optional: You can add more assertions to verify the response body, headers, etc.
        // Example to check for a non-empty response body (since it's a JS file):
        expect(response.body).to.not.be.empty;
  
        //Example to check the content type. This will be application/javascript or text/javascript.
        expect(response.headers['content-type']).to.include('javascript');
  
      });
    });
  });