import React, { useEffect, useState } from "react";

import CustomHeader from "../../components/CustomHeader";
import { AiOutlineUpload } from "react-icons/ai";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import {
  useEditUserProfileMutation,
  useGetUserProfileQuery,
} from "../../redux/api/profileApi";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const token = Cookies.get("token");
  const { data: detail } = useGetUserProfileQuery(token);
  // console.log(detail?.data);
  const [editForm, setEditForm] = useState({
    name: detail?.data?.name,
    phone: detail?.data?.phone,
    email: detail?.data?.email,
    dob: "", //date of birth
    nrc: "",
    // avatar: "",
  });
  const [errors, setErrors] = useState({});
  const [editUserProfile] = useEditUserProfileMutation();

  const nav = useNavigate();
  //hanle inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditForm({ ...editForm, [id]: value });
  };

  //handle edit profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(editForm);

    const validationErrors = {};
    // ==== name === //
    if (!editForm.name.trim()) {
      validationErrors.name = "အမည်ဖြည့်ပါ";
    } else if (editForm.name.length < 2) {
      validationErrors.current_password =
        "စာလုံးရေ အနည်းဆုံး ၂လုံး လိုအပ်ပါသည်။";
    }
    // ==== phone number === //
    if (editForm.phone.length < 1) {
      validationErrors.phone = "ဖုန်းနံပါတ် လိုအပ်ပါသည်။";
    } else if (editForm.phone.length < 8) {
      validationErrors.phone = "ဖုန်းနံပါတ် အနည်းဆုံး ၆လုံး လိုအပ်ပါသည်။";
    }
    // ==== email === //
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!editForm.email.trim()) {
      validationErrors.email = "အီးမေးလ် လိုအပ်ပါသည်။";
    } else if (!editForm.email.match(pattern)) {
      validationErrors.email = "အီးမေးလ် မှားယွင်းနေပါသည်။";
    }
    setErrors(validationErrors);

    try {
      const { data: edited } = await editUserProfile({ editForm, token });
      console.log(edited?.data);
      if (edited?.data) {
        toast.success("ကိုယ်ရေးအချက်အလက် ပြင်ဆင်ပြီးပါပြီ", {
          duration: 3000,
        });
        nav("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader group="ကိုယ်ရေးအချက်အလက်" page="ပြင်ဆင်ရန်" />

      <section className="w-4/5 shadow-lg border pb-8 mt-5 mx-auto  ">
        <h4 className="py-4 px-6">ကိုယ်ရေးအချက်အလက်အပြည့်အစုံ</h4>
        <hr />
        <form onSubmit={handleSubmit} action="">
          <div className="grid grid-cols-2  gap-5 p-8">
            {/* image input */}
            <div>
              <p className="mb-3 text-sm">ပရိုဖိုင်ပုံထည့်ရန်</p>
              <Label htmlFor="dropzone-file">
                <div className="w-full h-96 custom-border hover:bg-secondary-lighter rounded flex justify-center items-center cursor-pointer">
                  <div className="custom-border-circle w-14 h-14 text-xl hover:bg-secondary hover:border-secondary hover:text-white flex justify-center items-center">
                    <AiOutlineUpload />
                    <FileInput id="dropzone-file" className="hidden" />
                  </div>
                </div>
              </Label>
            </div>
            <div className="w-full grid gap-5">
              {/* Name + Phone No. */}
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="နာမည်အပြည့်အစုံ" />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    placeholder=""
                    sizing="lg"
                    value={editForm?.name}
                    onChange={handleChange}
                    // required
                  />
                  {errors.name && (
                    <span className="text-xs text-danger">{errors.name}</span>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="ဖုန်းနံပါတ်" />
                  </div>
                  <TextInput
                    id="phone"
                    type="number"
                    placeholder=""
                    sizing="lg"
                    value={editForm?.phone}
                    onChange={handleChange}
                    // required
                  />
                  {errors.phone && (
                    <span className="text-xs text-danger">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="အီးမေးလ်လိပ်စာ" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder=""
                  sizing="lg"
                  value={editForm?.email}
                  onChange={handleChange}
                  // required
                />
                {errors.email && (
                  <span className="text-xs text-danger">{errors.email}</span>
                )}
              </div>

              {/* DOB */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dob" value="မွေးသက္ကရာဇ်" />
                </div>
                <TextInput
                  id="dob"
                  type="text"
                  placeholder=""
                  sizing="lg"
                  value={editForm?.dob}
                  onChange={handleChange}
                  // required
                />
              </div>

              {/* NRC No. */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nrc" value="မှတ်ပုံတင်အမှတ်" />
                </div>
                <TextInput
                  id="nrc"
                  type="text"
                  placeholder=""
                  sizing="lg"
                  value={editForm?.nrc}
                  onChange={handleChange}
                  // required
                />
              </div>
            </div>
          </div>
          <Button color="blue" className=" ms-auto me-8" type="submit">
            ပြင်ဆင်ရန်
          </Button>
        </form>
      </section>
    </div>
  );
};

export default EditProfile;
