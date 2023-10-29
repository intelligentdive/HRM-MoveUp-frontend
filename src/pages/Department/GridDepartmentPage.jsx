import { BiSearch } from "react-icons/bi";
import one from '../../assets/Department/Oval Copy 2.png'
import two from '../../assets/Department/Oval Copy 2 (1).png'
import three from '../../assets/Department/Oval Copy 2 (2).png'
import four from '../../assets/Department/Oval Copy 2 (3).png'
import five from '../../assets/Department/Oval Copy 6.png'
import six from '../../assets/Department/Oval Copy 2 (4).png'
import seven from '../../assets/Department/Oval Copy 2 (7).png'
import eight from '../../assets/Department/Oval Copy 2 (8).png'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";


const GridDepartmentPage = () => {
    return (
        <div className="mt-[25px]">

            <div className="flex items-center justify-between mt-3 border border-gray-100 p-3 bg-white rounded-lg">
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

            <div className="mt-4 grid grid-cols-4 gap-4 mb-10">

                <div className="card bg-white border border-gray-100">
                    <figure><img src={one} alt="Shoes" className="w-[75px] mt-[15px]" /></figure>
                    <h2 className="text-center font-bold mt-[15px]">Alice Moody</h2>
                    <p className="text-[#8F9BB3] text-center mt-[4px]">Web Development</p>
                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='mr-1 bg-[#0095FF] rounded-md p-1'><AiOutlineEdit size={25} color='#FFFFFF'></AiOutlineEdit></button>
                        <button className=' bg-[#EFF4FA] rounded-md p-1'><AiOutlineDelete size={25} color='#C5CEE0'></AiOutlineDelete></button>
                    </div>
                    <hr />
                    <div className="flex items-center justify-evenly my-5">
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">105</h3>
                            <p className="text-[#8F9BB3]">Employee</p>
                        </div>
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">$3,100</h3>
                            <p className="text-[#8F9BB3]">Earnings</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white border border-gray-100">
                    <figure><img src={two} alt="Shoes" className="w-[75px] mt-[15px]" /></figure>
                    <h2 className="text-center font-bold mt-[15px]">Cora Medina</h2>
                    <p className="text-[#8F9BB3] text-center mt-[4px]">App Development</p>
                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='mr-1 bg-[#0095FF] rounded-md p-1'><AiOutlineEdit size={25} color='#FFFFFF'></AiOutlineEdit></button>
                        <button className=' bg-[#EFF4FA] rounded-md p-1'><AiOutlineDelete size={25} color='#C5CEE0'></AiOutlineDelete></button>
                    </div>
                    <hr />
                    <div className="flex items-center justify-evenly my-5">
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">75</h3>
                            <p className="text-[#8F9BB3]">Employee</p>
                        </div>
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">$2,750</h3>
                            <p className="text-[#8F9BB3]">Earnings</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white border border-gray-100">
                    <figure><img src={seven} alt="Shoes" className="w-[75px] mt-[15px]" /></figure>
                    <h2 className="text-center font-bold mt-[15px]">Victoria Perez</h2>
                    <p className="text-[#8F9BB3] text-center mt-[4px]">Android Development</p>
                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='mr-1 bg-[#0095FF] rounded-md p-1'><AiOutlineEdit size={25} color='#FFFFFF'></AiOutlineEdit></button>
                        <button className=' bg-[#EFF4FA] rounded-md p-1'><AiOutlineDelete size={25} color='#C5CEE0'></AiOutlineDelete></button>
                    </div>
                    <hr />
                    <div className="flex items-center justify-evenly my-5">
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">45</h3>
                            <p className="text-[#8F9BB3]">Employee</p>
                        </div>
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">$1,320</h3>
                            <p className="text-[#8F9BB3]">Earnings</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white border border-gray-100">
                    <figure><img src={four} alt="Shoes" className="w-[75px] mt-[15px]" /></figure>
                    <h2 className="text-center font-bold mt-[15px]">Devin Harmon</h2>
                    <p className="text-[#8F9BB3] text-center mt-[4px]">Mac Book Development</p>
                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='mr-1 bg-[#0095FF] rounded-md p-1'><AiOutlineEdit size={25} color='#FFFFFF'></AiOutlineEdit></button>
                        <button className=' bg-[#EFF4FA] rounded-md p-1'><AiOutlineDelete size={25} color='#C5CEE0'></AiOutlineDelete></button>
                    </div>
                    <hr />
                    <div className="flex items-center justify-evenly my-5">
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">165</h3>
                            <p className="text-[#8F9BB3]">Employee</p>
                        </div>
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">$4,750</h3>
                            <p className="text-[#8F9BB3]">Earnings</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white border border-gray-100">
                    <figure><img src={five} alt="Shoes" className="w-[75px] mt-[15px]" /></figure>
                    <h2 className="text-center font-bold mt-[15px]">Ina Hogan</h2>
                    <p className="text-[#8F9BB3] text-center mt-[4px]">Mechine Learning</p>
                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='mr-1 bg-[#0095FF] rounded-md p-1'><AiOutlineEdit size={25} color='#FFFFFF'></AiOutlineEdit></button>
                        <button className=' bg-[#EFF4FA] rounded-md p-1'><AiOutlineDelete size={25} color='#C5CEE0'></AiOutlineDelete></button>
                    </div>
                    <hr />
                    <div className="flex items-center justify-evenly my-5">
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">185</h3>
                            <p className="text-[#8F9BB3]">Employee</p>
                        </div>
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">$1,630</h3>
                            <p className="text-[#8F9BB3]">Earnings</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white border border-gray-100">
                    <figure><img src={six} alt="Shoes" className="w-[75px] mt-[15px]" /></figure>
                    <h2 className="text-center font-bold mt-[15px]">Roger Jensen</h2>
                    <p className="text-[#8F9BB3] text-center mt-[4px]">Artificial Intelligent</p>
                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='mr-1 bg-[#0095FF] rounded-md p-1'><AiOutlineEdit size={25} color='#FFFFFF'></AiOutlineEdit></button>
                        <button className=' bg-[#EFF4FA] rounded-md p-1'><AiOutlineDelete size={25} color='#C5CEE0'></AiOutlineDelete></button>
                    </div>
                    <hr />
                    <div className="flex items-center justify-evenly my-5">
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">143</h3>
                            <p className="text-[#8F9BB3]">Employee</p>
                        </div>
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">$7,380</h3>
                            <p className="text-[#8F9BB3]">Earnings</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white border border-gray-100">
                    <figure><img src={three} alt="Shoes" className="w-[75px] mt-[15px]" /></figure>
                    <h2 className="text-center font-bold mt-[15px]">Devin Harmon</h2>
                    <p className="text-[#8F9BB3] text-center mt-[4px]">Marketing</p>
                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='mr-1 bg-[#0095FF] rounded-md p-1'><AiOutlineEdit size={25} color='#FFFFFF'></AiOutlineEdit></button>
                        <button className=' bg-[#EFF4FA] rounded-md p-1'><AiOutlineDelete size={25} color='#C5CEE0'></AiOutlineDelete></button>
                    </div>
                    <hr />
                    <div className="flex items-center justify-evenly my-5">
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">120</h3>
                            <p className="text-[#8F9BB3]">Employee</p>
                        </div>
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">$1,380</h3>
                            <p className="text-[#8F9BB3]">Earnings</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white border border-gray-100">
                    <figure><img src={eight} alt="Shoes" className="w-[75px] mt-[15px]" /></figure>
                    <h2 className="text-center font-bold mt-[15px]">Rena Paul</h2>
                    <p className="text-[#8F9BB3] text-center mt-[4px]">Acounts</p>
                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='mr-1 bg-[#0095FF] rounded-md p-1'><AiOutlineEdit size={25} color='#FFFFFF'></AiOutlineEdit></button>
                        <button className=' bg-[#EFF4FA] rounded-md p-1'><AiOutlineDelete size={25} color='#C5CEE0'></AiOutlineDelete></button>
                    </div>
                    <hr />
                    <div className="flex items-center justify-evenly my-5">
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">135</h3>
                            <p className="text-[#8F9BB3]">Employee</p>
                        </div>
                        <div>
                            <h3 className="text-center font-bold mt-[15px]">$2,420</h3>
                            <p className="text-[#8F9BB3]">Earnings</p>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default GridDepartmentPage;