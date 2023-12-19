export const calculateImposto = (imposto, precoVenda) => {
    const treatedPercentage = Number(imposto.replace(/\D/g, '')) / 100;
    return (Number(precoVenda) * treatedPercentage).toFixed(2);
};

export const calculateComissao = (tipoAnuncio, value) => {
    let comissao;
    if(tipoAnuncio === 'classico'){
        comissao = Number(value) * 0.13;
    } else{
        comissao = Number(value) * 0.18;
    }
    return comissao;
};

export const calculateFrete = (precoVenda, peso) => {
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

    if (Number(precoVenda) < maxPrice) {
        return fixed;
    } else {
        for (let key of Object.keys(tabelaFrete)) {
            if (Number(peso) * 1000 <= Number(key)) {
                return tabelaFrete[key];
            }
        }
    }
};

export const calculateLiquido = (venda, custo, imposto, comissao, frete) => {
    const liquido = venda - custo - imposto - comissao - frete;
    return liquido;
};

export const margemVenda = (venda, liquido) => {
    return  liquido / venda;
};

export const margemCusto = (custo, liquido) => {
    return liquido / custo;
};
