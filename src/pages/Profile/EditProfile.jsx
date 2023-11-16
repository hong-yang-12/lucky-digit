import React from "react";

import CustomHeader from "../../components/CustomHeader";
import { AiOutlineUpload } from "react-icons/ai";
import { Button, Label, TextInput } from "flowbite-react";

const EditProfile = () => {
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader group="ကိုယ်ရေးအချက်အလက်" page="ပြင်ဆင်ရန်" />

      <section className="w-4/5 shadow-lg border pb-8 mt-5 mx-auto  ">
        <h4 className="py-4 px-6">ကိုယ်ရေးအချက်အလက်အပြည့်အစုံ</h4>
        <hr />
        <form action="">
          <div className="grid grid-cols-2  gap-5 p-8">
            <div>
              <p className="mb-3 text-sm">ပရိုဖိုင်ပုံထည့်ရန်</p>
              <div className="w-full h-96 custom-border  rounded flex justify-center items-center">
                <div className=" custom-border-circle w-10 h-10  flex justify-center items-center">
                  <AiOutlineUpload />
                </div>
              </div>
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
                    type="email"
                    placeholder=""
                    sizing="lg"
                    required
                  />
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
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="အီးမေးလ်လိပ်စာ" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder=""
                  sizing="lg"
                  required
                />
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
                  required
                />
              </div>

              {/* NRC No. */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="NRC" value="မှတ်ပုံတင်အမှတ်" />
                </div>
                <TextInput
                  id="NRC"
                  type="text"
                  placeholder=""
                  sizing="lg"
                  required
                />
              </div>
            </div>
          </div>
          <Button className=" ms-auto me-8" type="submit">
            ပြင်ဆင်ရန်
          </Button>
        </form>
      </section>
    </div>
  );
};

export default EditProfile;
