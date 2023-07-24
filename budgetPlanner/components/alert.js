export const alert = (type, content) => {
    const alertComponent = document.createElement('div');
    alertComponent.className = `alert alert-${type} fixed-bottom`;
    alertComponent.textContent = content;

    const handleClose = e => e.target.classList.add('d-none');

    alertComponent.addEventListener('click', handleClose);

    return alertComponent;
}