const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "como a inteligencia artificial pode ajudar na prevençao de doenças?",
        alternativas: [
            {
                texto: "ele pode ajudar em exames medicos e bem antes da doenças aparecer",
                afirmacao: "sim,ela seria muito util nesse quesito "
            },
            {
                texto: "sim, ela seria muito util nesse quesito  ",
                afirmacao: "ela poderia errar"
            }
        ]
    },
    {
        enunciado: "Coma inteligencia artifcial pode melhorar os cuidados de saude?",
        alternativas: [
            {
                texto: "isso pode ser bom para descobertas de medicamentos e analisar imagens medicas ?",
                afirmacao: "provavelmente sim"
            },
            {
                texto: "isso poderia ter erros medicos, tipos em cirurgias e exames ",
                afirmacao: "talvez não"
            }
        ]
    },
    {
        enunciado: "qual o impacto da inteligencia artificial na automação de tarefa em diferentes industrias",
        alternativas: [
            {
                texto: "isso vai ser muito bom",
                afirmacao: "pode aumentar a depecia de sistemas tecnologico, tornando difcil operare sem eles e aumntando a vulnerabilidade a falhas tecnologicas"
            },
            {
                texto: "isso vai ser muito bom ",
                afirmacao: "automação pode reduzir custos operacionais ao diminuir a necessidade de mao de obra e minimizar erros, economizando tempo e recursos "
            }
        ]
    },
    {
        enunciado: "com a inteligencia artificial pode melhorar a experiencia do paciente durante o tratamento medico?",
        alternativas: [
            {
                texto: "a IA pode oferecer suporte personalizado e lembretes de medicação, tornando o tratamento mais eficaz",
                afirmacao: "sim, ela teria uma boa precisão nos tratamentos "
            },
            {
                texto: "A dependencia excessiva de assistentes virtuais baseados em IA pode reduzir a intenção humana, o que pode fazer alguns pacientes se sentirem menos compreendidos e cuidados ",
                afirmacao: "Não, os pacientes iriam se sentir desconfortaveis"
            }
        ]
    },
    {
        enunciado: "Como a intenteligencia artificial pode impactar a educação no futuro ?",
        alternativas: [
            {
                texto: "a IA pode personalizar o aprendizado, adaptando o conteudo ao ritmo e estilo de cada aluno, melhorando o seu desempenho academico",
                afirmacao: "sim, os alunos teriam bastante facilidade "
            },
            {
                texto: "o uso excessivo de IA na educação pode diminuir a intenção humana, poncialmente limitando o desenvolvimento de habilidades sociais e emocionais dos alunos",
                afirmacao: "nao, alguns alunos teriam alguma certa dificuldades"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
