/* eslint-disable react/no-unescaped-entities */

import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../../redux/fracture/Users/UserSlice";

const AdDContact_modal = ({ setIsOpen }) => {
  /* */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onUserSubmit = (data) => {
    console.log(data);
    dispatch(addNewUser(data));
  };

  return (
    <div className="">
      <dialog id="addContact_modal" className="modal">
        <div className="modal-box w-[780px] max-w-5xl">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">Add New Contact</h2>
            <button className="btn bg-white hover:bg-white border-0">
              <RxCross1 onClick={() => setIsOpen(false)} size={25}></RxCross1>
            </button>
          </div>
          <hr />
          <form onSubmit={handleSubmit(onUserSubmit)}>
            <div className="mt-5">
              <div className="flex items-center justify-between mt-4 gap-2">
                <input
                  {...register("fullName", { required: true })}
                  type="text"
                  placeholder="Full Name*"
                  className="input input-bordered input-sm w-full placeholder-black"
                />
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  placeholder="Phone Number*"
                  className="input input-bordered input-sm w-full placeholder-black"
                />
              </div>

              <div className="flex items-center justify-between mt-4 gap-2">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="Email*"
                  className="input input-bordered input-sm w-full placeholder-black"
                />
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered input-sm w-full placeholder-black"
                />
              </div>

              <div className="mt-16 flex items-center justify-start gap-10">
                <div>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="fileInput"
                  />
                  <label
                    style={{
                      backgroundColor: "#EFF4FA",
                      color: "#8F9BB3",
                      padding: "40px 10px",
                      borderRadius: "100px",
                      cursor: "pointer",
                      border: "2px dotted #D7E1EC",
                    }}
                    htmlFor="fileInput"
                    className="custom-file-label"
                  >
                    Choose File
                  </label>
                </div>
                <p className="text-[#8F9BB3]">
                  This is some placeholder block-level help text for the above
                  input. It's a bit <br /> lightter and easily wraps to a new
                  line.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <p className=" text-[#8F9BB3]">No File Selected</p>
              <div className="flex justify-end items-center">
                <button
                  type="submit"
                  className="btn btn-sm bg-[#0095FF] hover:bg-[#0095FF] border-0 text-white"
                >
                  Add Contact
                </button>
                <a
                  onClick={() => setIsOpen(false)}
                  className="underline btn border-0 text-[#8F9BB3] bg-white hover:bg-white"
                >
                  Close
                </a>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AdDContact_modal;
