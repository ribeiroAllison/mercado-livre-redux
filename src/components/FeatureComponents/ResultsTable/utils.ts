import { SingleTypeFunction, TwoTypeFunction } from "./types";

export const calculateImposto: SingleTypeFunction<string> = (imposto, precoVenda) => {
    const treatedPercentage = Number(imposto.replace(/\D/g, '')) / 100;
    return (Number(precoVenda) * treatedPercentage).toFixed(2);
};

export const calculateComissao: TwoTypeFunction<string, number> = (tipoAnuncio, value) => {
    let comissao;
    if(tipoAnuncio === 'classico'){
        comissao = Number(value) * 0.13;
    } else{
        comissao = Number(value) * 0.18;
    }
    return comissao;
};

export const calculateFrete: TwoTypeFunction<string, number> = (precoVenda, peso) => {
    interface FreightData {
        minWeight: number;
        price: number;
    }

    const tabelaFrete: FreightData[] = [
        { minWeight: 300, price: 18.95 },
        { minWeight: 500, price: 19.45 },
        { minWeight: 1000, price: 21.45 },
        { minWeight: 2000, price: 22.45 },
        { minWeight: 3000, price: 22.95 },
        { minWeight: 4000, price: 23.45 },
        { minWeight: 5000, price: 23.95 },
        { minWeight: 9000, price: 40.95 },
        { minWeight: 13000, price: 63.95 },
        { minWeight: 17000, price: 71.45 },
        { minWeight: 23000, price: 83.45 },
        { minWeight: 30000, price: 95.95 },
        { minWeight: 40000, price: 106.45 },
        { minWeight: 50000, price: 113.45 },
        { minWeight: 60000, price: 121.45 },
        { minWeight: 70000, price: 137.45 },
        { minWeight: 80000, price: 152.45 },
        { minWeight: 90000, price: 169.95 },
        { minWeight: 100000, price: 193.95 },
        { minWeight: 125000, price: 216.95 },
        { minWeight: 150000, price: 230.45 },
        { minWeight: Number.POSITIVE_INFINITY, price: 242.45 },
    ];

    const maxPrice = 79;
    const fixed = 6;

    if (Number(precoVenda) >= maxPrice) {
        const weight = Number(peso) * 1000;
        const applicablePrice = tabelaFrete.find(entry => entry.minWeight >= weight);

        if(applicablePrice){
            return applicablePrice.price;
        }

            
    }

    return fixed;
};


export const calculateLiquido = (venda: number, custo: number, imposto: number, comissao: number, frete: number): number => {
    const liquido = venda - custo - imposto - comissao - frete;
    return liquido;
};

export const margemVenda: SingleTypeFunction<number> = (venda, liquido) => {
    return  liquido / venda;
};

export const margemCusto: SingleTypeFunction<number> = (custo, liquido) => {
    return liquido / custo;
};
