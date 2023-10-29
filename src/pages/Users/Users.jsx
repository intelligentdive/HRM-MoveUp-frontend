
import Oval from '../../assets/projectSummaryImage/Oval.png'
import OvalCopy from '../../assets/projectSummaryImage/Oval Copy.png'
import OvalCopy2 from '../../assets/projectSummaryImage/Oval Copy9.png'
import OvalCopy4 from '../../assets/projectSummaryImage/Oval-4.png'
import OvalCopy5 from '../../assets/projectSummaryImage/Oval-5.png'
import OvalCopy6 from '../../assets/projectSummaryImage/Oval-6.png'
import OvalCopy7 from '../../assets/projectSummaryImage/Oval Copy 8.png'
import { BiSearch } from "react-icons/bi";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import AddUserModal from './AddUserModal'
import { useState } from 'react'


const Users = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="mt-6 w-full mb-10">
            <div className="flex justify-end">
                <a href="#addUser_modal" onClick={() => setIsOpen(true)}><button className="btn bg-[#00E096] hover:bg-[#00E096] text-white">Add User</button></a>
            </div>
            <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
                <div className="flex items-center justify-between mt-3">
                    <h2 className=" ml-3 font-bold">List Users</h2>
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
                                    <th className='text-[#8F9BB3]'>Name</th>
                                    <th className='text-[#8F9BB3]'></th>
                                    <th className='text-[#8F9BB3]'>Create Date</th>
                                    <th className='text-[#8F9BB3]'>Role</th>
                                    <th className='text-[#8F9BB3]'>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className='flex items-center'>
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={OvalCopy7} />
                                            </div>
                                        </div>
                                        <div className='ml-1'>
                                            <h3 className='font-semibold'>David Wagner</h3>
                                            <p className='text-[#8F9BB3]'>david_wagner@example.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn btn-xs bg-[#FF2D55] hover:bg-[#FF2D55] text-white rounded-xl w-[100px]'>Super Admin</button>
                                    </td>
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
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={Oval} />
                                            </div>
                                        </div>
                                        <div className='ml-1'>
                                            <h3 className='font-semibold'>Ina Hogan</h3>
                                            <p className='text-[#8F9BB3]'>windler.warren@runte.net</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn btn-xs bg-[#0095FF] hover:bg-[#0095FF] text-white rounded-xl w-[100px]'>Admin</button>
                                    </td>
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
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={OvalCopy2} />
                                            </div>
                                        </div>
                                        <div className='ml-1'>
                                            <h3 className='font-semibold'>Devin Harmon</h3>
                                            <p className='text-[#8F9BB3]'>wintheiser_enos@yahoo.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn btn-xs bg-[#00E096] hover:bg-[#00E096] text-white rounded-xl w-[100px]'>HR Admin</button>
                                    </td>
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
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={OvalCopy4} />
                                            </div>
                                        </div>
                                        <div className='ml-1'>
                                            <h3 className='font-semibold'>Lena Page</h3>
                                            <p className='text-[#8F9BB3]'>camila_ledner@gmail.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn btn-xs bg-[#EFF4FA] hover:bg-[#8F9BB3] text-[#8F9BB3] rounded-xl w-[100px]'>Employee</button>
                                    </td>
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
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={OvalCopy5} />
                                            </div>
                                        </div>
                                        <div className='ml-1'>
                                            <h3 className='font-semibold'>Eula Horton</h3>
                                            <p className='text-[#8F9BB3]'>edula_dorton1221@gmail.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn btn-xs bg-[#FF2D55] hover:bg-[#FF2D55] text-white rounded-xl w-[100px]'>Super Admin</button>
                                    </td>
                                    <td><p>15 Jun, 2017</p> </td>
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
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={OvalCopy6} />
                                            </div>
                                        </div>
                                        <div className='ml-1'>
                                            <h3 className='font-semibold'>Victoria Perez</h3>
                                            <p className='text-[#8F9BB3]'>terrill.wiza@hotmail.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn btn-xs bg-[#00E096] hover:bg-[#00E096] text-white rounded-xl w-[100px]'>HR Admin</button>
                                    </td>
                                    <td><p>12 Jan, 2019</p> </td>
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
                                        <div className="avatar">
                                            <div className="w-10">
                                                <img src={OvalCopy} />
                                            </div>
                                        </div>
                                        <div className='ml-1'>
                                            <h3 className='font-semibold'>Cora Medina</h3>
                                            <p className='text-[#8F9BB3]'>hagenes.isai@hotmail.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn btn-xs bg-[#EFF4FA] hover:bg-[#8F9BB3] text-[#8F9BB3] rounded-xl w-[100px]'>Employee</button>
                                    </td>
                                    <td><p>21 July, 2020</p> </td>
                                    <td><p>Web Developer</p> </td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

            {
                isOpen &&
                <AddUserModal setIsOpen={setIsOpen}></AddUserModal>
            }

        </div>




    );
};

export default Users;