import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlinePlus,
} from "react-icons/ai";
import word from "../../assets/FileManager/037-word.png";
import fill from "../../assets/FileManager/alert-circle-fill.png";
import OvalCopy8 from "../../assets/projectSummaryImage/Oval Copy 2 (1).png";
import OvalCopy2 from "../../assets/projectSummaryImage/Oval Copy 2.png";
import OvalCopy9 from "../../assets/projectSummaryImage/Oval Copy 8.png";
import OvalCopy from "../../assets/projectSummaryImage/Oval Copy.png";
import OvalCopy10 from "../../assets/projectSummaryImage/Oval Copy9.png";
import OvalCopy4 from "../../assets/projectSummaryImage/Oval-4.png";
import OvalCopy5 from "../../assets/projectSummaryImage/Oval-5.png";
import OvalCopy6 from "../../assets/projectSummaryImage/Oval-6.png";
import OvalCopy7 from "../../assets/projectSummaryImage/Oval-7.png";
import Oval from "../../assets/projectSummaryImage/Oval.png";

const Hero = () => {
  return (
    <div className="mb-[70px]">
      <div className="bg-white p-5 rounded-[8px] mt-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[#222B45] text-base">Recently Accessed Files</p>
          <AiOutlinePlus />
        </div>
        <div className="flex items-center justify-start gap-4 pt-6 border-t border-gray-300">
          <div className="w-[220px] border border-gray-300 p-4 flex items-center justify-start gap-3 rounded-md">
            <div>
              <img src={fill} alt="" />
            </div>
            <div>
              <h3 className="text-[#222B45] text-sm font-semibold">Family</h3>
              <p>3 Files, 1.2 GB</p>
            </div>
          </div>
          <div className="w-[220px] border border-gray-300 p-4 flex items-center justify-start gap-3 rounded-md">
            <div>
              <img src={word} alt="" />
            </div>
            <div>
              <h3 className="text-[#222B45] text-sm font-semibold">
                Report2020.doc
              </h3>
              <p>1.2 GB</p>
            </div>
          </div>
          <div className="w-[220px] border border-gray-300 p-4 flex items-center justify-start gap-3 rounded-md">
            <div>
              <img src={word} alt="" />
            </div>
            <div>
              <h3 className="text-[#222B45] text-sm font-semibold">
                Marketing Content...
              </h3>
              <p>3.2 GB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-[8px] mt-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#EFF4FA]">
              <tr>
                <th className="text-[#8F9BB3]">Name</th>
                <th className="text-[#8F9BB3]">Share With</th>
                <th className="text-[#8F9BB3]">Owner</th>
                <th className="text-[#8F9BB3]">Last Update</th>
                <th className="text-[#8F9BB3]">File Size</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center justify-start gap-3">
                    <img src={fill} />
                    <h4> Content Marketing 2020 </h4>
                  </div>
                </td>
                <td className="flex items-center">
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
                </td>
                <td>
                  <p>React Admin</p>{" "}
                </td>
                <td>
                  <p>$5,500</p>{" "}
                </td>
                <td>
                  <p>Done</p>{" "}
                </td>
              </tr>

              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center justify-start gap-3">
                    <img src={fill} />
                    <h4> Content Marketing 2020 </h4>
                  </div>
                </td>
                <td className="flex items-center">
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
                <td>
                  <p>Vuejs Application</p>{" "}
                </td>
                <td>
                  <p>$14,500</p>{" "}
                </td>
                <td>
                  <p>Done</p>{" "}
                </td>
              </tr>

              {/* row 3 */}
              <tr>
                <td>
                  {" "}
                  <div className="flex items-center justify-start gap-3">
                    <img src={fill} />
                    <h4> Content Marketing 2020 </h4>
                  </div>{" "}
                </td>
                <td className="flex items-center">
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
                <td>
                  <p>Wordpress One Page</p>{" "}
                </td>
                <td>
                  <p>$9,000</p>{" "}
                </td>
                <td>
                  <p>Pending</p>{" "}
                </td>
              </tr>

              {/* row 4 */}
              <tr>
                <td>
                  {" "}
                  <div className="flex items-center justify-start gap-3">
                    <img src={word} />
                    <h4> Content Marketing 2020 </h4>
                  </div>{" "}
                </td>
                <td className="flex items-center">
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
                </td>
                <td>
                  <p>Angular Admin</p>{" "}
                </td>
                <td>
                  <p>$11,500</p>{" "}
                </td>
                <td>
                  <p>Done</p>{" "}
                </td>
              </tr>

              {/* row 5 */}
              <tr>
                <td>
                  {" "}
                  <div className="flex items-center justify-start gap-3">
                    <img src={fill} />
                    <h4> Content Marketing 2020 </h4>
                  </div>{" "}
                </td>
                <td className="flex items-center">
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
                </td>
                <td>
                  <p>One page html Admin</p>{" "}
                </td>
                <td>
                  <p>$400</p>{" "}
                </td>
                <td>
                  <p>Pending</p>{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between mx-3 my-3 border-t border-gray-300 pt-3">
            <div>
              <button className="text-[#C5CEE0] flex items-center gap-2">
                <AiOutlineArrowLeft size={20}></AiOutlineArrowLeft>Prev
              </button>
            </div>
            <div>
              <button className="mr-3">1</button>
              <button className="text-[#C5CEE0]">2</button>
            </div>
            <div>
              <button className="text-[#C5CEE0] flex items-center gap-2">
                Next <AiOutlineArrowRight size={20}></AiOutlineArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
