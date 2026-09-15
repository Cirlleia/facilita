// --- BASE DE DADOS DOS SERVIÇOS ---
const conteudos = {
    documentos: {
        titulo: "Documentos Pessoais",
        servicos: [
            {
                id: "cn",
                nome: "CERTIDÃO DE NASCIMENTO",
                desc: "O primeiro registro oficial do cidadão, essencial para emitir todos os outros documentos.",
                passos: [
                    "<br><strong>PRIMEIRA VIA:</strong>",
                    "A primeira via da certidão de nascimento deve ser emitida presencialmente em cartório de registro civil.",
                    "O procedimento deve ser iniciado dentro do prazo de <strong>15 dias</strong> após o nascimento.",
                    "<strong>Declaração de Nascido Vivo (DNV):</strong> fornecida pela maternidade.", 
                    "<strong>Documento de identificação com foto</strong> dos pais (RG, CNH ou Passaporte).", 
                    "<strong>Certidão de Casamento:</strong> necessária apenas se os pais forem casados.",
                    "<br>A emissão da primeira via é <strong>gratuita</strong>.",
                    "<br><strong>SEGUNDA VIA / CERTIDÃO ATUALIZADA:</strong>",
                    "Solicite pelo portal oficial <a href=\"https://registrocivil.org.br\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">Registro Civil</a> com entrega digital ou impressa.",
                    "<br><strong>CARTÓRIO DE REGISTRO CIVIL DE ERVÁLIA:</strong>",
                    "<strong>Endereço:</strong> Rua Barão do Rio Branco, 12 - Sala 108 - Teixeira Shopping - Centro",
                    "<strong>Atendimento:</strong> Segunda a sexta, das 09h às 17h"
                ]
            },
            {
                id: "cpf",
                nome: "CADASTRO DE PESSOA FÍSICA (CPF)",
                desc: "Como emitir a 1ª ou 2ª via do seu CPF.",
                passos: [
                    "<br><strong>PRIMEIRA VIA:</strong>",
                    "Compareça ao Posto de Atendimento da Receita Federal (PAV) com documento de identidade, certidão e comprovante de residência.",
                    "<br><strong>SEGUNDA VIA:</strong>",
                    "Pode ser emitida gratuitamente pelo site oficial da <a href=\"https://servicos.receita.fazenda.gov.br/servicos/cpf/impressaocomprovante/consultaimpressao.asp\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">Receita Federal</a>.",
                    "<br><strong>POSTO DE ATENDIMENTO DA RECEITA FEDERAL (PAV):</strong>",
                    "<strong>Endereço:</strong> Rua Nossa Senhora Aparecida, 50 - Sala Mineira - Centro"
                ]
            },
            {
                id: "cin",
                nome: "CARTEIRA DE IDENTIFICAÇÃO NACIONAL (CIN / RG)",
                desc: "Novo documento de identidade único nacional.",
                passos: [
                    "Agende a emissão no Posto de Identificação da Polícia Civil portando certidão de nascimento/casamento e CPF.",
                    "<br><strong>POSTO DE IDENTIFICAÇÃO DA POLÍCIA CIVIL:</strong>",
                    "<strong>Endereço:</strong> Praça Arthur Bernardes, 28 - Centro (antiga delegacia)"
                ]
            },
            {
                id: "cam",
                nome: "CERTIFICADO DE ALISTAMENTO MILITAR",
                desc: "Alistamento militar obrigatório para jovens do sexo masculino.",
                passos: [
                    "<br><strong>Alistamento Online:</strong>", 
                    "No ano em que completar 18 anos, acesse o portal do <a href=\"https://alistamento.eb.mil.br/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">Alistamento Militar Online</a> via conta gov.br (de 01/01 a 30/06).",
                    "<br><strong>Presencialmente:</strong>",
                    "Comparecer à Junta de Serviço Militar caso tenha perdido o prazo.",
                    "<br><strong>JUNTA DE SERVIÇO MILITAR:</strong>",
                    "<strong>Endereço:</strong> Rua Nossa Senhora Aparecida, 50 - Sala Mineira - Centro"
                ]
            },
            {
                id: "ctps",
                nome: "CARTEIRA DE TRABALHO DIGITAL",
                desc: "Acesse seus contratos de trabalho e histórico profissional.",
                passos: [
                    "Baixe o aplicativo 'Carteira de Trabalho Digital' na Google Play ou App Store.",
                    "Faça login com sua conta gov.br para consultar seus registros."
                ]
            },
            {
                id: "cnh",
                nome: "CARTEIRA NACIONAL DE HABILITAÇÃO (CNH)",
                desc: "Orientações para 1ª habilitação ou renovação.",
                passos: [
                    "Acesse o portal do <a href=\"https://detran.mg.gov.br/habilitacao\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">Detran</a> ou procure uma autoescola credenciada.",
                    "<br><strong>SETOR DE HABILITAÇÃO (REGIONAL):</strong>",
                    "<i>Não há atendimento presencial em Ervália</i>",
                    "<strong>Endereço:</strong> Rua Francisco Marinho da Silva, 6 - Bela Vista - Viçosa-MG"
                ]
            }
        ]
    },
    saude: {
        titulo: "Serviços de Saúde",
        servicos: [
            {
                id: "sus",
                nome: "Cartão SUS e Consultas",
                desc: "Como solicitar o Cartão SUS e agendar consultas na UBS.",
                passos: [
                    "Compareça à Unidade Básica de Saúde (UBS) do seu bairro com RG e comprovante de residência para cadastro e agendamentos."
                ]
            }
        ]
    },
    beneficios: {
        titulo: "Benefícios Sociais",
        servicos: [
            {
                id: "cadunico",
                nome: "Cadastro Único (CadÚnico)",
                desc: "Inscrição para programas sociais do Governo Federal.",
                passos: [
                    "O cadastro é presencial. O Responsável Familiar deve apresentar documento com foto, CPF, comprovante de residência e documentos de todos os moradores da casa.",
                    "<br><strong>SECRETARIA DE ASSISTÊNCIA SOCIAL / CRAS:</strong>",
                    "<strong>Endereço:</strong> Rua Nossa Senhora Aparecida, 50 - Centro"
                ]
            },
            {
                id: "idoso",
                nome: "Carteira da Pessoa Idosa",
                desc: "Gratuidade e descontos em viagens interestaduais para idosos.",
                passos: [
                    "Garante vagas gratuitas ou desconto de 50% em passagens interestaduais para pessoas com 60+ anos e renda de até 2 salários mínimos.",
                    "Emissão presencial no CRAS ou online via portal do Ministério da Cidadania.",
                    "<br><strong>SECRETARIA DE ASSISTÊNCIA SOCIAL:</strong>",
                    "<strong>Endereço:</strong> Rua Nossa Senhora Aparecida, 50 - Centro"
                ]
            },
            {
                id: "jovem",
                nome: "ID Jovem",
                desc: "Meia-entrada e transporte interestadual gratuito para jovens.",
                passos: [
                    "Destinado a jovens de 15 a 29 anos de baixa renda inscritos no CadÚnico.",
                    "Emita pelo site <a href=\"https://idjovem.juventude.gov.br\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">ID Jovem</a> ou pelo aplicativo ID Jovem inserindo seu NIS.",
                    "O documento é gerado instantaneamente em formato digital."
                ]
            },
            {
                id: "estacionamento",
                nome: "Carteirinha de Estacionamento",
                desc: "Vagas reservadas para Idosos e Pessoas com Deficiência (PCD).",
                passos: [
                    "Apresente cópia do CPF, RG e comprovante de residência no Setor de Trânsito.",
                    "Para credencial PCD, é obrigatório anexar laudo médico com CID.",
                    "<br><strong>SETOR DE TRÂNSITO:</strong>",
                    "Praça Arthur Bernardes, 28 - Centro"
                ]
            },
            {
                id: "seguro",
                nome: "Seguro-Desemprego",
                desc: "Requerimento do benefício do trabalhador.",
                passos: [
                    "Tenha em mãos o Requerimento de Seguro-Desemprego fornecido pelo empregador.",
                    "Solicite pelo aplicativo Carteira de Trabalho Digital ou portal <a href=\"https://gov.br\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">gov.br</a>"
                ]
            }
        ]
    },
    tributos: {
        titulo: "Tributos e Impostos",
        servicos: [
            {
                id: "irpf",
                nome: "Imposto de Renda Pessoa Física (IRPF)",
                desc: "Declaração anual do Imposto de Renda.",
                passos: [
                    "Reúna os informes de rendimentos, recibos médicos, educacionais e dados de bens.",
                    "Envie a declaração pelo Programa IRPF, aplicativo Meu Imposto de Renda ou <a href=\"https://cav.receita.fazenda.gov.br\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">e-CAC</a> com conta gov.br Prata ou Ouro.",
                    "Em caso de dúvidas, consulte um contador."
                ]
            },
            {
                id: "itr",
                nome: "Imposto Territorial Rural (ITR)",
                desc: "Declaração de propriedade de imóvel rural.",
                passos: [
                    "Acesse o portal <a href=\"https://cav.receita.fazenda.gov.br\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">e-CAC</a> da Receita Federal ou utilize o Programa Gerador do ITR.",
                    "Informe o NIRF, dados da propriedade, áreas de preservação e o Valor da Terra Nua (VTN).",
                    "A emissão do DARF e a entrega ocorrem anualmente até o final de setembro."
                ]
            }
        ]
    }
};

let servicosAtuais = [];

// --- GERENCIAMENTO DE VOZ ---
function pararVoz() {
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        const btnAudio = document.getElementById('btn-read-tutorial');
        if (btnAudio) btnAudio.innerText = '🔊 Ouvir Passo a Passo';
    }
}

// --- NAVEGAÇÃO DE CATEGORIAS E TUTORIAIS ---
function abrirCategoria(chave) {
    pararVoz();
    const dados = conteudos[chave];
    if (!dados) return;

    servicosAtuais = dados.servicos;

    document.getElementById('category-title').innerText = dados.titulo;
    document.getElementById('tutorial-container').style.display = 'none';

    const optionsContainer = document.getElementById('services-options');
    optionsContainer.style.display = 'grid';
    optionsContainer.innerHTML = '';

    dados.servicos.forEach((servico, index) => {
        const btn = document.createElement('button');
        btn.className = 'service-opt-btn';
        btn.innerHTML = `<strong>${servico.nome}</strong><p>${servico.desc}</p>`;
        btn.onclick = () => exibirTutorial(index);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('home-view').style.display = 'none';
    const detailsView = document.getElementById('details-view');
    detailsView.style.display = 'block';
    detailsView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function exibirTutorial(index) {
    pararVoz();
    const servico = servicosAtuais[index];
    if (!servico) return;
    renderizarTutorial(servico.nome, servico.desc, servico.passos);
}

function exibirTutorialPorId(idServico) {
    pararVoz();
    let servicoEncontrado = null;

    Object.keys(conteudos).forEach(catKey => {
        const achado = conteudos[catKey].servicos.find(s => s.id === idServico);
        if (achado) servicoEncontrado = achado;
    });

    if (!servicoEncontrado) return;
    renderizarTutorial(servicoEncontrado.nome, servicoEncontrado.desc, servicoEncontrado.passos);
}

function renderizarTutorial(titulo, descricao, passos) {
    document.getElementById('tutorial-title').innerText = titulo;
    document.getElementById('tutorial-desc').innerText = descricao;

    const listaPassos = document.getElementById('tutorial-steps');
    listaPassos.innerHTML = '';

    passos.forEach(texto => {
        const p = document.createElement('p');
        p.className = 'texto-explicativo';
        p.innerHTML = texto;
        listaPassos.appendChild(p);
    });

    const container = document.getElementById('tutorial-container');
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function voltarParaInicio() {
    pararVoz();
    document.getElementById('details-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';
}

// --- BUSCA DE SERVIÇOS ---
function buscarServico() {
    pararVoz();
    const input = document.getElementById('search-input');
    if (!input) return;

    const termoValor = input.value.trim();
    const termo = termoValor.toLowerCase();

    if (termo === '') {
        alert('Por favor, digite o nome de um serviço ou documento para buscar.');
        return;
    }

    const homeView = document.getElementById('home-view');
    const detailsView = document.getElementById('details-view');
    const categoryTitle = document.getElementById('category-title');
    const servicesOptions = document.getElementById('services-options');
    const tutorialContainer = document.getElementById('tutorial-container');

    if (homeView) homeView.style.display = 'none';
    if (detailsView) detailsView.style.display = 'block';
    if (tutorialContainer) tutorialContainer.style.display = 'none';

    categoryTitle.innerText = `Resultados da busca por: "${termoValor}"`;

    let resultados = [];

    Object.keys(conteudos).forEach(catKey => {
        const servicosDaCat = conteudos[catKey].servicos || [];
        servicosDaCat.forEach(servico => {
            if (servico.nome.toLowerCase().includes(termo) || servico.desc.toLowerCase().includes(termo)) {
                resultados.push(servico);
            }
        });
    });

    if (resultados.length > 0) {
        servicesOptions.style.display = 'grid';
        servicesOptions.innerHTML = resultados.map(servico => `
            <button class="service-opt-btn" onclick="exibirTutorialPorId('${servico.id}')">
                <strong>${servico.nome}</strong>
                <p>${servico.desc}</p>
            </button>
        `).join('');
    } else {
        servicesOptions.style.display = 'block';
        servicesOptions.innerHTML = `
            <div class="search-no-results">
                <p>⚠️ Nenhum serviço encontrado para "<strong id="search-term-display"></strong>".</p>
                <p>Tente buscar por termos genéricos como: <em>RG, CIN, Saúde, SUS, ITR ou Imposto</em>.</p>
            </div>
        `;
        document.getElementById('search-term-display').textContent = termoValor;
    }

    detailsView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- TUTORIAL GOV.BR ---
function carregarTutorialGov() {
    pararVoz();
    const homeView = document.getElementById('home-view');
    const detailsView = document.getElementById('details-view');
    const tutorialContainer = document.getElementById('tutorial-container');
    const servicesOptions = document.getElementById('services-options');
    
    if (homeView) homeView.style.display = 'none';
    if (detailsView) detailsView.style.display = 'block';
    if (servicesOptions) servicesOptions.style.display = 'none';

    const passosGov = [
        "<br>A conta <strong>gov.br</strong> é sua identificação digital para acessar com segurança diversos serviços públicos.",
        "<br><strong>Passo 1: Acessar a Plataforma:</strong>",
        "Acesse <a href=\"https://www.gov.br\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"tutorial-link\">www.gov.br</a> ou baixe o app <strong>gov.br</strong>.",
        "<br><strong>Passo 2: Informar o CPF:</strong>",
        "Digite seu CPF e clique em <strong>Continuar</strong>.",
        "<br><strong>Passo 3: Validação:</strong>",
        "Escolha a validação por biometria facial, dados pessoais ou login pelo banco.",
        "<br><strong>Passo 4: Criar Senha:</strong> Crie uma senha segura.",
        "<br><strong>💡 Dica:</strong> Aumente para o nível Prata ou Ouro fazendo validação facial ou login bancário."
    ];

    document.getElementById('category-title').innerText = "Acesso Digital";
    renderizarTutorial("Como Criar e Validar sua Conta gov.br", "Passo a passo completo para criar sua identificação digital.", passosGov);
}

// --- NOTÍCIAS E PRAZOS ---
const noticiasPrazos = [
    {
        titulo: "Declaração do ITR 2026",
        descricao: "O prazo para envio da Declaração do Imposto Territorial Rural está aberto. Veja o passo a passo para emitir.",
        tipo: "interno",
        servicoId: "itr",
        validade: "2026-09-30"
    },
    {
        titulo: "Calendário de Cobrança do CRLV 2026",
        descricao: "Consulte o calendário oficial e saiba como emitir o licenciamento do seu veículo de forma digital.",
        tipo: "externo",
        link: "https://detran.mg.gov.br/veiculos/documentos-de-veiculos/obter-o-crlv-digital",
        validade: "2026-12-31"
    }
];

function carregarNoticias() {
    const container = document.getElementById('news-grid');
    if (!container) return;

    const hoje = new Date().toISOString().split('T')[0];
    const noticiasValidas = noticiasPrazos.filter(item => item.validade >= hoje);

    if (noticiasValidas.length === 0) {
        container.innerHTML = '<p class="sem-noticias">Nenhum alerta ou prazo pendente no momento.</p>';
        return;
    }

    container.innerHTML = noticiasValidas.map(noticia => {
        const acaoBotao = noticia.tipo === 'interno'
            ? `href="#" onclick="exibirTutorialPorId('${noticia.servicoId}'); return false;"`
            : `href="${noticia.link}" target="_blank" rel="noopener noreferrer"`;

        const textoBotao = noticia.tipo === 'interno' 
            ? 'Ver Tutorial no Facilita+ →' 
            : 'Acessar Portal Oficial ↗';

        return `
            <article class="news-card">
                <div class="news-card-body">
                    <span class="news-badge">📅 Prazo Ativo</span>
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descricao}</p>
                </div>
                <a ${acaoBotao} class="news-link">
                    ${textoBotao}
                </a>
            </article>
        `;
    }).join('');
}

// --- ACESSIBILIDADE ---
function lerTutorialEmVozAlta() {
    if (!('speechSynthesis' in window)) {
        alert('Seu navegador não suporta leitura por voz.');
        return;
    }

    if (window.speechSynthesis.speaking) {
        pararVoz();
        return;
    }

    const titulo = document.getElementById('tutorial-title').innerText;
    const descricao = document.getElementById('tutorial-desc').innerText;
    const passos = Array.from(document.querySelectorAll('#tutorial-steps p'))
                        .map(p => p.innerText)
                        .join('. ');

    const textoCompleto = `${titulo}. ${descricao}. ${passos}`;

    const fala = new SpeechSynthesisUtterance(textoCompleto);
    fala.lang = 'pt-BR';
    fala.rate = 0.95;

    const btnAudio = document.getElementById('btn-read-tutorial');

    fala.onstart = () => {
        if (btnAudio) btnAudio.innerText = '⏹️ Parar Leitura';
    };

    fala.onend = () => {
        if (btnAudio) btnAudio.innerText = '🔊 Ouvir Passo a Passo';
    };

    window.speechSynthesis.speak(fala);
}

// --- INICIALIZAÇÃO E ACESSIBILIDADE ---
document.addEventListener('DOMContentLoaded', () => {
    carregarNoticias();

    // Evento da caixa de busca
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                buscarServico();
            }
        });
    }

    // --- CONTROLE DE ALTO CONTRASTE ---
    // Procura por ID ou Classe comuns
    const btnContrast = document.getElementById('btn-contrast') 
                     || document.getElementById('toggle-contrast')
                     || document.querySelector('.btn-contrast');

    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
        });
    }

    // --- CONTROLE DE TAMANHO DE FONTE ---
    let fontSizeAtual = 100;

    const btnIncrease = document.getElementById('btn-font-increase') 
                      || document.getElementById('increase-font')
                      || document.querySelector('.btn-font-increase');

    const btnDecrease = document.getElementById('btn-font-decrease') 
                      || document.getElementById('decrease-font')
                      || document.querySelector('.btn-font-decrease');

    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            if (fontSizeAtual < 150) {
                fontSizeAtual += 10;
                document.documentElement.style.fontSize = `${fontSizeAtual}%`;
            }
        });
    }

    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            if (fontSizeAtual > 80) {
                fontSizeAtual -= 10;
                document.documentElement.style.fontSize = `${fontSizeAtual}%`;
            }
        });
    }
});