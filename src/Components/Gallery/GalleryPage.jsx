import React from 'react'
import DecHeader from '../DecHeader';
import OurGallery from './OurGallery';
import CheckOut from './CheckOut';

function GalleryPage() {
let name = "Our Gallery";
  return (
    <>
    <DecHeader name={name}/>
    <OurGallery/>
    <CheckOut/>

    </>
  )
}

export default GalleryPage