import Card from "../Card";
import useAppContext from "../../contexts/AppContext";

import classes from './Section.module.css'

const Section = ({ title, resourceType }) => {
  const { store } = useAppContext();
  const resources = store[resourceType];

    return (
      <section className="my-5">
        <h2 className="mb-2">{title}</h2>
        <div className={classes.carousel}>
          {resources.map((item, index) => (
            <Card key={index} resourceType={resourceType} {...item} />
          ))}
        </div>
      </section>
    );
 }

export default Section;