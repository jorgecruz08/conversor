// --- Conversor de Divisas ---
async function convertirDivisa() {
  const usd = document.getElementById("usd").value;
  const resultadoDivisa = document.getElementById("resultado-divisa");

  if (!usd) {
    resultadoDivisa.textContent = "⚠️ Ingresa un valor en USD.";
    return;
  }

  try {
    const res = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=EUR");
    const data = await res.json();
    const tasa = data.rates.EUR;
    const conversion = (usd * tasa).toFixed(2);

    resultadoDivisa.textContent = `${usd} USD = ${conversion} EUR`;
  } catch (error) {
    resultadoDivisa.textContent = "❌ Error al obtener tasa de cambio.";
  }
}

// --- Conversor de Kg a Lb ---
function convertirKgLb() {
  const kg = document.getElementById("kg").value;
  const resultadoUnidades = document.getElementById("resultado-unidades");

  if (!kg) {
    resultadoUnidades.textContent = "⚠️ Ingresa un valor en Kg.";
    return;
  }

  const lb = (kg * 2.20462).toFixed(2);
  resultadoUnidades.textContent = `${kg} Kg = ${lb} Lb`;
}

// --- Conversor de Lb a Kg ---
function convertirLbKg() {
  const lb = document.getElementById("lb").value;
  const resultadoUnidades = document.getElementById("resultado-unidades");

  if (!lb) {
    resultadoUnidades.textContent = "⚠️ Ingresa un valor en Lb.";
    return;
  }

  const kg = (lb / 2.20462).toFixed(2);
  resultadoUnidades.textContent = `${lb} Lb = ${kg} Kg`;
}
