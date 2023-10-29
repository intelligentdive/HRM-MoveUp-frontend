import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";


const Holidays = () => {
    return (
        <div className="mt-6 w-full mb-10">
            <div className="flex items-center justify-end">
                <a href="#"><button className="btn bg-[#00E096] hover:bg-[#00E096] text-white">Add Holidays</button></a>
            </div>
            <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead className="bg-[#EFF4FA]">
                                <tr>
                                    <th className='text-[#8F9BB3] text-sm'>Day</th>
                                    <th className='text-[#8F9BB3] text-sm'>date</th>
                                    <th className='text-[#8F9BB3] text-sm'>Reason</th>
                                    <th className='text-[#8F9BB3] text-sm'>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>Sunday</td>
                                    <td>Jan 01, 2020</td>
                                    <td>Sobe Kadar</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Tuesday</td>
                                    <td>Jan 14, 2020</td>
                                    <td>Eid-Ul-Fitar</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Saturday</td>
                                    <td>Jan 26, 2020</td>
                                    <td>Republic Day</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Friday</td>
                                    <td>Maha Shivaratri</td>
                                    <td>Mar 04, 2020</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Thursday</td>
                                    <td>Mar 21, 2020</td>
                                    <td>Holi</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Wednesday</td>
                                    <td>Jun 05, 2020</td>
                                    <td>Eid Ul Azha</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Friday</td>
                                    <td>Apr 19, 2020</td>
                                    <td>Good Friday</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Thrusday</td>
                                    <td>Aug 15, 2020</td>
                                    <td>Independent Day</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Wednesday</td>
                                    <td>Oct 02, 2021</td>
                                    <td>Mathatma Gandhi Jayanti</td>
                                    <td>
                                        <div className='flex items-center'>
                                            <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                            <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Monday</td>
                                    <td>Dec 25, 2022</td>
                                    <td>Christmas</td>
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
                                <button className="ml-3">3</button>
                            </div>
                            <div>
                                <button className="text-[#C5CEE0] flex items-center gap-2">Next <AiOutlineArrowRight size={20}></AiOutlineArrowRight></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Holidays;