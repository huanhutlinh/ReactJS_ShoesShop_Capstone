import React from 'react';
import {Outlet} from 'react-router-dom'

export default function HomeTemplate() {
  return (
    <>
        <header>Header</header>
        <Outlet/>
        <footer>Footer</footer>
    </>
  )
}
