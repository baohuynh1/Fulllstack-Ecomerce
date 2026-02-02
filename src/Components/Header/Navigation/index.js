import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
const Navigation = () => {
    return (
        <nav>
            <div className="container">
              <div className='row'>
                <div className='col-sm-2 navPart1'>
                  <Button className='allCatTab align-items-center'>
                    <span className='icon1 mr-2'><IoMenu></IoMenu></span>
                    <span className='text'> ALL CATEGORIES</span>
                    <span className='icon2 ml-2'><FaAngleDown></FaAngleDown></span>
                  </Button>
                </div>
                <div className='col-sm-10 navPart2 d-flex align-items-center'>
                    <ul className='list list-inline ml-auto'>
                        <li className='list-inline-item'><Link to="/"><Button>Home</Button> </Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Fashion</Button></Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Eclectronic</Button></Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Bakery</Button></Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Grocery</Button></Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Mobiles</Button></Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Mobile</Button></Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
                        <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
                    </ul>

                </div>

              </div>
            </div>
          </nav>
    )
}
export default Navigation