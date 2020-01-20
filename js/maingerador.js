var dataHtml =
'<!DOCTYPE html>\n'+
'<html>\n'+
'<head>\n'+
'	<title>{{{titulohead}}}</title>\n'+
'	<meta http-equiv="cache-control" content="max-age=0" />\n'+
'	<meta http-equiv="cache-control" content="no-cache" />\n'+
'	<meta http-equiv="expires" content="0" />\n'+
'	<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />\n'+
'	<meta http-equiv="pragma" content="no-cache" />\n'+
'	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">\n'+
'	<meta content="utf-8" http-equiv="encoding">\n'+
'	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n'+
'	<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'+
'	<link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700,900&display=swap" rel="stylesheet">\n'+
'	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">\n'+
'	<link rel="stylesheet" href="https://gitcdn.xyz/repo/enrique42/quiz-frst/master/css/style.css">\n'+
'	<meta name="userteste" content="{UserId} - {UserName}">\n'+
'</head>\n'+
'<body>\n'+
'<div id="vue-quiz">\n'+
'<div class=\'section quiz-bloco\'>\n'+
'	<div class="container" v-if="status == \'inicio\'">\n'+
'		<div class="quiz-bloco__comecar">\n'+
'			<h1>{{{titulo}}}</h1>\n'+
'			{{{abertura}}}\n'+
'			<div href="" class="botao" v-on:click="status = \'quiz\'">Começar quiz</div>\n'+
'		</div>\n'+
'	</div>\n'+
'	<div class=\'container\' v-if="status == \'quiz\'">\n'+
'		<h3 class="quiz-bloco__numeracao">pergunta {{atual + 1}} de {{questoes.length}}</h3>\n'+
'		<div class="quiz-bloco__box" v-for="(q, chave) in questoes" v-if="chave == atual">\n'+
'			<div class="caixa" >\n'+
'				<div class="quiz-bloco__questao">\n'+
'					<div class="pergunta" v-html="q.pergunta">\n'+
'					</div>\n'+
'					<div class="opcoes">\n'+
'						<div class="opcao" :class="{ \'fechado\' : q.validacao }" href="" v-for="(op,k) in q.opcoes" v-on:click="trocaSelecao(q,op)">\n'+
'							<!-- pré-validação -->\n'+
'							<div class="status" v-if="(q.selecao != op) && !q.validacao">\n'+
'								<div class="circle"></div>\n'+
'							</div>\n'+
'							<div class="status" v-if="q.validacao && (q.selecao != op) && !op.correta">\n'+
'								<div class="circle"></div>\n'+
'							</div>\n'+
'							<div class="status" v-if="(q.selecao == op) && !q.validacao">\n'+
'								<div class="checked"></div>\n'+
'							</div>\n'+
'							<!-- pós-validação -->\n'+
'							<div class="status" v-if="op.correta && q.validacao">\n'+
'								<i class="fa fa-check" aria-hidden="true"></i>\n'+
'							</div>\n'+
'							<div class="status" v-if="(q.selecao == op) && !op.correta && q.validacao">\n'+
'								<i class="fa fa-times" aria-hidden="true"></i>\n'+
'							</div>\n'+
'							<span class="texto" v-html="op.texto"></span>\n'+
'						</div>\n'+
'						\n'+
'					</div>\n'+
'				</div>\n'+
'			</div>\n'+
'			<div class="rodape">\n'+
'				<div class="controles" v-if="!q.validacao">\n'+
'					<button class="botao" v-on:click="q.validacao = true" :disabled="!q.selecao" :title="avisoValida(q)">Enviar resposta</button>\n'+
'				</div>\n'+
'				<div class="controles" v-if="q.validacao && (atual < questoes.length - 1)">\n'+
'					<button class="botao" v-on:click="proximaQuestao">Próxima questão</button>\n'+
'				</div>\n'+
'				<div class="controles" v-if="q.validacao && (atual == questoes.length - 1)">\n'+
'					<button class="botao" v-on:click="status = \'final\'">Encerrar quiz</button>\n'+
'				</div>\n'+
'				<div class="comentario" v-if="q.comentario && q.validacao" v-html="\'<strong>Comentário sobre a questão:</strong> \' + q.comentario"></div>\n'+
'			</div>\n'+
'		</div>\n'+
'	</div>\n'+
'	<div class="container" v-if="status == \'final\'">\n'+
'		<div class="quiz-bloco__comecar">\n'+
'			<h1>Quiz finalizado!</h1>\n'+
'			<h2>Você acertou {{acertos}} de {{questoes.length}} questões</h2>\n'+
'			{{{encerramento}}}\n'+
'		</div>\n'+
'	</div>\n'+
'</div>	\n'+
'</div>\n'+
'</body>\n'+
'<script>var questoes = {{{json}}}</script>\n'+
'<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"></script>\n'+
'<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>\n'+
'<script src="https://gitcdn.xyz/repo/enrique42/quiz-frst/master/js/main.js"></script>\n'+
'</html>';

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

Vue.component('Trumbowyg', VueTrumbowyg.default);

var vue_gerador = new Vue({
    el: '#vue-gerador',
    data: {
        arquivo: 'quiz',
        titulo: 'Título do Quiz',
        abertura: '',
        encerramento: '',
        questoes: [],
        configtrumbo: {
            autogrowOnEnter: true,
            resetCss: true,
            removeformatPasted: true,
        }
    },
    methods: {
        addQuestao: function() {
            this.questoes.push({
                pergunta: '',
                selecao: false,
                validacao: false,
                opcoes: [],
                comentario: ''
            })
        },
        removeQuestao: function (lista,indice) {
            lista.splice(indice, 1);
        },
        addOpcao: function(onde) {
            onde.push({
                texto: '',
                correta: false,
            },);
        },
        removeOpcao: function (lista,indice) {
            lista.splice(indice, 1);
        },
        resetOpcao: function (pai,filho) {
            if (filho.correta==true){
                _.each(pai, function(o,i){
                    o.correta = false;
                })
                filho.correta = true;
            }
        },
        baixar: function(){
            var vthis = this;
            var problemas = [];
            _.each(vthis.questoes, function(o,i){
                var problema = _.filter(o.opcoes, ['correta', true]);
                if ((problema.length != 1)||(_.isEmpty(o.opcoes))) problemas.push(i+1);
            })
            if ((problemas.length)||(_.isEmpty(vthis.questoes))) {
                alert('Problemas nas questões '+_.join(problemas, ', '));
            } else {
                var texto = dataHtml;
                var texto = _.replace(texto, '{{{titulohead}}}', vthis.titulo);
                var texto = _.replace(texto, '{{{titulo}}}', vthis.titulo);
                var texto = _.replace(texto, '{{{abertura}}}', vthis.abertura);
                var texto = _.replace(texto, '{{{encerramento}}}', vthis.encerramento);
                var texto = _.replace(texto, '{{{json}}}', JSON.stringify(vthis.questoes));
                download(vthis.arquivo+'.html',texto);
            }
        }
    },
    computed: {

    },
    created: function () {
        

    }
});