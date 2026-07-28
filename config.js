/* ==========================================================================
   CONFIG.JS  —  ÚNICO ARQUIVO QUE VOCÊ EDITA PARA CRIAR UM NOVO CONVITE
   ==========================================================================

   COMO USAR:
   1. Troque apenas os arquivos usados na pasta /assets (mantendo os mesmos nomes).
   2. Edite os valores abaixo (nome, WhatsApp, mapa, cores, etc.).
   3. Suba no GitHub. Pronto — não precisa mexer no index.html.

   As cores no campo "tema" podem ser nome ('pink'), hexadecimal ('#f6c1cd')
   ou rgb('rgb(246,193,205)'). Use o formato que preferir.

   DICA: para reposicionar os botões da tela principal, abra o convite no
   navegador com ?editor=1 no final do link (ex.: .../index.html?editor=1),
   arraste os botões e clique em "Copiar código". Cole o resultado no campo
   "hotspots" aqui embaixo.
   ========================================================================== */

window.CONFIG = {

  // ENGINE V4 MODULAR

  // ----- IDENTIDADE DO CONVITE -------------------------------------------
  // Nome do aniversariante. Aparece no título da aba do navegador e nos
  // textos automáticos do convite.
  nome: "Julia",

  // ----- WHATSAPP (CONFIRMAR PRESENÇA) -----------------------------------
  // numero: DDI + DDD + número, SÓ DÍGITOS (sem +, espaço, parênteses ou traço).
  //         Ex.: 55 (Brasil) + 31 (DDD) + 985657116 -> "5531985657116"
  // mensagem: texto que já vem pré-preenchido quando a pessoa abre o WhatsApp.
  whatsapp: {
    numero: "5591981826470",
    mensagem: "Olá! Confirmo minha presença no aniversário da Julia."
  },

  // ----- LOCALIZAÇÃO (BOTÃO MAPA) ----------------------------------------
  // Link completo do Google Maps. Abra o local no Maps, clique em "Compartilar"
  // -> "Copiar link" e cole aqui (mantenha as aspas).
  mapa: "https://www.google.com/maps/place/P%C3%A9rola+Recep%C3%A7%C3%B5es/@-1.4581035,-48.4894238,21z/data=!4m16!1m9!3m8!1s0x92a48e887b00a27d:0x7919196d5f853527!2sAv.+Conselheiro+Furtado,+1008+-+Batista+Campos,+Bel%C3%A9m+-+PA,+66025-160!3b1!8m2!3d-1.4582251!4d-48.489184!10e5!16s%2Fg%2F11c5n0nwyw!3m5!1s0x92a48e887c984aff:0x927292c250d23c59!8m2!3d-1.4581865!4d-48.489231!16s%2Fg%2F11cm436x_c?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",

  // ----- QUAIS TELAS APARECEM --------------------------------------------
  // video:     true  -> toca o vídeo (assets/video.mp4) depois da abertura.
  //            false  -> pula direto da abertura para a tela principal.
  // Cada opção pode ser true ou false.
  // Quando estiver false, o hotspot, a tela e a opção do editor são removidos.
  telas: {
    video: true,
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: true,
    manual: true,
    contagem: false
  },

  // ----- TEXTOS DOS BOTÕES -----------------------------------------------
  // Rótulos que aparecem nos botões. Edite livremente.
  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  // ----- TEMA / CORES ----------------------------------------------------
  // cor:                 cor principal (barra do navegador mobile, acentos).
  // corBotaoVoltar:      fundo do botão "Voltar" (tela de presentes).
  // corTextoBotaoVoltar: texto do botão "Voltar".
  tema: {
    cor: "#f6c1cd",
    corBotaoVoltar: "rgba(255,255,255,.76)",
    corTextoBotaoVoltar: "#6b3a21"
  },


  // ----- BOTÕES DE VOLTAR -------------------------------------------------
  // mostrarTexto: true mostra “Voltar”; false deixa apenas a área clicável.
  // A posição pode ser alterada no editor ?editor=1.
  botoesVoltar: {
    presentes: { mostrarTexto:false, posicao: {"left":33.553047623801916,"top":81.93729445520376,"width":33.4951889476837,"height":4.619102111586347} },
    dresscode: { mostrarTexto:true, posicao: {"left":30.485939372004793,"top":95.2859570329013,"width":38.607010033945684,"height":4.043731420910177} },
    manual: { mostrarTexto:true, posicao: {"left":33.961971470646965,"top":91.6035648586758,"width":30.632597219448883,"height":4.388957676351608} },
  },

  // ----- POSIÇÃO DOS BOTÕES NA TELA PRINCIPAL ----------------------------
  // Valores em PORCENTAGEM da imagem (0 a 100). Para evitar mexer à mão,
  // use o editor (?editor=1) e cole o resultado aqui.
  //   left/top: canto superior esquerdo do botão
  //   width/height: tamanho do botão
    hotspots: {
        confirm: { left:18.702107190296257, top:68.29112472545643, width:12.89594304816294, height:9.83820312573391 },
        map: { left:43.96716547120548, top:68.29110695946271, width:12.340385486301862, height:9.788819262269456 },
        gift: { left:68.50539011269983, top:68.16520384663721, width:12.81951377795527, height:10.024386964359572 },
        dress: { left:30.67639944684446, top:81.63978599874197, width:12.534855209744352, height:9.903874743945432 },
        manual: { left:56.44144242899377, top:81.74403774681961, width:12.819482577875398, height:10.024373795094213 }
  },

  // ----- CONTAGEM REGRESSIVA ---------------------------------------------
  // Formato da data: ANO-MÊS-DIAT HORA:MINUTO:SEGUNDO (sem espaço antes do T).
  // Exemplo: "2026-10-03T16:00:00"
  // A posição pode ser ajustada no editor escolhendo "Contador (na tela)".
  contagem: {
    dataEvento: "2026-10-03T16:00:00",
    textoFinal: "A festa começou!",
    corNumero: "#ffffff",
    corLegenda: "#ffffff",
    posicao: {
      left: 8,
      top: 48,
      width: 84,
      height: 16
    }
  },

  // ----- MÚSICA DE FUNDO -------------------------------------------------
  // volume: de 0 (mudo) a 1 (máximo). O padrão 0.30 é agradável e não
  //         briga com o áudio do vídeo.
  musica: {
    volume: 0.30
  }
};
