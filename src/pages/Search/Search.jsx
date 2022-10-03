import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { getProductByNameAction } from "../../redux/Reducers/productReducer";
import { PaginationSearch } from "./PaginationSearch";
import SearchResult from "./SearchResult";
import _, { set } from "lodash";

let timeout = null;
let select = 0;
export default function Search() {
  const { productSearch } = useSelector((state) => state.productReducer);
  let arrSort = [...productSearch];
  // let [stateSelect, setStateSelect] = useState(0);
  const dispatch = useDispatch();
  const keywordRef = useRef("");
  const [searchParams, setSearchParams] = useSearchParams();
  //Phan trang
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const handleChange = (e) => {
    const { value, id } = e.target;

    keywordRef.current = value;
    setSearchParams({ keyword: keywordRef.current });
  };

  const getProductByNameApi = async () => {
    try {
      if (searchParams.get("keyword") !== null) {
        console.log(searchParams.get("keyword"));
        const actionThunk = getProductByNameAction(searchParams.get("keyword"));
        dispatch(actionThunk);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    timeout = setTimeout(() => {
      getProductByNameApi();
    }, 1000);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [keywordRef.current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ keyword: keywordRef.current });
  };

  //Phan trang
  const lastPostIndex = currentPage * postPerPage; // lastPostIndex = 4
  const firstPostIndex = lastPostIndex - postPerPage; // firstPostIndex = 0
  const currentArrProduct = productSearch.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="container">
      <form className="search my-5" onSubmit={handleSubmit}>
        <h4>Search</h4>
        <div className="d-flex align-items-center gap-4 search-type">
          <input
            type="text"
            placeholder="product name .... "
            id="keyword"
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-secondary rounded-0 text-white rounded-pill"
            id="button-addon2"
          >
            search
          </button>
        </div>
      </form>
      <SearchResult productSearch={currentArrProduct}/>
      <PaginationSearch
        totalPost={productSearch.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
