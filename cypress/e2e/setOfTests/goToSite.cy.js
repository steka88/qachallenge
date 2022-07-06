/// <reference types="cypress" />

describe('Go to the site Shop4You', () => {

    //Redirect to website
    it('Visiting the website', function(){
        cy.visit('https://www.myshop4.com/');
        cy.get('.uk-flex > .uk-button').click();
    })
      
    //Signing up
    it('Login user', function(){
        cy.get('#signIn-email').type('qa@arzion.com');
        cy.get('#signIn-password').type('QAT34mp4ssw0rd123!');
        cy.get('#signIn-primary-button').click();
    })

    //Showing form Category
    it('Clicking in Categories option', function(){
        cy.wait(3000);
        cy.get('.sidebar > .sidebar-links-wrapper > #lista-1 > :nth-child(5) > .sidebar-links-item > #sidebar-categories').click();
        cy.get('#button-add-category').click();
    })

    //Exercise 4: Creating new category
    it('Adding new Category', function(){
        cy.get('#category-name').type('QA Automation');
        cy.get('#category-add').click();
    })
  
    // Exercise 5: Adding two new product with QA Automation category
    it('Adding new Product with Unit', function(){
        cy.get('.sidebar > .sidebar-links-wrapper > #lista-1 > :nth-child(3) > .sidebar-links-item').click();
        cy.get('#add-button').click();
        
        cy.get('#addProduct-name').type('Product Unit automatic');
        cy.get('#addProduct-description').type('This description is a space to express how interesting automation is');

        cy.get('#addProduct-category-id').select('QA Automation');
        cy.get('#addProduct-price').type('1');
        cy.get('#addProduct-stock').type('1');

        cy.get(':nth-child(8) > :nth-child(2) > .form-field-input > #addProduct-false-label > .checkbox > #addProduct-false')
        cy.get('#addProduct-primary-button').click();
    })

    it('Adding new Product with Discount', function(){
        cy.get('#add-button').click();
        
        cy.get('#addProduct-name').type('Product Discount automatic');
        cy.get('#addProduct-description').type('This description is for a product with discount');

        cy.get('#addProduct-category-id').select('QA Automation');
        cy.get('#addProduct-price').type('3');

        cy.get('#addProduct-has-discount-label > .checkbox > span')
        cy.get('#addProduct-has-discount').check({force: true});

        cy.get('#addProduct-discounted-price').type('2.25')
        cy.get('#addProduct-stock').type('1');

        cy.get(':nth-child(8) > :nth-child(2) > .form-field-input > #addProduct-false-label > .checkbox > #addProduct-false')
        cy.get('#addProduct-primary-button').click();
    })

    // Exercise 5E: Filtering products by QA Automation category
    it('Filtering products by category created', function(){
        cy.get('#table-products-search').click();
        cy.get('#table-products-filter-category-id-check-label > .checkbox > #table-products-filter-category-id-check').check({force: true});
        cy.get('#table-products-filter-category-id').select('QA Automation');
        cy.get('#table-products-filter-primary-button').click();
        cy.get('#table-products-search').click();
     })

     // And counting the products in table
    it('Counting products of QA Automation', function(){
        cy.get("#table-products > tbody> tr").each(function(row, i, list){}).then(function(list) {
            console.log('Number of products are ' + list.length);
        });         
    })

})