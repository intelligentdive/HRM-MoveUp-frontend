/* eslint-disable react/no-unescaped-entities */
import { BsEyeFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";


const Search = () => {
    return (
        <div className="mb-10">


            <div className="mt-4 bg-white p-2 rounded-lg">

                <div className=" relative ml-5 mr-5 mt-2">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="h-[34px] placeholder-[#C5CEE0] text-[15px] font-normal outline-none bg-white border border-[#EFF4FA] px-[12px] pl-12 rounded-lg w-full p-5"
                    />

                    <FiSearch className="absolute top-[10px] text-black ml-4" size={22} />
                </div>

                <div className="mt-[30px] mb-5 ml-5">
                    <h3 className="text-[17px]">Search result for "Boostrap 4 admin"</h3>
                    <p className="text-[#8F9BB3]">About 16,853 result ( 0.16 seconds )</p>
                </div>

            </div>

            <hr className="mt-[30px]" />

            <div className="grid grid-cols-11 lg:gap-10 xl:gap-20 relative mt-[-4px]">
                <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
            </div>

            <div className="flex items-center justify-start gap-5 mt-5">
                <h2 className="text-[#222B45] text-base">All</h2>
                <h2 className="text-[#8F9BB3] text-base">Images</h2>
                <h2 className="text-[#8F9BB3] text-base">Videos</h2>
                <h2 className="text-[#8F9BB3] text-base">News</h2>
                <h2 className="text-[#8F9BB3] text-base">More</h2>
            </div>

            <div className="flex items-start justify-between bg-white p-5 mt-[30px]">
                <div>
                    <h2 className="text-[17px]">Bootstrap 4 Light & Dark Admin with Free Vuejs</h2>
                    <p className="text-[#8F9BB3]">http://example.com/user/example2332</p>
                    <p className="text-[#8F9BB3] mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="flex items-center gap-2">
                    <BsEyeFill size={20} color="#0095FF"></BsEyeFill>
                    <p className="text-[#8F9BB3]">2311</p>
                </div>
            </div>

            <div className="flex items-start justify-between bg-white p-5 mt-[30px]">
                <div>
                    <h2 className="text-[17px]">Boostrap 4 Admin Dashboard Template</h2>
                    <p className="text-[#8F9BB3]">http://example.com/example2365</p>
                    <p className="text-[#8F9BB3] mt-6">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in somw from, by injacted humour.</p>
                </div>
                <div className="flex items-center gap-2">
                    <BsEyeFill size={20} color="#0095FF"></BsEyeFill>
                    <p className="text-[#8F9BB3]">1566</p>
                </div>
            </div>

            <div className="flex items-start justify-between bg-white p-5 mt-[30px]">
                <div>
                    <h2 className="text-[17px]">The ultimate Boostrap 4 Admin Dashboard</h2>
                    <p className="text-[#8F9BB3]">http://example.com/example2674</p>
                    <p className="text-[#8F9BB3] mt-6">Contrary to popular belief, Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex items-center gap-2">
                    <BsEyeFill size={20} color="#0095FF"></BsEyeFill>
                    <p className="text-[#8F9BB3]">1246</p>
                </div>
            </div>

            <div className="flex items-start justify-between bg-white p-5 mt-[30px]">
                <div>
                    <h2 className="text-[17px]">Boostrap 4 Admin Dashboard Template</h2>
                    <p className="text-[#8F9BB3]">http://example.com/example2341</p>
                    <p className="text-[#8F9BB3] mt-6">Contrary to popular belief, Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex items-center gap-2">
                    <BsEyeFill size={20} color="#0095FF"></BsEyeFill>
                    <p className="text-[#8F9BB3]">1102</p>
                </div>
            </div>

        </div>
    );
};

export default Search;