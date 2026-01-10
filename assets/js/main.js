function Calculadora(){
    this.display = document.querySelector('#display'),

    this.inicia = () => {
        this.cliqueBotoes();
        this.botaoEnter();
    };

    this.btnDisplay = (valor) => {
        this.display.value += valor;
        this.tamanhoFonteDisplay();
        this.display.focus();
    }; // o display e seu valor irá receber o valor e adicionar

    this.realizaCalculo = () => {
        let conta = this.display.value;

        try{
            conta = eval(conta)// perigoso em aplicações reais.
            if(conta === undefined || conta === null || Number.isNaN(conta)){
                alert('Operação inválida');
                return;
            }
            this.display.value = String(conta); // será formatado como texto. Propriedades .value de elementos HTML esperam uma string. Isso garante que apareça na interface do usuário.
        } catch (e){
            alert('Operação inválida')
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => { // Arrow function não cria seu próprio this, então aqui os this serão direcionados para a Calculadora
            const el = e.target;
            if(el.classList.contains('btn-num')) this.btnDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.display.value = '';
            if(el.classList.contains('btn-del')) this.display.value = this.display.value.slice(0, -1); 
            if(el.classList.contains('btn-eq')) this.realizaCalculo(); 
        })
    };

    this.botaoEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.key === 'Enter'){
                this.realizaCalculo();
            };
        })
    };

    this.tamanhoFonteDisplay = () => {
        if (this.display.value.length <= 8){
            this.display.style.fontSize = '5rem';
        } else if (this.display.value.length <= 16){
            this.display.style.fontSize = '3rem';
        } else {
            this.display.style.fontSize = '2rem';
        };
    };

};

const calc = new Calculadora();
calc.inicia();