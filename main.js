// main.js
const langSelector = document.getElementById('language-selector');

if (langSelector) {
    langSelector.addEventListener('change', function() {
        const selectedLang = this.value;
        
        // Logika Pengalihan (gunakan salah satu opsi yang sudah dibahas)
        let currentPath = window.location.pathname;
        let newPath = currentPath;

        if (currentPath.startsWith('/id/') || currentPath.startsWith('/en/')) {
            newPath = '/' + selectedLang + currentPath.substring(currentPath.indexOf('/', 1));
        } else {
            newPath = '/' + selectedLang + currentPath;
        }
        
        window.location.href = window.location.origin + newPath + window.location.search;
    });
}