/**
 * Script de gestion de la page de loading
 * Redirige vers le site cible après un délai
 */

// Configuration
const CONFIG = {
    // URL de redirection - À personnaliser
    redirectUrl: 'https://cyriellecoul.github.io/devPortfolio/',
    
    // Délai avant redirection (en millisecondes)
    // Ajustez selon la durée souhaitée du loading
    redirectDelay: 2000
};

/**
 * Initialiser et démarrer la redirection
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page de chargement initialisée');
    console.log(`Redirection prévue vers: ${CONFIG.redirectUrl}`);
    console.log(`Délai: ${CONFIG.redirectDelay}ms`);
    
    // Démarrer le minuteur de redirection
    startRedirection();
});

/**
 * Gère la redirection automatique
 */
function startRedirection() {
    // Utiliser setTimeout pour la redirection après le délai
    setTimeout(() => {
        console.log('Redirection en cours...');
        window.location.href = CONFIG.redirectUrl;
    }, CONFIG.redirectDelay);
    
    // Optionnel : Ajouter une barre de progression
    createProgressBar();
}

/**
 * Crée une barre de progression optionnelle
 */
function createProgressBar() {
    // Créer un élément pour la barre de progression
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar-container';
    progressBar.innerHTML = '<div class="progress-bar-fill"></div>';
    
    // Ajouter le CSS de la barre de progression
    const style = document.createElement('style');
    style.textContent = `
        .progress-bar-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(255, 255, 255, 0.1);
            z-index: 1000;
        }
        
        .progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #ffd89b, #6bcf7f);
            width: 0%;
            animation: progressFill ${CONFIG.redirectDelay}ms linear forwards;
        }
        
        @keyframes progressFill {
            0% {
                width: 0%;
            }
            100% {
                width: 100%;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(progressBar);
}

