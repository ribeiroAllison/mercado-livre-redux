import {
    calculateImposto,
    calculateFrete,
    calculateLiquido,
    margemVenda,
    margemCusto,
    calculateComissao
} from '../components/FeatureComponents/ResultsTable/utils';


//Calculate Imposto Test
it("Receives a String and returns the adjusted number of percentage, fixed in 2 decimals", () =>{
    //arrange
    const percenge = '20%';
    const preco = 100
    const expectedvalue = "20.00";

    //act
    const actualValue = calculateImposto(percenge, preco);

    //assert
    expect(actualValue).toBe(expectedvalue);
    expect(actualValue).toBeDefined();
    expect(typeof actualValue === 'string').toBeTruthy()
});

//Calculate Freight Test

it("Calculates freight to 6 when price is bellow 79", () => {
    //arrange
    const price = 70;
    const weight = 100;
    const expectedValue = 6;

    //act
    const actualValue = calculateFrete(price, weight);

    //assert
    expect(actualValue).toBe(expectedValue);
    expect(actualValue).toBeDefined();
    expect(typeof actualValue === 'number').toBeTruthy();
})

it("Calculates freight according to freight object when price is above or equal to 79", () =>{
    //arrange
    const price1 = 79;
    const weight1 = 2;
    const expectedValue1 = 22.45;

    const price2 = 99;
    const weight2 = 13;
    const expectedValue2 = 63.95;

    const price3 = 500;
    const weight3 = 200;
    const expectedValue3 = 242.45;

    //act
    const actualValue1 = calculateFrete(price1, weight1);
    const actualValue2 = calculateFrete(price2, weight2);
    const actualValue3 = calculateFrete(price3, weight3);

    //assert
    expect(actualValue1).toEqual(expectedValue1);
    expect(actualValue2).toEqual(expectedValue2);
    expect(actualValue3).toEqual(expectedValue3);

    expect(actualValue1).toBeDefined();
    expect(actualValue2).toBeDefined();
    expect(actualValue3).toBeDefined();

    expect(typeof actualValue1 === 'number').toBeTruthy();
    expect(typeof actualValue2 === 'number').toBeTruthy();
    expect(typeof actualValue3 === 'number').toBeTruthy();


});

it("Calculates net income based on paramenters", () =>{
    //arrange
    const price = 100;
    const cost = 30;
    const tax = 10;
    const commission = 13;
    const freight = 21;
    const expectedValue = 26;

    //act
    const actualValue = calculateLiquido(price, cost, tax, commission, freight);

    //assert
    expect(actualValue).toEqual(expectedValue);
    expect(typeof actualValue === 'number').toBeTruthy();
})

it("Calculates profit margin based on sales price", () => {
    //arrange
    const netProfit1 = 50;
    const salePrice1 = 100;
    const expectedValue1 = 0.5;

    const netProfit2 = 25;
    const salePrice2 = 100;
    const expectedValue2 = 0.25;

    //act
    const actualValue1 = margemVenda(salePrice1, netProfit1);
    const actualValue2 = margemVenda(salePrice2, netProfit2);

    //assert
    expect(actualValue1).toEqual(expectedValue1);
    expect(actualValue2).toEqual(expectedValue2);


});

it("Calculates profit margin based on cost", () => {
    //arrange
    const netProfit1 = 50;
    const cost1 = 100;
    const expectedValue1 = 0.5;

    const netProfit2 = 25;
    const cost2 = 100;
    const expectedValue2 = 0.25;

    //act
    const actualValue1 = margemCusto(cost1, netProfit1);
    const actualValue2 = margemCusto(cost2, netProfit2);

    //assert
    expect(actualValue1).toEqual(expectedValue1);
    expect(actualValue2).toEqual(expectedValue2);
});

it("Calculates commission based on add type", () => {
    //arrange
    const addType1 = 'classico';
    const salesPrice1 = 100;
    const expectedValue1 = 13;

    const addType2 = 'premium';
    const salesPrice2 = 100;
    const expectedValue2 = 18;

    //act
    const actualValue1 = calculateComissao(addType1, salesPrice1);
    const actualValue2 = calculateComissao(addType2, salesPrice2);

    //assert
    expect(actualValue1).toEqual(expectedValue1);
    expect(actualValue2).toEqual(expectedValue2);
    expect(actualValue1 === actualValue2).toBeFalsy();

})