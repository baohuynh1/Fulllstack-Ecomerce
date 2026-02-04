import Button from '@mui/material/Button';
import { use, useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Slide from '@mui/material/Slide';
import React from 'react';
import { useContext } from 'react';
import { Mycontext } from '../../App';
import Select from '@mui/material/Select';


const Transition = React.forwardRef(function Transition(props, ref) {
  
  
  return <Slide direction="up" ref={ref} {...props} />;
})

const CountryDropdown=() => {
    const [isOpenModal, setIsOpenModal]=useState(false);
    const [selectedTab, setSelectedTab]=useState(null);
    const[countryList, setCountryList]=useState([]);
    
    const context = useContext(Mycontext);
    const selectCountry=(index, country)=>{
      setSelectedTab(index);
      setIsOpenModal(false);
      context.setselectedCountry(country);

    }
    useEffect(()=>{
      setCountryList(context.countryList);
    },[])
    const fillerList=(e)=>{
      const keyword=e.target.value.toLowerCase();
      if(keyword!==""){
        const list= countryList.filter((item)=>{
          return item.country.toLowerCase().includes(keyword);
      
      
    });
    setCountryList(list);
  }else{
    selectCountry(context.countryList);
  }
    
    }

  return (
    <>
    <Button className='countryDrop' onClick={()=>setIsOpenModal(true)}>
                  <div className='info d-flex flex-column'>
                    <span className='lable' >Your Location</span>
                    <span className='name'>{context.selectedCountry!=="" ? context.selectedCountry?.length>10 ? context.selectedCountry?.substr(0,10)+'...' :context.selectedCountry : 'Select loaction'}</span>
                  </div>
                    <span className='ml-auto'  ><FaAngleDown></FaAngleDown></span>
                  </Button>

                  <Dialog  open={isOpenModal} onClose={()=>setIsOpenModal(false)} className='locationModal'slots={{transition: Transition,}}>
                    <h4 className='mb-0'>Choose your Delivery location</h4>
                    <p>Enter your address and we will specify the offer for your arena</p>
                    <Button className='close_' onClick={()=>setIsOpenModal(false)}><IoIosCloseCircleOutline />

                    </Button>
                    <div className='headerSearch w-100'>
                  <input type="text"  placeholder='Search your arena' onChange={fillerList}/>
                  <Button><IoSearch></IoSearch></Button>
                    </div>
                    <ul className='countryList mt-3'>
                      { context.countryList?.length!==0 && context.countryList?.map((item,index)=>{
                          return(
                            <li key={index}><Button onClick={()=>selectCountry(index,item.country)}
                            className={`${selectedTab === index ? 'active': ''}`}
                            >{item.country}</Button></li>
                          )
                        })
                          }
                      

                    </ul>
      
    </Dialog>
    </>
    )
}
export default CountryDropdown;