import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDelete } from "react-icons/ai";
import {MdOutlineForwardToInbox} from 'react-icons/md';
import {PiPrinterBold} from 'react-icons/pi';
import { BiSearch } from "react-icons/bi";
import one from '../../assets/allEmployee/Oval Copy 2.png'
import two from '../../assets/allEmployee/Oval Copy 2 (1).png'
import three from '../../assets/allEmployee/Oval Copy 2 (2).png'
import four from '../../assets/allEmployee/Oval Copy 2 (3).png'
import five from '../../assets/allEmployee/Oval Copy 2 (4).png'
import six from '../../assets/allEmployee/Oval Copy 6.png'


const PayrollEmployee = () => {
    return (
        <div>
            <div className="mb-[45px]">


                <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
                    <div className="flex items-center justify-between mt-3">
                        <h2 className=" ml-3 font-bold">Department</h2>
                        <div className="hidden lg:flex items-center gap-2 w-[305px] p-[5px] rounded-lg border mr-3 ">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-none w-full outline-none dark:text-text"
                            />
                            <BiSearch className="text-text" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="overflow-x-auto">
                            <table className="table">

                                <thead className="bg-[#EFF4FA]">
                                    <tr>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>#</th>
                                        <th className='text-[#8F9BB3] pl-10 font-semibold text-sm'>Employee</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Role</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Salery</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Status</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>01</td>
                                        <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={one} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>David Wagner</h3>
                                                <p className='text-[#8F9BB3]'>david_wagner@example.com</p>
                                            </div>
                                        </td>
                                        <td><p>CEO and Founder</p> </td>
                                        <td><p>$15,000</p> </td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Done</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>02</td>
                                        <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={two} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Ina Hogan</h3>
                                                <p className='text-[#8F9BB3]'>windler.warren@runte.net</p>
                                            </div>
                                        </td>
                                        <td><p>Team Lead</p> </td>
                                        <td><p>$12,300</p> </td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Done</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>03</td>
                                        <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={three} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Devin Harmon</h3>
                                                <p className='text-[#8F9BB3]'>wintheiser_enos@yahoo.com</p>
                                            </div>
                                        </td>
                                        <td><p>HR</p> </td>
                                        <td><p>$670</p> </td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#FFB45E] mr-1"></span>
                                                <p>Pending</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>04</td>
                                        <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={four} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Lena Page</h3>
                                                <p className='text-[#8F9BB3]'>camila_ledner@gmail.com</p>
                                            </div>
                                        </td>
                                        <td><p>App Designer</p> </td>
                                        <td><p>$2,100</p> </td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Done</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>05</td>
                                        <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={five} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Eula Horton</h3>
                                                <p className='text-[#8F9BB3]'>edula_dorton1221@gmail.com</p>
                                            </div>
                                        </td>
                                        <td><p>Web Developer</p> </td>
                                        <td><p>$1,560</p> </td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#FFB45E] mr-1"></span>
                                                <p>Pending</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>06</td>
                                        <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={six} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Victoria Perez</h3>
                                                <p className='text-[#8F9BB3]'>terrill.wiza@hotmail.com</p>
                                            </div>
                                        </td>
                                        <td><p>App Developer</p> </td>
                                        <td><p>3,470</p> </td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Done</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>
                            <hr />


                            <div className="flex items-center justify-between mx-3 my-3">
                                <div>
                                    <button className="text-[#C5CEE0] flex items-center gap-2"><AiOutlineArrowLeft size={20}></AiOutlineArrowLeft>Prev</button>
                                </div>
                                <div>
                                    <button className="mr-3">1</button>
                                    <button className="text-[#C5CEE0]">2</button>
                                </div>
                                <div>
                                    <button className="text-[#C5CEE0] flex items-center gap-2">Next <AiOutlineArrowRight size={20}></AiOutlineArrowRight></button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PayrollEmployee;