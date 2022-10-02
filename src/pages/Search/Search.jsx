import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { getProductByNameAction } from "../../redux/Reducers/productReducer";
import { PaginationSearch } from "./PaginationSearch";
import SearchResult from "./SearchResult";
import _, { set } from "lodash";

let timeout = null;
export default function Search() {
  const { productSearch } = useSelector((state) => state.productReducer);
  let arrSort = [...productSearch];
  let [stateSelect, setStateSelect] = useState(0);
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

  //HandleSorPrice
  const handleSortPrice = (e) => {
    let {value, id} = e.target;
    setStateSelect(value);
    // if(value == 1){
    //   let arrProductUp = arrSort.sort((spTiepTheo, sp) => {
    //     return spTiepTheo.price - sp.price;
    //   })
    //   arrSort = [...arrProductUp]
    //   // console.log('arrProductUp: ',arrSort);
    // }else{
    //   let arrProductDown = arrSort.sort((spTiepTheo, sp) => {
    //     return sp.price -  spTiepTheo.price;
    //   })
    //   arrSort = [...arrProductDown]
    //   // console.log('arrProductDown: ',arrSort);
    // }
  }

  useEffect(() => {
    if (stateSelect == 1) {
      let arrProductUp = arrSort.sort((spTiepTheo, sp) => {
        return spTiepTheo.price - sp.price;
      });
      arrSort = [...arrProductUp];
      // console.log('arrProductUp: ',arrSort);
    } else {
      let arrProductDown = arrSort.sort((spTiepTheo, sp) => {
        return sp.price - spTiepTheo.price;
      });
      arrSort = [...arrProductDown];
      // console.log('arrProductDown: ',arrSort);
    }
  }, [stateSelect]);
  console.log('arrSort: ',arrSort);
  //Phan trang
  const lastPostIndex = currentPage * postPerPage; // lastPostIndex = 4
  const firstPostIndex = lastPostIndex - postPerPage; // firstPostIndex = 0
  const currentArrProduct = arrSort.slice(firstPostIndex, lastPostIndex);
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
      <div className="search-result">
        <h3 className="title-search-result">Search result</h3>
        <div className="search-result-present my-4">
          <div className="search-result-select">
            <p>Price</p>
            <select
              className="form-select rounded-0"
              aria-label="text-white"
              onChange={handleSortPrice}
            >
              <option value="1">Ascending </option>
              <option value="0">Descending</option>
            </select>
          </div>
          <div className="search-result-items my-4 ">
            <div className="product-feature">
              <SearchResult productSearch={currentArrProduct} />
            </div>
          </div>
        </div>
      </div>
      <PaginationSearch
        totalPost={arrSort.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
