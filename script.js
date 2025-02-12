function calculerTaux() {
    const capitalInitial = parseFloat(document.getElementById("capitalInitial1").value);
    const interets = parseFloat(document.getElementById("interetsGénérés").value);

    if (isNaN(capitalInitial) || isNaN(interets)) {
        document.getElementById("resultatTaux").textContent = "Veuillez entrer des nombres valides.";
        return;
    }

    const taux = (interets / capitalInitial) * 100;
    document.getElementById("resultatTaux").textContent = `Taux d'intérêt: ${taux.toFixed(2)}%`;
}

function calculerGainsFuturs() {
    const capitalInitial = parseFloat(document.getElementById("capitalInitial2").value);
    const tauxInteret = parseFloat(document.getElementById("tauxInteret").value) / 100;
    const nombreAnnees = parseInt(document.getElementById("nombreAnnees").value);

    if (isNaN(capitalInitial) || isNaN(tauxInteret) || isNaN(nombreAnnees)) {
        document.getElementById("resultatGains").textContent = "Veuillez entrer des nombres valides.";
        return;
    }

    let resultat = capitalInitial * Math.pow((1 + tauxInteret), nombreAnnees);
    let interetsGénérés = resultat - capitalInitial;

    document.getElementById("resultatGains").textContent = `Montant final: ${resultat.toFixed(2)}  | Intérêts générés: ${interetsGénérés.toFixed(2)}`;
}

function calculerInteretsCredit() {
    const montantEmprunte = parseFloat(document.getElementById("montantEmprunte").value);
    const tauxCreditAnnuel = parseFloat(document.getElementById("tauxCredit").value) / 100;
    let dureeCreditAnnees = parseFloat(document.getElementById("dureeCreditAnnees").value);
    let dureeCreditMois = parseFloat(document.getElementById("dureeCreditMois").value);

    if (isNaN(montantEmprunte) || isNaN(tauxCreditAnnuel)) {
        document.getElementById("resultatCredit").textContent = "Veuillez entrer des nombres valides pour le montant et le taux.";
        return;
    }
     if (isNaN(dureeCreditAnnees) && isNaN(dureeCreditMois)) {
        document.getElementById("resultatCredit").textContent = "Veuillez entrer soit le nombre d'années ou de mois.";
        return;
    }
     if (!isNaN(dureeCreditAnnees) && !isNaN(dureeCreditMois)) {
        document.getElementById("resultatCredit").textContent = "Veuillez entrer soit le nombre d'années ou de mois PAS LES DEUX.";
        return;
    }

    if (isNaN(dureeCreditMois)) {
        dureeCreditMois = dureeCreditAnnees * 12;
    }

    const tauxCreditMensuel = tauxCreditAnnuel / 12;

    // Formule de calcul de la mensualité (prêt amortissable)
    const mensualite = (montantEmprunte * tauxCreditMensuel) / (1 - Math.pow(1 + tauxCreditMensuel, -dureeCreditMois));

    let interetsTotaux = (mensualite * dureeCreditMois) - montantEmprunte;
    let montantTotal = montantEmprunte + interetsTotaux;

    document.getElementById("resultatCredit").textContent = `Mensualité: ${mensualite.toFixed(2)} | Intérêts totaux: ${interetsTotaux.toFixed(2)} | Montant total: ${montantTotal.toFixed(2)}`;
}
