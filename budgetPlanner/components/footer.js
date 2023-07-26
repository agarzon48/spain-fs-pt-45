export const footer = (html) => {
    const footerComponent = document.createElement(`footer`);
    footerComponent.className = `bg-info-subtle`;
    footerComponent.innerHTML = html;
    return footerComponent;
}