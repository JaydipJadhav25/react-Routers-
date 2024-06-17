import React from 'react'
import { NavLink } from 'react-router-dom'
// import '/index2.css'




export default function Header() {
  return (
    <div className='header'>
         
             <h2>jay with react-router-dom</h2>
         

             <ul>
                <li>
                    <NavLink to="/"
                       className={({isActive}) =>
                       `${isActive ? "active" : "noactive"}`
                   }
                    >
                    home
                    </NavLink>
               
              </li>
                <li>
                <NavLink to="about"
                   className={({isActive}) =>
                   `${isActive ? "active" : "noactive"}`
               }
                >
                    about
                    </NavLink>
                </li>
                <li>
                <NavLink to="github" 
            //      className={({isActive}) =>
            //      `${isActive ? "text-orange-700" : "text-gray-700"}`
            //  }

            //  className={({isActive}) =>
            //      `${isActive ? style={color: "orange"}: style={color:"gray"}}`
            //  }

                  className={({isActive}) =>
                 `${isActive ? "active" : "noactive"}`
             }

        
                >
                    github
                    </NavLink>
                </li>

           
              </ul>


    
    </div>
  )
}
