import React from 'react'
import { FaHouseDamage } from "react-icons/fa";
import { BsGrid1X2Fill, BsPeopleFill, BsFillGearFill}from 'react-icons/bs';
 import { AiOutlineInbox } from "react-icons/ai";
 import { GrTransaction } from "react-icons/gr";
 import { FcSalesPerformance } from "react-icons/fc";
 import { IoBookSharp } from "react-icons/io5";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaHouseDamage  className='icon_header'/> Accounting Managment System
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li a className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Ledger Master
                </a>
                
            </li>
            
            <li className='sidebar-list-item'>
                <a href="">
                    <AiOutlineInbox className='icon'/> Entry Module
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <GrTransaction className='icon'/> Transaction Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FcSalesPerformance className='icon'/> Sales Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoBookSharp className='icon'/> Inventory Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            
        </ul>
      
    </aside>
    
  )
}

export default Sidebar