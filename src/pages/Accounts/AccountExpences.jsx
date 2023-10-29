
import visa from '../../assets/card/visa.png';
import paypall from '../../assets/card/paypal.png';


const AccountExpences = () => {
    return (
        <div>
            <div className="mb-[45px]">


                <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
                        <div className="overflow-x-auto">
                            <table className="table">

                                <thead className="bg-[#EFF4FA]">
                                    <tr>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Item</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Order By</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>From</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Date</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Paid By</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Status</th>
                                        <th className='text-[#8F9BB3] font-semibold text-sm'>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>HP Laptop</td>
                                        <td>Anna Jonson</td>
                                        <td>Paytem</td>
                                        <td>17 Aug, 2020</td>
                                        <td><img src={visa} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Approve</p>
                                            </div>
                                        </td>
                                        <td>$15,300</td>
                                    </tr>

                                    <tr>
                                        <td>IMAC Desktop</td>
                                        <td>Eula Horton</td>
                                        <td>Ebay USA</td>
                                        <td>08 Oct, 2020</td>
                                        <td><img src={paypall} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Approve</p>
                                            </div>
                                        </td>
                                        <td>$8,400</td>
                                    </tr>

                                    <tr>
                                        <td>Logitech USB Mouse, Keyboard</td>
                                        <td>Lena Page</td>
                                        <td>Amazon</td>
                                        <td>27 Jun, 2020</td>
                                        <td><img src={visa} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#FFB45E] mr-1"></span>
                                                <p>Pending</p>
                                            </div>
                                        </td>
                                        <td>$13,700</td>
                                    </tr>

                                    <tr>
                                        <td>Macbook Pro 2020</td>
                                        <td>Devin Harmon</td>
                                        <td>Paytem</td>
                                        <td>25 Mar, 2020</td>
                                        <td><img src={paypall} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Approve</p>
                                            </div>
                                        </td>
                                        <td>$6,340</td>
                                    </tr>

                                    <tr>
                                        <td>Macbook Air 2017</td>
                                        <td>David Wagner</td>
                                        <td>Amazon</td>
                                        <td>16 Apr, 2021</td>
                                        <td><img src={visa} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#FFB45E] mr-1"></span>
                                                <p>Pending</p>
                                            </div>
                                        </td>
                                        <td>$9,820</td>
                                    </tr>

                                    <tr>
                                        <td>Dell Monitor 32 inch</td>
                                        <td>Ina Hogan</td>
                                        <td>Ebay USA</td>
                                        <td>23 Jul, 2020</td>
                                        <td><img src={visa} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                                <p>Approve</p>
                                            </div>
                                        </td>
                                        <td>$13,780</td>
                                    </tr>

                                    <tr>
                                        <td>Magic Mouse 2</td>
                                        <td>Cora Medina</td>
                                        <td>Amazon</td>
                                        <td>23 Jul, 2020</td>
                                        <td><img src={paypall} alt="" /></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#FFB45E] mr-1"></span>
                                                <p>Pending</p>
                                            </div>
                                        </td>
                                        <td>$13,780</td>
                                    </tr>

                                </tbody>

                            </table>


                        </div>
                </div>


            </div>
        </div>
    );
};

export default AccountExpences;