function calculer() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let somme = num1 + num2;
        let produit = 0;
        for (let i = 0; i < num2; i++) {
          produit += num1;
        }
        let quotient = Math.floor( num1 / num2 );
        let reste = num1 % num2;
        document.getElementById("somme").value = somme;
        document.getElementById("produit").value = produit;
        document.getElementById("quotient").value = quotient;
        document.getElementById("reste").value = reste;
      }