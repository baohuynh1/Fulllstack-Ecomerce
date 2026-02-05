import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { useState } from 'react';

const Navigation = () => {
  const [isopenSidebarVal,setisopenSidebarVal]=useState(false);
    return (
        <nav>
            <div className="container">
              <div className='row'>
                <div className='col-sm-2 navPart1'>
                  <div className='catWrapper'>
                    <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                    <span className='icon1 mr-2'><IoMenu></IoMenu></span>
                    <span className='text'> ALL CATEGORIES</span>
                    <span className='icon2 ml-2'><FaAngleDown></FaAngleDown></span>
                  </Button>
                  <div className={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                  <ul>
                     
                                <li><Link to="/"><Button>men</Button></Link></li>
                                <li><Link to="/"><Button>women</Button></Link></li>
                                <li><Link to="/"><Button>beauty</Button></Link></li>
                                <li><Link to="/"><Button>watches</Button></Link></li>
                                <li><Link to="/"><Button>kids</Button></Link></li>
                                <li><Link to="/"><Button>gift</Button></Link></li>
                  </ul>
                  </div>
                  </div>
                </div>
                <div className='col-sm-10 navPart2 d-flex align-items-center'>
                    <ul className='list list-inline ml-auto'>
                        <li className='list-inline-item'>
                          <Link to="/"><Button>Home</Button></Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>men</Button></Link>
                         <div className='submenu shadow'>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                              
                                
                              </div>
                        </li>
                        <li className='list-inline-item'><Link to="/"><Button>women</Button></Link>
                        <div className='submenu shadow'>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                              
                                
                              </div>
                        </li>
                        <li className='list-inline-item'><Link to="/"><Button>beauty</Button></Link>
                        <div className='submenu shadow'>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                              
                                
                              </div>
                        </li>
                        <li className='list-inline-item'><Link to="/"><Button>watches</Button></Link>
                        <div className='submenu shadow'>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                              
                                
                              </div>
                        </li>
                        <li className='list-inline-item'><Link to="/"><Button>kids</Button></Link>
                        <div className='submenu shadow'>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                              
                                
                              </div>
                        </li>
                        <li className='list-inline-item'><Link to="/"><Button>gift</Button></Link>
                        <div className='submenu shadow'>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                              
                                
                              </div>
                        </li>
                        <li className='list-inline-item'><Link to="/"><Button>Blog</Button>
                        <div className='submenu shadow'>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                              
                                
                              </div>
                        </Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link>
                        <div className='submenu shadow'>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                                <Link to="/"><Button>clothing</Button></Link>
                                <Link to="/"><Button>footwear</Button></Link>
                                <Link to="/"><Button>watches</Button></Link>
                              
                                
                              </div>
                        </li>
                    </ul>

                </div>

              </div>
            </div>
          </nav>
    )
}
export default Navigation