import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Home from './Components/Home/Home'
import AboutPage from './Components/About/AboutPage'
import RecipesPage from './Components/Recipes/RecipesPage'
import GalleryPage from './Components/Gallery/GalleryPage'
import ResevationPage from './Components/Reservation/ResevationPage'
import BlogPostPage from './Components/BlogPost/BlogPostPage'
import ContactPage from './Components/Contact/ContactPage'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Footer from './Components/Footer'
import About from './Components/Home/About'

function Layout() {
  return (
    < section className='app-section' >
      <Header></Header>

      <Outlet />
      <Footer />
    </section >
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/recipes",
      element: <RecipesPage />,
    },
    {
      path: "/gallery",
      element: <GalleryPage />,
    },
    {
      path: "/reservation",
      element: <ResevationPage />,
    },
    {
      path: "/blog",
      element: <BlogPostPage />,
    },

    {
      path: "/contact",
      element: <ContactPage />,
    },
    ]
  },
]);


function App() {

  return (
    <RouterProvider router={router} />

  )
}

export default App
