import React from 'react'
import DecHeader from '../DecHeader'
import Dishes from '../Home/Dishes'
import About from '../Home/About'

function RecipesPage() {
    let name ="Food Menu"
  return (
      <>
      <DecHeader name={name}/>
      <Dishes/>
      <About/>
      </>
    )
}

export default RecipesPage