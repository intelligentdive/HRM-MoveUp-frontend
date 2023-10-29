import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import one from '../../assets/allEmployee/Oval Copy 2.png'
import two from '../../assets/allEmployee/Oval Copy 2 (1).png'
import three from '../../assets/allEmployee/Oval Copy 2 (2).png'
import four from '../../assets/allEmployee/Oval Copy 2 (3).png'
import five from '../../assets/allEmployee/Oval Copy 2 (4).png'
import six from '../../assets/allEmployee/Oval Copy 6.png'

import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';


const AllEmployee = () => {
    return (
        <div>
            <div className="grid grid-cols-11 gap-10 relative mt-[-192px]">
                <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
            </div>
            <div className="mt-[210px]">


                <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
                    <div className="flex items-center justify-between mt-3">
                        <h2 className=" ml-3 font-bold">Employee List</h2>
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
                                        <th className='text-[#8F9BB3] pl-10 font-semibold text-sm'>Name</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Employee ID</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Phone</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Join Date</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Role</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td className='flex items-center'>
                                            <input type="checkbox" className="checkbox-sm checkbox checkbox-primary mr-5 border border-gray-300" />
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
                                        <td><p>ME-1496</p> </td>
                                        <td><p>+223-459-7564</p> </td>
                                        <td><p>24 Otc, 2015</p> </td>
                                        <td><p>CEO and Founder</p> </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='flex items-center'>
                                            <input type="checkbox" className="checkbox-sm checkbox checkbox-primary mr-5 border border-gray-300" />
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
                                        <td><p>YS-1493</p> </td>
                                        <td><p>+223-256-4569</p> </td>
                                        <td><p>17 Feb, 2021</p> </td>
                                        <td><p>Team Lead</p> </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='flex items-center'>
                                            <input type="checkbox" className="checkbox-sm checkbox checkbox-primary mr-5 border border-gray-300" />
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
                                        <td><p>OD-1286</p> </td>
                                        <td><p>+223-156-4598</p> </td>
                                        <td><p>18 Dec, 2015</p> </td>
                                        <td><p>HR</p> </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='flex items-center'>
                                            <input type="checkbox" className="checkbox-sm checkbox checkbox-primary mr-5 border border-gray-300" />
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
                                        <td><p>PD-1267</p> </td>
                                        <td><p>+223-469-7532</p> </td>
                                        <td><p>8 Otc, 2016</p> </td>
                                        <td><p>App Designer</p> </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='flex items-center'>
                                            <input type="checkbox" className="checkbox-sm checkbox checkbox-primary mr-5 border border-gray-300" />
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
                                        <td><p>EG-1236</p> </td>
                                        <td><p>+223-246-4965</p> </td>
                                        <td><p>15 Jun, 2017</p> </td>
                                        <td><p>Web Developer</p> </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='flex items-center'>
                                            <input type="checkbox" className="checkbox-sm checkbox checkbox-primary mr-5 border border-gray-300" />
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
                                        <td><p>LA-2463</p> </td>
                                        <td><p>+223-458-9672</p> </td>
                                        <td><p>12 Jan, 2019</p> </td>
                                        <td><p>App Developer</p> </td>
                                        <td>
                                            <div className='flex items-center'>
                                                <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
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

export default AllEmployee;