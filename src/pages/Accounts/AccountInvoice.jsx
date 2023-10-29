import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDelete } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiPrinterBold } from "react-icons/pi";
import visa from '../../assets/card/visa.png';
import paypall from '../../assets/card/paypal.png';


const AccountInvoice = () => {
    return (
        <div>
            <div className="mb-[45px]">


                <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
                    <div className="flex items-center justify-between mt-3">
                        <h2 className=" ml-3 font-bold">Invoices</h2>
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
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Invoice No</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Clients</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Date</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Type</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Status</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Salary</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>#LA-0234</td>
                                        <td>vPro tec LLC</td>
                                        <td>17 Aug, 2020</td>
                                        <td><img src={visa} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Approve</p>
                                            </div>
                                        </td>
                                        <td>$15,300</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>#SB-1994</td>
                                        <td>BT Technology</td>
                                        <td>08 Oct, 2020</td>
                                        <td><img src={paypall} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Approve</p>
                                            </div>
                                        </td>
                                        <td>$8,400</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>#SB-2371</td>
                                        <td>More Infoweb Pvt</td>
                                        <td>27 Jun, 2020</td>
                                        <td><img src={visa} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#FFB45E] mr-1"></span>
                                                <p>Pending</p>
                                            </div>
                                        </td>
                                        <td>$13,700</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>#LA-0035</td>
                                        <td>RETO Tech LLC</td>
                                        <td>25 Mar, 2020</td>
                                        <td><img src={paypall} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Approve</p>
                                            </div>
                                        </td>
                                        <td>$6,340</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>#LA-0234</td>
                                        <td>ADHSPP Pvt</td>
                                        <td>16 Apr, 2021</td>
                                        <td><img src={visa} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#FFB45E] mr-1"></span>
                                                <p>Pending</p>
                                            </div>
                                        </td>
                                        <td>$9,820</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <MdOutlineForwardToInbox size={20} color='#C5CEE0' className='mr-3'></MdOutlineForwardToInbox>
                                                <PiPrinterBold size={20} color='#C5CEE0' className=''></PiPrinterBold>
                                                <AiOutlineDelete size={20} color='#C5CEE0' className='ml-3'></AiOutlineDelete>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>#SH-9653</td>
                                        <td>SamSML LLC</td>
                                        <td>23 Jul, 2020</td>
                                        <td><img src={visa} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Approve</p>
                                            </div>
                                        </td>
                                        <td>$13,780</td>
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

export default AccountInvoice;