// General recommendation function to display warnings and suggestions
function displayRecommendation(result, type) {
  let recommendation = "";
  let warningThresholds = {
    drehzahl: 60000,
    kv: 3000,
    spannung: 25,
  };

  let recommendations = {
    drehzahl: ["3S", "4S", "5S", "6S"],
    kv: ["low KV", "medium KV", "high KV"],
    spannung: ["low voltage", "medium voltage", "high voltage"],
  };

  let warningMessage = `Warning: ${type} too high! (${result})`;

  // Check if the result exceeds the thresholds
  if (type === "drehzahl" && result >= warningThresholds.drehzahl) {
    recommendation = `${warningMessage}. Recommended battery: ${recommendations.drehzahl[2]}`;
  } else if (type === "kv" && result >= warningThresholds.kv) {
    recommendation = `${warningMessage}. Consider a ${recommendations.kv[2]} motor.`;
  } else if (type === "spannung" && result >= warningThresholds.spannung) {
    recommendation = `${warningMessage}. Consider a ${recommendations.spannung[2]} battery.`;
  } else {
    recommendation = `${
      type.charAt(0).toUpperCase() + type.slice(1)
    } is optimal: ${result}`;
  }

  return recommendation;
}

// Berechnung der Drehzahl (RPM) mit Empfehlungen
function calcDrehzahl() {
  let kv = parseFloat(document.getElementById("calcKV").value);
  let spannung = parseFloat(document.getElementById("calcSpan").value);

  if (!isNaN(kv) && !isNaN(spannung)) {
    let drehzahl = kv * spannung;
    let recommendation = displayRecommendation(drehzahl, "drehzahl");
    document.getElementById("endDrehzahl").innerHTML = recommendation;
  } else {
    document.getElementById("endDrehzahl").innerHTML = "Invalid input.";
  }
}

// Berechnung KV-Wert mit Empfehlungen
function calcKV() {
  let drehzahl = parseFloat(document.getElementById("calcDreh").value);
  let spannung = parseFloat(document.getElementById("calcSpan").value);

  if (!isNaN(drehzahl) && !isNaN(spannung)) {
    let kv = drehzahl / spannung;
    let recommendation = displayRecommendation(kv, "kv");
    document.getElementById("endKV").innerHTML = recommendation;
  } else {
    document.getElementById("endKV").innerHTML = "Invalid input.";
  }
}

// Berechnung Spannung mit Empfehlungen
function calcSpannung() {
  let drehzahl = parseFloat(document.getElementById("calcDreh2").value);
  let kv = parseFloat(document.getElementById("calcKV2").value);

  if (!isNaN(drehzahl) && !isNaN(kv)) {
    let spannung = drehzahl / kv;
    let recommendation = displayRecommendation(spannung, "spannung");
    document.getElementById("endSpannung").innerHTML = recommendation;
  } else {
    document.getElementById("endSpannung").innerHTML = "Invalid input.";
  }
}

// Berechnung max. Strom (Kapazität * C-Rate)
function maxStrom() {
  let kapazitaet = parseFloat(document.getElementById("calcKapi").value);
  let cRate = parseFloat(document.getElementById("calcCRate").value);

  if (!isNaN(kapazitaet) && !isNaN(cRate)) {
    let maxStrom = kapazitaet * cRate;
    document.getElementById("endStrom").innerHTML = `Max Strom: ${maxStrom}A`;
  } else {
    document.getElementById("endStrom").innerHTML = "Invalid input.";
  }
}

// Berechnung Kapazität mit C-Rate und Strom
function kapazitaet() {
  let cRate = parseFloat(document.getElementById("calcCRate2").value);
  let strom = parseFloat(document.getElementById("calcStrom").value);

  if (!isNaN(cRate) && !isNaN(strom)) {
    let kapazitaet = strom / cRate;
    document.getElementById(
      "endAh"
    ).innerHTML = `Kapazität: ${kapazitaet.toFixed(2)}Ah`;
  } else {
    document.getElementById("endAh").innerHTML = "Invalid input.";
  }
}

// Berechnung der C-Rate
function CRate() {
  let strom = parseFloat(document.getElementById("calcStrom2").value);
  let kapazitaet = parseFloat(document.getElementById("calcKapi2").value);

  if (!isNaN(strom) && !isNaN(kapazitaet)) {
    let cRate = strom / kapazitaet;
    document.getElementById("endCRate").innerHTML = `C-Rate: ${cRate.toFixed(
      2
    )}`;
  } else {
    document.getElementById("endCRate").innerHTML = "Invalid input.";
  }
}
