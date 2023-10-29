import { BiSearch } from "react-icons/bi"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";


const TableDepartmentPage = () => {
    return (
        <div className=" border border-gray-100 rounded-lg bg-white mt-[25px]">
            <div className="flex items-center justify-between mt-3">
                <h2 className="ml-3 font-bold text-[17px]">Departments</h2>
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
                                <th className='text-[#8F9BB3]'>#</th>
                                <th className='text-[#8F9BB3]'>Department Name</th>
                                <th className='text-[#8F9BB3]'>Department Head</th>
                                <th className='text-[#8F9BB3]'>Total Employee</th>
                                <th className='text-[#8F9BB3]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>01</td>
                                <td>Web Development</td>
                                <td>Cora Medina</td>
                                <td>102</td>
                                <td>
                                    <div className='flex items-center'>
                                        <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                        <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>02</td>
                                <td>Marketing</td>
                                <td>Victoria Perez</td>
                                <td>45</td>
                                <td>
                                    <div className='flex items-center'>
                                        <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                        <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>03</td>
                                <td>App Development</td>
                                <td>Devin Harmon</td>
                                <td>56</td>
                                <td>
                                    <div className='flex items-center'>
                                        <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                        <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>04</td>
                                <td>Support</td>
                                <td>Ina Hogan</td>
                                <td>11</td>
                                <td>
                                    <div className='flex items-center'>
                                        <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                        <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>05</td>
                                <td>Acounts</td>
                                <td>Rena Paul</td>
                                <td>34</td>
                                <td>
                                    <div className='flex items-center'>
                                        <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                        <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>06</td>
                                <td>PHP Open Source</td>
                                <td>Roger Jensen</td>
                                <td>23</td>
                                <td>
                                    <div className='flex items-center'>
                                        <AiOutlineEdit size={20} color='#C5CEE0' className='mr-1'></AiOutlineEdit>
                                        <AiOutlineDelete size={20} color='#C5CEE0' className='ml-2'></AiOutlineDelete>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>07</td>
                                <td>Design And Printing</td>
                                <td>Alice Moody</td>
                                <td>38</td>
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
    );
};

export default TableDepartmentPage;