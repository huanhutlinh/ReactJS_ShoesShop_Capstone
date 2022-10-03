import React from 'react'; 

const Pagination = ({postsPerPage, setCurrentPage}) => {
  let totalPosts = 19;
  let pages = [];
  let currentPage = 1;
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i);
  }

  return (
    <div className='container text-center my-4'>
      {
        pages.map((page, index) => {
          return <button className='btn btn-warning mx-2 rounded-0 btnPagination' key={index}
          onClick={() => setCurrentPage(page)}
          >{page}</button>
        })
      }   
    </div>
  )
}

export default Pagination;
