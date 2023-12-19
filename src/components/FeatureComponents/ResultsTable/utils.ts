import { SingleTypeFunction, TwoTypesFunction, MultipleArgsFunction } from "./templates";
/**
 * It receives a tax rate and a price, remove all non numeric values and returns its multiplication with two decimals
 * @param taxRate The tax value in the following format: 10%
 * @param priceValue The price value
 * @returns tax rate divided by 100 times price value
 */
export const calculateImposto: SingleTypeFunction<string>  = (taxRate, priceValue) => {
    const treatedPercentage = Number(taxRate.replace(/\D/g, '')) / 100;
    return (Number(priceValue) * treatedPercentage).toFixed(2);
};

/**
 * Calculates the commision percentage based on ad type
 * @param adType Ad type, can be 'classico' or 'premium'
 * @param salesPrice The sales price
 * @returns The comission depending on which type of ad it is.
 */
export const calculateComissao: TwoTypesFunction<string, number> = (adType, salesPrice) => {
    let comission:number;
    if(adType === 'classico'){
        comission = Number(salesPrice) * 0.13;
    } else{
        comission = Number(salesPrice) * 0.18;
    }
    return comission;
};


/**
 * Calculates freight based on either the sales price is higher than 79 BRL or not.
 * @param salesPrice The price that the item was sold for
 * @param weight Product's weight
 * @returns Either a fixed value (if price is bellow 79) or a freight based on weight according to freightTable variable
 */
export const calculateFrete: TwoTypesFunction<string, number> = (salesPrice, weight) => {
    const maxPrice = 79;
    const fixed = 6;
    const tabelaFrete = {
        300: 18.95,
        500: 19.45,
        1000: 21.45,
        2000: 22.45,
        3000: 22.95,
        4000: 23.45,
        5000: 23.95,
        9000: 40.95,
        13000: 63.95,
        17000: 71.45,
        23000: 83.45,
        30000: 95.95,
        40000: 106.45,
        50000: 113.45,
        60000: 121.45,
        70000: 137.45,
        80000: 152.45,
        90000: 169.95,
        100000: 193.95,
        125000: 216.95,
        150000: 230.45,
        Infinity: 242.45,
    };

    if (Number(salesPrice) < maxPrice) {
        return fixed;
    } else {
        for (let key of Object.keys(tabelaFrete)) {
            if (Number(weight) * 1000 <= Number(key)) {
                return tabelaFrete[key];
            }
        }
    }

    return 0;
};

/**
 * Calculates the profit margin based on previous returned values
 * @param salesPrice Price for which the product was sold 
 * @param cost Product's cost 
 * @param taxes Total taxes 
 * @param comission Total comission 
 * @param freight Freight cost 
 * @returns Sales price minus all other variables
 */
export const calculateLiquido: MultipleArgsFunction<number> = (...args: number[]) => {
    const [salesPrice, cost, taxes, comission, freight] = args
    
    const liquido = salesPrice - cost - taxes - comission - freight;
    return liquido;
};

/**
 * Calculate profit percentage based on sales price
 * @param salesPrice Product's sale price
 * @param netProfit  Net profit after all costs are discounted
 * @returns The profit in percetage of the sale price
 */
export const margemVenda: SingleTypeFunction<number> = (salesPrice, netProfit) => {
    return  netProfit / salesPrice;
};

/**
 * Calculate profit percentage based on sales price
 * @param cost Product's cost
 * @param netProfit  Net profit after all costs are discounted
 * @returns The profit in percetage of cost
 */
export const margemCusto: SingleTypeFunction<number> = (cost, netProfit) => {
    return netProfit / cost;
};
