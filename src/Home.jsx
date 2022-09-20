import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [userData, setUserData] = useState();
  const url = `https://randomuser.me/api/`;
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userData);

  return (
    <div className="card-container">
      {userData && <Card userData={userData} getData={getData} />}
    </div>
  );
};

export default Home;
