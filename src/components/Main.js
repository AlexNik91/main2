import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCIldoFxQfUbes_WEP_wRNWQKKkHydd9qg" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Книжная библиотека
            <br /> для тела и души.
          </h1>
        </div>
        <div className="row2">
          <h2>Найди Свою Книгу</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Поиск книги"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />

            <button className="btn">
              <span>Поиск</span>
            </button>
          </div>
          <img src="./images/children.png" alt="" />
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};
export default Main;
