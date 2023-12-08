import {
    calculateImposto,
    calculateFrete,
    calculateLiquido,
    margemVenda,
    margemCusto
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