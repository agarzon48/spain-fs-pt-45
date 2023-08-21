import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const useGetResources = (url) => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const notify = (msg) => toast(msg);

    useEffect(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error();
            }
            return res.json();
          })
          .then((res) => {
            setResources(res);
            setIsLoading(false);
            notify("Se han obtenido los recusos");

          })
          .catch((err) => notify("Ha habido un error")
);
    }, []);
    
    return [resources, isLoading];
}

export default useGetResources;