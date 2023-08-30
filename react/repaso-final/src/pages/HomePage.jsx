import Section from "../components/Section";

import useAppContext from "../contexts/AppContext";

const HomePage = () => {
  const { store } = useAppContext();
  const { isLoading } = store;

 if (isLoading) {
   return (
     <div className="spinner-border text-primary" role="status">
       <span className="visually-hidden">Loading...</span>
     </div>
   );
 }

  return (
    <main className="container">
      <Section resourceType="people" title="Characters" />
      <Section resourceType="planets" title="Planets" />
      <Section resourceType="vehicles" title="Vehicles" />
    </main>
  );
};

export default HomePage;
