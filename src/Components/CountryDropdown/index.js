import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Slide from '@mui/material/Slide';
import React from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  
  
  return <Slide direction="up" ref={ref} {...props} />;
})

const CountryDropdown=() => {
    const [isOpenModal, setIsOpenModal]=useState(false);
    
  return (
    <>
    <Button className='countryDrop' onClick={()=>setIsOpenModal(true)}>
                  <div className='info d-flex flex-column'>
                    <span className='lable' >Your Location</span>
                    <span className='name'>VietNam</span>
                  </div>
                    <span className='ml-auto'  ><FaAngleDown></FaAngleDown></span>
                  </Button>

                  <Dialog  open={isOpenModal} onClose={()=>setIsOpenModal(false)} className='locationModal'slots={{transition: Transition,}}>
                    <h4 className='mb-0'>Choose your Delivery location</h4>
                    <p>Enter your address and we will specify the offer for your arena</p>
                    <Button className='close_' onClick={()=>setIsOpenModal(false)}><IoIosCloseCircleOutline />

                    </Button>
                    <div className='headerSearch w-100'>
                  <input type="text"  placeholder='Search your arena'/>
                  <Button><IoSearch></IoSearch></Button>
                    </div>
                    <ul className='countryList mt-3'>
                      <li><Button onClick={()=>setIsOpenModal(false)}>VietNam</Button></li>
                      <li><Button onClick={()=>setIsOpenModal(false)}>Japan</Button></li>
                      <li><Button onClick={()=>setIsOpenModal(false)}>Bangladesh</Button></li>
                      <li><Button onClick={()=>setIsOpenModal(false)}>Bangladesh</Button></li>
                      <li><Button onClick={()=>setIsOpenModal(false)}> Bangladesh</Button></li>
                        <li><Button onClick={()=>setIsOpenModal(false)}>VietNam</Button></li>
                      <li><Button onClick={()=>setIsOpenModal(false)}>Japan</Button></li>
                      <li><Button onClick={()=>setIsOpenModal(false)}>Bangladesh</Button></li>
                      <li><Button onClick={()=>setIsOpenModal(false)}>Bangladesh</Button></li>
                      <li><Button onClick={()=>setIsOpenModal(false)}> Bangladesh</Button></li>

                    </ul>
      
    </Dialog>
    </>
    )
}
export default CountryDropdown;