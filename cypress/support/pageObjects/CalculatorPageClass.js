import { BasePage } from './BasePageClass';

export class CalculatorPageClass extends BasePage {

    elements = { 
        numberInput : () => cy.get('#number'),      
        calculateBtn: () => cy.get('#getFactorial'),    
        resultValue : () => cy.get('#resultDiv'),
    }

    calculateFactorial(number)
    {
        this.elements.numberInput().type(number);
        this.elements.calculateBtn().click();
    }

    factorialCalculationFunction(num) {
        if (num === 0 || num === 1)
            return 1;
        for (var i = num - 1; i >= 1; i--) {
            num *= i;
        }
        return num;
    }


}

export const calculatorPageClass = new CalculatorPageClass();
