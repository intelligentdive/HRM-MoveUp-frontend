import { RxCross1 } from "react-icons/rx";

const AddUserModal = ({ setIsOpen }) => {
  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <dialog id="addUser_modal" className="modal">
        <div className="modal-box xl:w-[800px] lg:w-[700px] max-w-5xl">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold">Add User</h2>
            <button className="btn bg-white hover:bg-white border-0">
              <RxCross1 onClick={() => setIsOpen(false)} size={25}></RxCross1>
            </button>
          </div>
          <hr />

          <div className="mt-5">
            <input
              type="text"
              placeholder="Employee ID*"
              className="input input-bordered input-sm w-full"
            />
            <div className="flex items-center justify-between mt-4 gap-2">
              <input
                type="text"
                placeholder="First Name*"
                className="input input-bordered input-sm w-full"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="input input-bordered input-sm w-full"
              />
            </div>
            <div className="flex items-center justify-between mt-4 gap-2">
              <input
                type="text"
                placeholder="Email ID*"
                className="input input-bordered input-sm w-full"
              />
              <input
                type="text"
                placeholder="Mobile NO*"
                className="input input-bordered input-sm w-full"
              />
              <select className="select select-bordered w-full select-sm text-[#8F9BB3]">
                <option disabled selected className="text-[#8F9BB3]">
                  Select Role Type
                </option>
                <option>Super Admin</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="flex items-center justify-between mt-4 gap-2">
              <input
                type="text"
                placeholder="User Name*"
                className="input input-bordered input-sm w-full"
              />
              <input
                type="text"
                placeholder="Password*"
                className="input input-bordered input-sm w-full"
              />
              <input
                type="text"
                placeholder="Confirm Password*"
                className="input input-bordered input-sm w-full"
              />
            </div>

            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                <thead className="bg-[#EFF4FA]">
                  <tr>
                    <th className="text-[#8F9BB3]">Module Permission</th>
                    <th className="text-[#8F9BB3]">Read</th>
                    <th className="text-[#8F9BB3]">Write</th>
                    <th className="text-[#8F9BB3]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Super Admin</td>
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />{" "}
                    </td>
                    <td>
                      <input type="checkbox" className="checkbox-sm checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" className="checkbox-sm checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Admin</td>
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />{" "}
                    </td>
                    <td>
                      <input type="checkbox" className="checkbox-sm checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" className="checkbox-sm checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Employee Admin</td>
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />{" "}
                    </td>
                    <td>
                      <input type="checkbox" className="checkbox-sm checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" className="checkbox-sm checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>HR Admin</td>
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />{" "}
                    </td>
                    <td>
                      <input type="checkbox" className="checkbox-sm checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" className="checkbox-sm checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-3 flex justify-end items-center">
            <button
              onClick={() => handleSubmit()}
              className="btn btn-sm bg-[#0095FF] hover:bg-[#0095FF] border-0 text-white"
            >
              Submit
            </button>
            <a
              onClick={() => setIsOpen(false)}
              className="underline btn border-0 text-[#8F9BB3] bg-white hover:bg-white"
            >
              Close
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddUserModal;
