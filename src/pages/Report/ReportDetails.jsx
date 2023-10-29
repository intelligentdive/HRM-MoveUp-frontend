const ReportDetails = () => {
  return (
    <div className="mt-[25px] border-gray-200 rounded-lg mb-[115px] bg-white">
      <div className="mx-5">
        <div className="flex items-center justify-between">
          <p className="mt-5">#SF0034</p>
          <button className="btn bg-[#0095FF] hover:bg-[#0095FF] btn-sm text-white mt-5">
            Print Invoice
          </button>
        </div>

        <div className="mt-[30px] flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-[17px]">Company</h2>
            <p>Street, Address</p>
            <p>Street City</p>
            <p>Region, Postal Code</p>
            <p>Itd@example.com</p>
          </div>
          <div>
            <h2 className="font-semibold text-[17px]">Client</h2>
            <p>Street, Address</p>
            <p>Street City</p>
            <p>Region, Postal Code</p>
            <p>Cls@example.com</p>
          </div>
        </div>

        {/* Table start */}
        <div className="mb-[120px]">
          <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-[#EFF4FA]">
                  <tr>
                    <th className="text-[#8F9BB3] font-semibold text-sm"></th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Product
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      QNT
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Unit
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r">01</td>
                    <td className="border-r">
                      <div>
                        <h3 className="text-[#222B45] text-sm font-semibold">
                          Logo Creation
                        </h3>
                        <p>Logo and business cards design</p>
                      </div>
                    </td>
                    <td className="border-r">1</td>
                    <td className="border-r">$1,560</td>
                    <td>$1,560</td>
                  </tr>

                  <tr>
                    <td className="border-r">02</td>
                    <td className="border-r">
                      <div>
                        <h3 className="text-[#222B45] text-sm font-semibold">
                          Online Store Design & Development
                        </h3>
                        <p>Design/Develoment for all popular modern browsers</p>
                      </div>
                    </td>
                    <td className="border-r">1</td>
                    <td className="border-r">$20,000</td>
                    <td>$20,000</td>
                  </tr>

                  <tr>
                    <td className="border-r">03</td>
                    <td className="border-r">
                      <div>
                        <h3 className="text-[#222B45] text-sm font-semibold">
                          App Design
                        </h3>
                        <p>promotional mobile application</p>
                      </div>
                    </td>
                    <td className="border-r">2</td>
                    <td className="border-r">$3,200</td>
                    <td>$6,400</td>
                  </tr>

                  <tr>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td className="border-r">{""}</td>
                    <td className="border-r text-[#222B45] text-sm font-semibold">
                      Subtotal
                    </td>
                    <td>$27,960</td>
                  </tr>
                  <tr>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td className="border-r">{""}</td>
                    <td className="border-r text-[#222B45] text-sm font-semibold">
                      Cat Rate
                    </td>
                    <td>$20%</td>
                  </tr>
                  <tr>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td className="border-r">{""}</td>
                    <td className="border-r text-[#222B45] text-sm font-semibold">
                      Vat Due
                    </td>
                    <td className="border-r">$5,592</td>
                  </tr>
                  <tr className="bg-[#94CBFF]">
                    <td>{""}</td>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td className="text-white text-sm font-semibold">
                      {"Total Due"}
                    </td>
                    <td className="text-white text-sm font-semibold">
                      $33,552
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
