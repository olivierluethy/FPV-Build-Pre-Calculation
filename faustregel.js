class Faustregel {

        constructor() {
    
          this.maxSpannung = document.getElementById("maxSpannung");
    
          this.maxDrehzahl = document.getElementById("maxDrehzahl");
    
          this.kvFaustregel = document.getElementById("kvFaustregel");
    
    
    
          // Add event listeners for dynamic calculations
    
          this.maxSpannung.addEventListener("keyup", () => this.calculateKVFaustregel());
    
          this.maxDrehzahl.addEventListener("keyup", () => this.calculateKVFaustregel());
    
        }
    
    
    
        calculateKVFaustregel() {
    
          let maxSpannung = parseFloat(this.maxSpannung.value);
    
          let maxDrehzahl = parseFloat(this.maxDrehzahl.value);
    
    
    
          if (!isNaN(maxSpannung) && !isNaN(maxDrehzahl)) {
    
            this.kvFaustregel.value = (maxDrehzahl / maxSpannung).toFixed(2);
    
          }
    
        }
    
      }
    
    
    
      // Initialize the calculator (only one instance needed)
    
      const faustregel = new Faustregel();