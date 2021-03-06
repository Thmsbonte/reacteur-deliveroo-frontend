import "./App.scss";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import RestaurantPresentation from "./components/RestaurantPresentation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import MainContent from "./components/MainContent";
library.add(faStar, faPlus, faMinus);

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRestInfo = async () => {
    try {
      const restInfo = await axios.get(
        "https://reacteur-deliveroo-backend.herokuapp.com/restaurant/get"
      );
      setData(restInfo.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getRestInfo();
  }, []);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div className="App">
      <Header />
      <RestaurantPresentation restInfo={data.restaurant} />
      <MainContent categoriesInfo={data.categories} />
    </div>
  );
};

export default App;
