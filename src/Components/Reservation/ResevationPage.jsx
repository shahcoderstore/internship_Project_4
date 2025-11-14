import React from 'react'
import DecHeader from '../DecHeader'
import ResevationSeater from './ResevationSeater'

function ResevationPage() {
  let name = "Reservation"
  return (
    <>
    <DecHeader name={name}/>
    <ResevationSeater/>
    </>
  )
}

export default ResevationPage