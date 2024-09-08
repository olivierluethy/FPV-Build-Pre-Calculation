class DrehzahlCalculator {

        constructor() {
    
            // Speichere Referenzen auf die HTML-Elemente
    
            this.drehzahlInput = document.getElementById("drehzahl");
    
            this.kvInput = document.getElementById("kv");
    
            this.spannungInput = document.getElementById("spannung");
    
            this.rpmWarning = document.getElementById("rpm-warning");
    
       
    
            // Grenzwerte und Konstanten
    
            this.maxSichereDrehzahl = 50000; // Beispielwert für die maximale sichere Drehzahl
    
            this.maxThermischeBelastung = 20; // Beispielwert für die maximale thermische Belastung (Ampere)
    
        }
    
    
    
        calculate() {
    
          const kv = parseFloat(this.kvInput.value);
    
          const spannung = parseFloat(this.spannungInput.value);
    
          if (!isNaN(kv) && !isNaN(spannung)) {
    
            const berechneteDrehzahl = kv * spannung;
    
            this.drehzahlInput.value = berechneteDrehzahl.toFixed(2);
    
    
    
            // Überprüfung auf sichere Drehzahl
    
            if (berechneteDrehzahl > this.maxSichereDrehzahl) {
    
              this.rpmWarning.textContent = "Achtung: Drehzahl ist zu hoch!";
    
              this.rpmWarning.classList.add("warning");
    
              this.rpmWarning.classList.remove("good");
    
            } else {
    
              this.rpmWarning.textContent = "Drehzahl ist im sicheren Bereich.";
    
              this.rpmWarning.classList.add("good");
    
              this.rpmWarning.classList.remove("warning");
    
            }
    
    
    
            // Thermische Belastung basierend auf Drehzahl (vereinfachtes Modell)
    
            const thermischeBelastung = spannung * kv * 0.001; // Beispiel für Strombedarf in Abhängigkeit von Drehzahl und Spannung
    
            if (thermischeBelastung > this.maxThermischeBelastung) {
    
              this.rpmWarning.textContent += " (Hohe thermische Belastung!)";
    
              this.rpmWarning.classList.add("warning");
    
            }
    
          }
    
    
    
          // Berechnung der Faustregel für maximale Spannung
    
          const maxDrehzahl = parseFloat(this.maxDrehzahlInput.value);
    
          const kvFaustregel = parseFloat(this.kvFaustregelInput.value);
    
          if (!isNaN(maxDrehzahl) && !isNaN(kvFaustregel)) {
    
            const maxSpannung = maxDrehzahl / kvFaustregel;
    
            this.maxSpannungInput.value = maxSpannung.toFixed(2);
    
          }
    
        }
    
      }
    
    
    
    
    
    
    
      // Initialisiere den Calculator
    
      const calculator = new DrehzahlCalculator();