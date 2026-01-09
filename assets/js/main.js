function Calculadora(){
    this.display = document.querySelector('#display'),

    this.inicia = function(){
        this.cliqueBotoes();
    };

    this.btnDisplay = function(valor){
        this.display.value += valor;
    }; // o display e seu valor irá receber o valor e adicionar

    this.realizaCalculo = function(){
        let conta = this.display.value;

        try{
            conta = eval(conta)
            if(!conta){ // se for diferente de conta
                alert('Operação inválida');
                return
            }
            this.display.value = String(conta); // será formatado como texto. Propriedades .value de elementos HTML esperam uma string. Isso garante que apareça na interface do usuário.
        } catch (e){
            alert('Operação inválida')
        }
    };

    this.cliqueBotoes = function(){
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')){
                this.btnDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.display.value = '';
            }

            if(el.classList.contains('btn-del')){
                this.display.value = this.display.value.slice(0, -1); 
            }

            if(el.classList.contains('btn-eq')){
                this.realizaCalculo();
            }
        })
    };

};

const calc = new Calculadora();
calc.inicia();