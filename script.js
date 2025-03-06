let txtIdadeAtual = document.getElementById("txtIdadeAtual");
let txtIdadePrevistaAposentadoria = document.getElementById("txtIdadePrevistaAposentadoria");
let txtRendaMensalMedia = document.getElementById("txtRendaMensalMedia");
let txtGastoMensalFamilia = document.getElementById("txtGastoMensalFamilia");
let txtValorTotalAproximadoInvestimentos = document.getElementById("txtValorTotalAproximadoInvestimentos");
let txtRentabilidadeMediaAnualInvestimentos = document.getElementById("txtRentabilidadeMediaAnualInvestimentos");

let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("btnCalcular");
let btnLimpar = document.getElementById("btnLimpar");

function limparCampos() {
  txtIdadeAtual.value = '';
  txtIdadePrevistaAposentadoria.value = '';
  txtRendaMensalMedia.value = '';
  txtGastoMensalFamilia.value = '';
  txtValorTotalAproximadoInvestimentos.value = '';
  txtRentabilidadeMediaAnualInvestimentos.value = '';
  resultado.innerHTML = '';
}

btnLimpar.addEventListener('click', limparCampos);

function calcularValores() {
  const a = Number(txtIdadeAtual.value);
  const b = Number(txtIdadePrevistaAposentadoria.value);
  const c = Number(txtRendaMensalMedia.value);
  const d = Number(txtGastoMensalFamilia.value);
  const e = Number(txtValorTotalAproximadoInvestimentos.value);
  const f = Number(txtRentabilidadeMediaAnualInvestimentos.value);

  const pms = 6 * d;
  const pmr = 12 * d;
  const pi = 0.1 * 12 * d * a;

  // Declaração da variável i que estava faltando
  const i = (f / 100) ;//12
  const pnif = 12 * d / i;

  console.log(`PMS = ${pms.toFixed(2)}`);
  console.log(`PMR = ${pmr.toFixed(2)}`);
  console.log(`PI = ${pi.toFixed(2)}`);
  console.log(`PNIF = ${pnif.toFixed(2)}`);

  resultado.innerHTML = `
    <p>Patrimônio Mínimo de Sobrevivência (PMS): ${pms.toFixed(2)}</p>
    <p>Patrimônio Mínimo Recomendado (PMR): ${pmr.toFixed(2)}</p>
    <p>Patrimônio Ideal para a Idade (PI): ${pi.toFixed(2)}</p>
    <p>Patrimônio Necessário para Independência Financeira (PNIF): ${pnif.toFixed(2)}</p>
  `;
}

btnCalcular.addEventListener('click', calcularValores);