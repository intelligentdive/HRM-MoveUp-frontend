import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import one from '../../assets/allEmployee/Oval Copy 2.png'
import two from '../../assets/allEmployee/Oval Copy 2 (1).png'
import three from '../../assets/allEmployee/Oval Copy 2 (2).png'
import four from '../../assets/allEmployee/Oval Copy 2 (3).png'

const LeaveRequest = () => {
    return (
        <div>
            <div className="grid grid-cols-9 relative mt-[-192px] ml-[120px]">
                <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
            </div>
            <div className="mt-[200px]">
                
            <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">

                                <thead className="bg-[#EFF4FA]">
                                    <tr>
                                        <th className='text-[#8F9BB3] pl-10 font-semibold text-sm'>Name</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Employee ID</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Leave Type</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Date</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Reason</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td className='flex items-center'>
                                            
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={one} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>David Wagner</h3>
                                            </div>
                                        </td>
                                        <td><p>ME-1496</p> </td>
                                        <td><p>Casual Leave</p> </td>
                                        <td><p>24 Otc, 2015 to 26 Otc, 2015</p> </td>
                                        <td><p>Going To Family Function</p> </td>
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
                                                    <img src={two} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Ina Hogan</h3>
                                            </div>
                                        </td>
                                        <td><p>YS-1493</p> </td>
                                        <td><p>Medical Leave</p> </td>
                                        <td><p>17 Feb, 2021 to, 21 Feb, 2021</p> </td>
                                        <td><p>Going To Development</p> </td>
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
                                                    <img src={three} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Devin Harmon</h3>
                                            </div>
                                        </td>
                                        <td><p>OD-1286</p> </td>
                                        <td><p>Casual Leave</p> </td>
                                        <td><p>18 Dec, 2015 to 22 Dec, 2015</p> </td>
                                        <td><p>Going To Birthday Party</p></td>
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
                                                    <img src={four} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Lena Page</h3>
                                            </div>
                                        </td>
                                        <td><p>PD-1267</p> </td>
                                        <td><p>Sick Leave</p> </td>
                                        <td><p>8 Otc, 2016, 14 Otc, 2016</p> </td>
                                        <td><p>Going to Holiday</p> </td>
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


            </div>
        </div>
    );
};

export default LeaveRequest;