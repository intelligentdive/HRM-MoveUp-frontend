/* eslint-disable react/no-unescaped-entities */
import image from '../../assets/EmployeeProfileView/employeeView.png';
import { MdOutlineForwardToInbox } from 'react-icons/md';
import { PiPrinterBold } from 'react-icons/pi';

const Payslip = () => {
    return (
        <div className="mt-[25px] bg-white border border-gray-200 rounded-lg mb-[125px]">

            <div className='flex items-start justify-between m-5'>
                <div className='flex items-start gap-3'>
                    <img src={image} alt="" className='w-[70px]' />
                    <div className=''>
                        <p className='text-[#8F9BB3] leading-[30px]'>Order ID : <span className='text-[#0095FF]'>04FA</span> </p>
                        <h3 className='font-semibold leading-[30px]'>David Harmon</h3>
                        <p className=' '>795 Folsom Ave, Suite 546 San Francisco, CA 54656</p>
                        <div className='flex items-center mt-3'>
                            <MdOutlineForwardToInbox size={20} color='#C5CEE0'></MdOutlineForwardToInbox>
                            <PiPrinterBold size={20} color='#C5CEE0' className='ml-6'></PiPrinterBold>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold'>15 Oct, 2019</h3>
                </div>
            </div>
            <hr />

            <div className='grid grid-cols-12 py-[30px]'>
                <div className='col-span-7 flex items-center gap-10 ml-6'>
                    <p>01</p>
                    <p>Basic Salary</p>
                </div>
                <div className='col-span-5 grid grid-cols-3 gap-4'>
                    <p>$1,500</p>
                    <p>-</p>
                    <p>$380</p>
                </div>
            </div>

            <hr />

            <div className='grid grid-cols-12 py-[30px]'>
                <div className='col-span-7 flex items-center gap-10 ml-6'>
                    <p>02</p>
                    <p>House Rent Allowance (H.R.A)</p>
                </div>
                <div className='col-span-5 grid grid-cols-3 gap-4'>
                    <p>$1,230</p>
                    <p>-</p>
                    <p>$730</p>
                </div>
            </div>

            <hr />

            <div className='grid grid-cols-12 py-[30px]'>
                <div className='col-span-7 flex items-center gap-10 ml-6'>
                    <p>03</p>
                    <p>Tax Deducted at Source (T.D.S)</p>
                </div>
                <div className='col-span-5 grid grid-cols-3 gap-4'>
                    <p>-</p>
                    <p>$670</p>
                    <p>-</p>
                </div>
            </div>

            <hr />

            <div className='grid grid-cols-12 py-[30px]'>
                <div className='col-span-7 flex items-center gap-10 ml-6'>
                    <p>04</p>
                    <p>BCC Bank Loan</p>
                </div>
                <div className='col-span-5 grid grid-cols-3 gap-4'>
                    <p>-</p>
                    <p>$890</p>
                    <p>$340</p>
                </div>
            </div>

            <hr />

            <div className='grid grid-cols-12 py-[30px]'>
                <div className='col-span-7 flex items-center gap-10 ml-6'>
                    <p>05</p>
                    <p>Other Allowance</p>
                </div>
                <div className='col-span-5 grid grid-cols-3 gap-4'>
                    <p>$2,360</p>
                    <p>-</p>
                    <p>$330</p>
                </div>
            </div>

            <hr />

            <div className='grid grid-cols-12 py-[30px]'>
                <div className='col-span-7 flex items-center gap-10 ml-6'>
                </div>
                <div className='col-span-5 grid grid-cols-3 gap-4'>
                    <p>$5,090</p>
                    <p>$1,560</p>
                    <p className='text-[#0095FF] font-bold'>$1,770</p>
                </div>
            </div>

            <p className='ml-[30px]'><span className='text-[#8F9BB3]'>Note: </span>I'm speaking with myseft, number one.</p>
            <div className='flex items-end justify-end mr-5 mb-5'>
                <button className='btn btn-primary btn-sm text-white px-6'>Print</button>
            </div>

        </div>
    );
};

export default Payslip;