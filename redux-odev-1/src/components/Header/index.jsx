import React from 'react';

import Search from './Search';

export default function Header() {
  return (
    <>
      <h1 className="title text-center fs-2 text-white">Redux Note Application</h1>
      <br />
      <Search />
    </>
  )
}
