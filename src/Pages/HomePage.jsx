import React from 'react'

import Navbar from '../Components/Navbar/Navbar.jsx'
import Banner from '../Components/Banner/Banner.jsx'
import Sponser from '../Components/Sponser/Sponser.jsx'
import Fetch from '../Components/FetchData/Fetch.jsx'
import Detail from '../Components/Detail/Detail.jsx'
import Resources from '../Components/Resources/Resources.jsx'
// import FetchData from '../Components/FetchData/Fetch.jsx'
const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Sponser/>
   <Fetch/>

   <Detail/>
   <Resources/>
    </div>
  )
}

export default HomePage