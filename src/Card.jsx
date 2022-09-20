import React from "react";

const Card = ({ userData, getData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="card">
      <div className="image-container">
        <img
          className="card-img-top image"
          src={userData.picture.large}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">
          {userData.name.title} {userData.name.first} {userData.name.last}
        </h5>
        <p className="card-title text-center">{userData.gender}</p>
        <p className="card-text">E-mail: {userData.email}</p>
        <p className="card-text">
          Adress: {userData.location.state} {userData.location.city}{" "}
          {userData.location.country}
        </p>
        <p className="card-text">Age: {userData.dob.age} </p>
        <p className="card-text">
          Registered on {userData.registered.date.substring(0, 10)}{" "}
        </p>
        <p className="card-text">{userData.phone}</p>
        <button
          href="#"
          className="btn btn-primary w-100"
          onClick={handleClick}
        >
          Switch User
        </button>
      </div>
    </div>
  );
};

export default Card;
