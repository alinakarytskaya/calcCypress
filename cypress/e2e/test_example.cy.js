import {calculatorPageClass} from '../support/pageObjects/CalculatorPageClass';


describe('Factorial calculator tests', () => {
    beforeEach(() => {
        calculatorPageClass.openPage()
    });

    var error_message = 'Please enter an integer';


    // added 10 tests that i consider high priority there
    //also there could be potentially added
    // test with 01 factorial, big number as 111111111

    
    it(`Factorial of 0 - valid`, (input = 0) => {
        calculatorPageClass.calculateFactorial(input);
        var answer = calculatorPageClass.factorialCalculationFunction(input);
        cy.contains(`The factorial of ${input} is: ${answer}`);
    });

    it(`Factorial of 1 - valid`, (input = 1) => {
        calculatorPageClass.calculateFactorial(input);
        var answer = calculatorPageClass.factorialCalculationFunction(input);
        cy.contains(`The factorial of ${input} is: ${answer}`);
    });

    it(`Factorial of 2 with whitespace - valid`, (input = 2 ) => {
        calculatorPageClass.calculateFactorial(input);
        var answer = calculatorPageClass.factorialCalculationFunction(input);
        cy.contains(`The factorial of ${input} is: ${answer}`);
    });

    it(`Factorial of +10 - valid`, (input = +10) => {
        calculatorPageClass.calculateFactorial(input);
        var answer = calculatorPageClass.factorialCalculationFunction(input);
        cy.contains(`The factorial of ${input} is: ${answer}`);
    });

    it(`Factorial of 100 - valid`, (input = 10) => {
        calculatorPageClass.calculateFactorial(input);
        var answer = calculatorPageClass.factorialCalculationFunction(input);
        cy.contains(`The factorial of ${input} is: ${answer}`);
    });

    it(`Factorial of 1.5 - invalid`, (input = 1.5) => {
        calculatorPageClass.calculateFactorial(input);
        cy.contains(error_message);
    });


    it(`Factorial of 1A - invalid`, (input = '1A') => {
        calculatorPageClass.calculateFactorial(input);
        cy.contains(error_message);
    });


  it(`Factorial of -1 - invalid`, (input = -1) => {
        calculatorPageClass.calculateFactorial(input);
        cy.contains(error_message);
    });


    it(`Terms & Conditions page navigation`, () => {
      cy.contains('Terms and Conditions').click();
      cy.url().should('include', '/terms') 
    });


    it(`Terms & Conditions page navigation`, () => {
        cy.contains('Privacy').click();
        cy.url().should('include', '/privacy') 
      });

});

