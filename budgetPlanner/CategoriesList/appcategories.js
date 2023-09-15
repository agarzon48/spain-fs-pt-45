import { navbar } from "../components/navbar.js";
import { main } from "../components/main.js";
import { listItems } from "./data.js";
import { listOfCategoriesComponent } from "../components/listOfCategories.js";
import { listOfCategoriesDetails } from "../components/categoriesDetails.js";

const root = document.querySelector('#root');

root.append(navbar());
root.append(
    main({
      components: [listOfCategoriesComponent(listItems)]
  })
);

let buttons = document.getElementsByClassName('btn');
Array.from(buttons).forEach(item => {
  item.addEventListener('click', function() {
      buttonClick(item.id);
  });
});

function buttonClick(id) {
  let existingDetails = document.getElementById(`divDetails-${listItems.filter(elem => elem.id == id)[0].category}`);
    if (existingDetails === null) {
      let myButton = document.getElementById(id);
      let details = listOfCategoriesDetails(listItems.filter(elem => elem.id == id));
      myButton.after(details);
    } else {
      if (existingDetails.style.display === "none") {
        existingDetails.style.display = "block";
      } else {
        existingDetails.style.display = "none";
      }
    }
}

