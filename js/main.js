var questoespadrao = [
    {
        pergunta: '<p>Na busca por resolver problemas e alcançar novos patamares de resultados sustentáveis, o conhecimento gerencial é fator decisivo de sobrevivência. É a estruturação do Sistema de Gestão visando alcançar resultados com o uso de métodos e ferramentas gerenciais que ajudarão na resolução de problemas complexos... A principal competência de um profissional hoje é a resolução de problemas. Você ainda está na tentativa e erro ou você já está diante do método?</p><p> <strong>Sobre conhecimento gerencial, pode- se dizer que:</strong></p><p><strong>I</strong> – O Sistema de Gestão permite melhorar o patamar de resultados, buscando a sobrevivência das Organizações, visando à concorrência e às necessidades do mercado.<br><strong>II</strong> – Uma correta aplicação das metodologias de Gestão permite mais que alcançar resultados, ter base para a manutenção desse patamar.<br><strong>III</strong> – Melhoria contínua é a prática adotada por diversas empresas que visa atingir resultados cada vez melhores, sejam eles nos produtos e serviços da empresa, ou então em seus processos internos.<br><strong>IV</strong> – O método é uma sequência lógica de ações, um caminho para se alcançar as metas.</p><p>Quais das afirmações acima estão <strong>corretas</strong>?</p>',
        selecao: false,
        validacao: false,
        opcoes: [
            {
                texto: 'I e II',
                correta: false,
            },
            {
                texto: 'III',
                correta: false,
            },
            {
                texto: 'I',
                correta: false,
            },
            {
                texto: 'I e IV',
                correta: true,
            },
        ],
        comentario: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. <a href="http://www.google.com" target="_blank">Clique para ver detalhes.</a>'
    },
    {
        pergunta: 'Quem pintou "Guernica"?',
        selecao: false,
        validacao: false,
        opcoes: [
            {
                texto: 'Paul Cézanne',
                correta: false,
            },
            {
                texto: 'Pablo Picasso',
                correta: true,
            },
            {
                texto: 'Diego Rivera',
                correta: false,
            },
            {
                texto: 'Tarsila do Amaral',
                correta: false,
            },
            {
                texto: 'Salvador Dalí',
                correta: false,
            },
        ],
        comentario: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. <a href="http://www.google.com" target="_blank">Clique para ver detalhes.</a>'
    },
    {
        pergunta: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
        selecao: false,
        validacao: false,
        opcoes: [
            {
                texto: '12 minutos',
                correta: false,
            },
            {
                texto: '1 dia',
                correta: false,
            },
            {
                texto: '12 horas',
                correta: false,
            },
            {
                texto: '8 minutos',
                correta: true,
            },
            {
                texto: '44 segundos',
                correta: false,
            },
        ],
        comentario: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. <a href="http://www.google.com" target="_blank">Clique para ver detalhes.</a>'
    },
    {
        pergunta: 'Quais os nomes dos três Reis Magos?',
        selecao: false,
        validacao: false,
        opcoes: [
            {
                texto: 'Gaspar, Nicolau e Natanael',
                correta: false,
            },
            {
                texto: 'Belchior, Gaspar e Baltazar',
                correta: true,
            },
            {
                texto: 'Belchior, Gaspar e Nataniel',
                correta: false,
            },
            {
                texto: 'Gabriel, Benjamim e Melchior',
                correta: false,
            },
            {
                texto: 'Melchior, Noé e Galileu',
                correta: false,
            },
        ],
        comentario: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    },
    {
        pergunta: 'Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?',
        selecao: false,
        validacao: false,
        opcoes: [
            {
                texto: 'Yuri Gagarin, em 1961',
                correta: false,
            },
            {
                texto: 'Buzz Aldrin, em 1969',
                correta: false,
            },
            {
                texto: 'Charles Conrad, em 1969',
                correta: false,
            },
            {
                texto: 'Charles Duke, em 1971',
                correta: false,
            },
            {
                texto: 'Neils Armstrong, em 1969',
                correta: true,
            },
        ],
        comentario: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. <a href="http://www.google.com" target="_blank">Clique para ver detalhes.</a>'
    },
]

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