import { navbar } from "../components/navbar.js";
import { main } from "../components/main.js";
import { listItems } from "./data.js";
import { listOfCategoriesComponent } from "../components/listOfCategories.js";
import { listOfCategoriesDetails } from "../components/categoriesDetails.js";

const root = document.querySelector('#root');

root.append(navbar());
root.append(
    main({
      components: [listOfCategoriesComponent(listItems), listOfCategoriesDetails(listItems)]
  })
);
