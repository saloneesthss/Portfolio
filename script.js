function toggleMenu() {
    const menu=document.querySelector( ".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showToast(projectNumber) {
    const toast = document.getElementById('toast');
    const message = `Live Demo for Project ${projectNumber} - coming soon!`;

    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}