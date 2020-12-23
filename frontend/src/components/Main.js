import React from 'react';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';
import FivePage from './Pages/FivePage';

function Main(props) {

  const [ selectPage, setSelectPage] = React.useState(1)
  const [ selectCategoryOne, setSelectCategoryOne ] = React.useState('')
  const [ selectCategoryTwo, setSelectCategoryTwo ] = React.useState('')
  const [ selectCategoryThree, setSelectCategoryThree ] = React.useState('')
  const [ poemList, setPoemList ] = React.useState([])

  function clickPageChange(number) {
    setSelectPage(number)
  }
  function selectedCategoryOne(text) {
    setSelectCategoryOne(text)
  }
  function selectedCategoryTwo(text) {
    setSelectCategoryTwo(text)
  }
  function selectedCategoryThree(text) {
    setSelectCategoryThree(text)
  }

  React.useEffect(() => {
    if (selectCategoryThree === '') {
      return
    } else {
      fetch(`https://hackathon2025.herokuapp.com/poems/${selectCategoryOne}/${selectCategoryTwo}/${selectCategoryThree}`, {
      method: 'GET'
      })
      .then((res) => {
        return res.json()
      })
      .then(res => {
        setPoemList(res)
      })
      .catch((err) => console.log(err))
    }
    
  },[selectCategoryThree])

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
        selectedCategory={selectedCategoryOne}
      />
      <ThirdPage 
        selected={selectPage}
        pageNumber={3}
        onClickPageChange={clickPageChange}
        selectedCategory={selectedCategoryTwo}
        prevSelected={selectCategoryOne}
      />
      <FourthPage 
        selected={selectPage}
        pageNumber={4}
        onClickPageChange={clickPageChange}
        selectedCategory={selectedCategoryThree}
        prevSelected={{
          one: selectCategoryOne, 
          two: selectCategoryTwo
        }}
      />
      <FivePage 
        selected={selectPage}
        pageNumber={5}
        onClickPageChange={clickPageChange}
        poemList={poemList}
        prevSelected={{
          one: selectCategoryOne, 
          two: selectCategoryTwo,
          three: selectCategoryThree
      }}
      />
    </main>
  )
}

export default Main;