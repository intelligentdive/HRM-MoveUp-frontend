import { useState } from "react";
import { AiOutlineVerticalAlignBottom, AiOutlineVerticalAlignTop } from 'react-icons/ai';
import PayrollEmployee from "./PayrollEmployee";
import Payslip from "./Payslip";


const Payroll = () => {

    const [isPage, setIsPage] = useState(1);

    return (
        <div>

            {
                isPage == 1 ?
                    <div className="grid grid-cols-11 gap-10 relative mt-[-4px]">
                        <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
                    </div>
                    :
                    <div className="grid grid-cols-11 gap-10 relative mt-[-4px] ml-[100px]">
                        <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
                    </div>
            }

            <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-[35px]">
                    {
                        isPage == 1 ?
                            <button onClick={() => setIsPage(1)}>Employee</button>
                            :
                            <button className="text-[#8F9BB3]" onClick={() => setIsPage(1)}>Employee</button>
                    }
                    {
                        isPage == 2 ?
                            <button onClick={() => setIsPage(2)}>Payslip</button>
                            :
                            <button className="text-[#8F9BB3]" onClick={() => setIsPage(2)}>Payslip</button>
                    }

                </div>
                <div>
                    <button className=" btn bg-[#00E096] hover:bg-[#00E096] rounded-lg border text-white">Add New</button>
                </div>
            </div>


            {
                isPage == 1 &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[37px]">

                    <div className="bg-white py-[24px] px-[22px] rounded-2xl border-gray-300 border">
                        <p>
                            Web Developer
                        </p>
                        <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
                            $18,960
                        </h1>
                        <div className="xl:flex lg:block items-center gap-1">
                            <p className="flex items-center"><AiOutlineVerticalAlignBottom size={20}></AiOutlineVerticalAlignBottom> <span className="text-red-500">11.5%</span></p>

                            <p>Since last month </p >
                        </div>
                    </div>

                    <div className="bg-white py-[24px] px-[22px] rounded-2xl border-gray-300 border">
                        <p>
                            App Developer
                        </p>
                        <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
                            $11,530
                        </h1>
                        <div className="xl:flex lg:block items-center gap-1">
                            <p className="flex items-center"><AiOutlineVerticalAlignTop size={20}></AiOutlineVerticalAlignTop> <span className="text-red-500">16.5%</span></p>
                            <p>Since last month </p >
                        </div>
                    </div>

                    <div className="bg-white py-[24px] px-[22px] rounded-2xl border-gray-300 border">
                        <p>
                            Designer
                        </p>
                        <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
                            $2,234
                        </h1>
                        <div className="xl:flex lg:block items-center gap-1">
                            <p className="flex items-center"><AiOutlineVerticalAlignTop size={20}></AiOutlineVerticalAlignTop> <span className="text-red-500">13.5%</span></p>
                            <p>Since last month </p >
                        </div>
                    </div>

                    <div className="bg-white py-[24px] px-[22px] rounded-2xl border-gray-300 border">
                        <p>
                            Marketing
                        </p>
                        <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
                            $8,421
                        </h1>
                        <div className="xl:flex lg:block items-center gap-1">
                            <p className="flex items-center"><AiOutlineVerticalAlignBottom size={20}></AiOutlineVerticalAlignBottom> <span className="text-red-500">18.5%</span></p>
                            <p>Since last month </p >
                        </div>
                    </div>

                </div>
            }

            {
                isPage == 1 ?
                    <PayrollEmployee></PayrollEmployee>
                    :
                    <Payslip></Payslip>
            }


        </div>
    );
};

export default Payroll;