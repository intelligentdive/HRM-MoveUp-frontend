
import Oval from '../../assets/projectSummaryImage/Oval.png'
import OvalCopy from '../../assets/projectSummaryImage/Oval Copy.png'
import OvalCopy2 from '../../assets/projectSummaryImage/Oval Copy 2.png'
import OvalCopy4 from '../../assets/projectSummaryImage/Oval-4.png'
import OvalCopy5 from '../../assets/projectSummaryImage/Oval-5.png'
import OvalCopy6 from '../../assets/projectSummaryImage/Oval-6.png'
import OvalCopy7 from '../../assets/projectSummaryImage/Oval-7.png'
import OvalCopy8 from '../../assets/projectSummaryImage/Oval Copy 2 (1).png'
import OvalCopy9 from '../../assets/projectSummaryImage/Oval Copy 8.png'
import OvalCopy10 from '../../assets/projectSummaryImage/Oval Copy9.png'

const ProjectSummary = () => {
    return (
        <div className=" border border-gray-300 rounded-lg bg-white">
            <h2 className="mt-3 ml-3 font-bold">Project Summary</h2>
            <div className="mt-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#EFF4FA]">
                            <tr>
                                <th className='text-[#8F9BB3]'>#</th>
                                <th className='text-[#8F9BB3]'>Client Name</th>
                                <th className='text-[#8F9BB3]'>Team</th>
                                <th className='text-[#8F9BB3]'>Project</th>
                                <th className='text-[#8F9BB3]'>Project Cost</th>
                                <th className='text-[#8F9BB3]'>Payment</th>
                                <th className='text-[#8F9BB3]'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>#A56D24</td>
                                <td> Hilda Wallace</td>
                                <td className='flex items-center'>
                                    <div className="avatar-group -space-x-4">
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={Oval} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span>+2</span>
                                    </div>
                                </td>
                                <td><p>React Admin</p> </td>
                                <td><p>$5,500</p> </td>
                                <td><p>Done</p> </td>
                                <td>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                        <p>Delivered</p>
                                    </div>
                                </td>
                            </tr>

                            {/* row 2 */}
                            <tr>
                                <td>#CC3234</td>
                                <td>Millie Harvey </td>
                                <td className='flex items-center'>
                                    <div className="avatar-group -space-x-4">
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy6} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy7} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td><p>Vuejs Application</p> </td>
                                <td><p>$14,500</p> </td>
                                <td><p>Done</p> </td>
                                <td>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                        <p>Delivered</p>
                                    </div>
                                </td>
                            </tr>

                            {/* row 3 */}
                            <tr>
                                <td>#FA1412</td>
                                <td>Hannah Gibson </td>
                                <td className='flex items-center'>
                                    <div className="avatar-group -space-x-4">
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy4} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy5} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td><p>Wordpress One Page</p> </td>
                                <td><p>$9,000</p> </td>
                                <td><p>Pending</p> </td>
                                <td>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#EB5757] mr-1"></span>
                                        <p>Submit</p>
                                    </div>
                                </td>
                            </tr>

                            {/* row 4 */}
                            <tr>
                                <td>#SD3321</td>
                                <td> Hilda Wallace </td>
                                <td className='flex items-center'>
                                    <div className="avatar-group -space-x-4">
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy8} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy9} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span>+2</span>
                                    </div>
                                </td>
                                <td><p>Angular Admin</p> </td>
                                <td><p>$11,500</p> </td>
                                <td><p>Done</p> </td>
                                <td>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#EB5757] mr-1"></span>
                                        <p>Submit</p>
                                    </div>
                                </td>
                            </tr>

                            {/* row 5 */}
                            <tr>
                                <td>#GG1354</td>
                                <td> Gregory Reyes </td>
                                <td className='flex items-center'>
                                    <div className="avatar-group -space-x-4">
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy2} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy4} />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={OvalCopy10} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span>+1</span>
                                    </div>
                                </td>
                                <td><p>One page html Admin</p> </td>
                                <td><p>$400</p> </td>
                                <td><p>Pending</p> </td>
                                <td>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#0095FF] mr-1"></span>
                                        <p>Delivered</p>
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

export default ProjectSummary;