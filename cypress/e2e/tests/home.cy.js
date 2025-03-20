//Dev: Jaime Lizarazu


describe('Home Page Loads Fully verification', () => {
    beforeEach(() => {
        cy.visit("www.DrivenDragonsVBA.com");
   })

    it('verify home page - menu items', function() { 
        cy.contains('Club Season');
        cy.contains('2026 Club Tryouts/Open Gyms');
        cy.contains('Summer Programs');
        cy.contains('More');
        })  

        it('verify club season - Meet the Coaches', function() { 
             cy.contains('Summer Programs').invoke('show');
             cy.contains('Summer Camps').click({force: true});            
             }) 
        
        it('should verify a 200 response for the browserLogos API', () => {
            cy.request('https://www.drivendragonsvba.com/__/assets/browserLogos-Cc2JWWea.js').then((response) => {
                expect(response.status).to.eq(200);
                // Optional: You can add more assertions to verify the response body, headers, etc.
                // Example to check for a non-empty response body (since it's a JS file):
                expect(response.body).to.not.be.empty;
            
                //Example to check the content type. This will be application/javascript or text/javascript.
                expect(response.headers['content-type']).to.include('javascript');
})
}) 
}) 
