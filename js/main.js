var vue_header = new Vue({
    el: '#vue-quiz',
    data: {
        status: 'inicio',
        questoes: questoes,
        cidade: '',
        atual: 0,
    },
    methods: {
        avisoValida: function(questao) {
            if (!questao.selecao) {
                return 'Selecione uma opção para continuar...'
            }
        },
        trocaSelecao: function (questao, opcao) {
            var vthis = this;
            if (!questao.validacao) {
                questao.selecao = opcao;
            }
        },
        proximaQuestao: function(){
            if (this.questoes.length == this.atual + 1) {
                alert('no more questions!');
            } else {
                this.atual = this.atual + 1;
            }
        }
    },
    computed: {
        acertos: function(){
            return _.reduce(this.questoes, function (n, questao) {
                if (questao.validacao && (questao.selecao.correta == true)) {
                    return 1 + n;
                } else {
                    return n;
                }                
            }, 0);
        }
    },
    created: function () {

    }
});