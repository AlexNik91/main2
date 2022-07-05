import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  // const [currentPage, setCurrenpPage] = useState(1);
  // const [fetching, setFetching] = useState(true);
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
    //     if (fetching) {
    //       axios
    //         .get(
    //           "https://www.googleapis.com/books/v1/volumes?q=" +
    //             search +
    //             "&key=AIzaSyCIldoFxQfUbes_WEP_wRNWQKKkHydd9qg" +
    //             `&maxResults=40`
    //         )
    //         .then((respons) => {
    //           setData([...bookData, ...respons.data]);
    //           setCurrenpPage((prevState) => prevState + 1);
    //         })
    //         .finally(() => setFetching(false));
    //     }
    //   },
    //   [fetching]);
    // useEffect(() => {
    //   document.addEventListener("scroll", scrollHandler);
    //   return function () {
    //     document.removeEventListener("scroll", scrollHandler);
    //   };
    // }, []);
    // const scrollHandler = (e) => {
    //   if (
    //     e.target.documentElement.scrollHeight -
    //       (e.target.documentElement.scrollTop + window.innerHeight) <
    //     100
    //   ) {
    //     setFetching(true);
    //   }
    // };
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Книжная библиотека
            <br /> для души.
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
