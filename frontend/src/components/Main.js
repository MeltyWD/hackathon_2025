import React from 'react';
import FirstPage from './FirstPage.js';
import SecondPage from './SecondPage.js';

function Main(props) {

  const [ selectPage, setSelectPage] = React.useState(1)

  function clickPageChange(number) {
    setSelectPage(number)
  }

  return (
    <main>
      <FirstPage
        selected={selectPage}
        pageNumber={1}
        onClickPageChange={clickPageChange}
      />
      <SecondPage
        selected={selectPage}
        pageNumber={2}
        onClickPageChange={clickPageChange}
      />
    </main>
  )
}

export default Main;