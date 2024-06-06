  
// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Banner from '../Components/Banner/Banner'



// const Home = () => {

 
//   const navigate = useNavigate ()
  

//   useEffect(() =>{
//     if(!data){
//       navigate('/Banner')
//     }
//   },[])

  
  

//   return (
//     <div>

//    <Link to='/Banner'><Banner/></Link>

     
//     </div>
//   )
// }

// export default Home


// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Banner from '../Components/Banner/Banner'

// const Home = () => {
//   const [data, setData] = useState(null); // Initialize data as null
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!data) {
//       navigate('/Banner');
//     }
//   }, [data, navigate]); // Add data and navigate as dependencies

//   return (
//     <div>
//       <Link to='/Banner'><Banner /></Link>
//       {/* Add the rest of your component logic here */}
//     </div>
//   )
// }

// export default Home;


import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banner from '../Components/Banner/Banner'

const Home = () => {
  const [data, setData] = useState(true); // Mock data for testing
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate('/Banner');
    }
  }, [data, navigate]); // Add data and navigate as dependencies

  return (
    <div>
      <Link to='/Banner'><Banner /></Link>
      {/* Add the rest of your component logic here */}
    </div>
  )
}

export default Home;


