import { main } from "../components/main.js";
import {arrayObjects} from './data.js';
import { listItemsComponent } from "../components/listItems.js"

const root = document.querySelector('#root');
root.append(
    main({
      components: [listItemsComponent(arrayObjects)]
  })
);