import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import visa from '../../assets/card/visa.png';
import paypall from '../../assets/card/paypal.png';
import one from '../../assets/Department/Oval Copy 2.png'
import two from '../../assets/Department/Oval Copy 2 (1).png'
import three from '../../assets/Department/Oval Copy 2 (2).png'
import four from '../../assets/Department/Oval Copy 2 (3).png'
import five from '../../assets/Department/Oval Copy 2 (4).png'
import six from '../../assets/Department/Oval Copy 6.png'
import seven from '../../assets/Department/Oval Copy 2 (7).png'
import eight from '../../assets/Department/Oval Copy 2 (8).png'


const AccountPayment = () => {
    return (
        <div>
            <div className="mb-[45px]">


                <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead className="bg-[#EFF4FA]">
                                <tr>
                                    <th className='text-[#8F9BB3] font-semibold text-sm'>ID</th>
                                    <th className='text-[#8F9BB3] font-semibold text-sm'>Client Name</th>
                                    <th className='text-[#8F9BB3] font-semibold text-sm'>Project Name</th>
                                    <th className='text-[#8F9BB3] font-semibold text-sm'>Date</th>
                                    <th className='text-[#8F9BB3] font-semibold text-sm'>Type</th>
                                    <th className='text-[#8F9BB3] font-semibold text-sm'>Amount</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>LA-0234</td>
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
                                        <td>vPro tec LLC</td>
                                    <td>17 Aug, 2020</td>
                                    <td><img src={visa} alt="" /></td>
                                    <td>$15,300</td>
                                </tr>

                                <tr>
                                    <td>SB-1994</td>
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
                                    <td>BT Technology</td>
                                    <td>08 Oct, 2020</td>
                                    <td><img src={paypall} alt="" /></td>
                                    <td>$8,400</td>
                                </tr>

                                <tr>
                                    <td>SB-2371</td>
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
                                        <td>More Infoweb Pvt</td>
                                    <td>27 Jun, 2020</td>
                                    <td><img src={visa} alt="" /></td>
                                    <td>$13,700</td>
                                </tr>

                                <tr>
                                    <td>LA-0035</td>
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
                                        <td>RETO Tech LLC</td>
                                    <td>25 Mar, 2020</td>
                                    <td><img src={paypall} alt="" /></td>
                                    <td>$6,340</td>
                                </tr>

                                <tr>
                                    <td>LA-0234</td>
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
                                        <td>ADHSPP Pvt</td>
                                    <td>16 Apr, 2021</td>
                                    <td><img src={visa} alt="" /></td>
                                    <td>$9,820</td>
                                </tr>

                                <tr>
                                    <td>SH-9653</td>
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
                                        <td>SamSML LLC</td>
                                    <td>23 Jul, 2020</td>
                                    <td><img src={visa} alt="" /></td>
                                    <td>$13,780</td>
                                </tr>

                                <tr>
                                    <td>KF-4635</td>
                                    <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={seven} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Anna Jonson</h3>
                                                <p className='text-[#8F9BB3]'>hagenes.isai@hotmail.com</p>
                                            </div>
                                        </td>
                                        <td>Midland Hard</td>
                                    <td>17 May, 2022</td>
                                    <td><img src={paypall} alt="" /></td>
                                    <td>$6,430</td>
                                </tr>

                                <tr>
                                    <td>LV-7614</td>
                                    <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={eight} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Roger Jensen</h3>
                                                <p className='text-[#8F9BB3]'>maia_denesik@yahoo.com</p>
                                            </div>
                                        </td>
                                        <td>Kashfull LLC</td>
                                    <td>12 Oct, 2020</td>
                                    <td><img src={paypall} alt="" /></td>
                                    <td>$4,650</td>
                                </tr>

                                <tr>
                                    <td>SC-4832</td>
                                    <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={four} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Lucy Fox</h3>
                                                <p className='text-[#8F9BB3]'>hagenes.isai@hotmail.com</p>
                                            </div>
                                        </td>
                                        <td>Rooftop MCS</td>
                                    <td>7 Dec, 2020</td>
                                    <td><img src={visa} alt="" /></td>
                                    <td>$14,930</td>
                                </tr>

                                <tr>
                                    <td>FR-1476</td>
                                    <td className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-10">
                                                    <img src={two} />
                                                </div>
                                            </div>
                                            <div className='ml-1'>
                                                <h3 className='font-semibold'>Devin Harmon</h3>
                                                <p className='text-[#8F9BB3]'>grant_fermin@bailey.biz</p>
                                            </div>
                                        </td>
                                        <td>FoodFanda LMD</td>
                                    <td>18 Jan, 2021</td>
                                    <td><img src={visa} alt="" /></td>
                                    <td>$10,346</td>
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
    );
};

export default AccountPayment;