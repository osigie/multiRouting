import {Link} from 'react-router-dom'
import classes from "./Mainheader.module.css"
import React from 'react'

const MainHeader = () => {
  return (
    <heaeder>
      <nav>
        <ul>
          <li>
              <Link to ="/welcome" > welcome</Link>
          </li>
          <li>
<Link to ="/products"> Products</Link>
          </li>
   
        </ul>
      </nav>
    </heaeder>
  );
}

export default MainHeader