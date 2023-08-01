export const main = ({ components }) => {
  const mainComponent = document.createElement(`main`);
    mainComponent.classList.add(`main`);

  for (const component of components) {
    mainComponent.append(component);
  }

  return mainComponent;
};