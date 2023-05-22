export default class Estatisticas {
    transacoes;
    total;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        console.log(this.transacoes);
    }
}
//# sourceMappingURL=Estatisticas.js.map