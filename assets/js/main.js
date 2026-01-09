function Calculadora(){
    this.display = document.querySelector('#display'),

    this.inicia = function(){
        this.cliqueBotoes();
    };

    this.btnDisplay = function(valor){
        this.display.value += valor;
    };

    this.cliqueBotoes = function(){
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')){
                this.btnDisplay(el.innerText);
                console.log('estou sendo clicado');
            }

            if(el.classList.contains('btn-clear')){
                this.display.value = '';
            }

            if(el.classList.contains('btn-del')){
                this.display.value = this.display.value.slice(0, -1);
            }

        })
    };

};

const calc = new Calculadora();
calc.inicia();