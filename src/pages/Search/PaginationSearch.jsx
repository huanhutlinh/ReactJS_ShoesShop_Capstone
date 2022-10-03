import React from 'react'

export const PaginationSearch = ({totalPost, postPerPage, setCurrentPage}) => {
    console.log('totalPost: ',totalPost,' postPerPage: ',postPerPage);
    let pages = [];
    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pages.push(i)
    }
  return (
    <div className='text-center my-4'>
        {
            pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className='btn btn-warning mx-2 rounded-0 btnPagination'>{page}</button>
            })
        }
    </div>
  )
}
