import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import CustomHeader from "../../components/CustomHeader";
import { AiOutlineUpload } from "react-icons/ai";

const ChangePassword = () => {
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader
        group="ကိုယ်ရေးအချက်အလက်"
        page="လျှို့ဝှက်နံပါတ်ပြောင်းရန်"
      />

      <section className="w-2/5 shadow-lg border pb-8 mt-5 ms-40 ">
        <h4 className="py-4 px-6">လျှို့ဝှက်နံပါတ်ပြောင်းရန် အချက်အလက်များ</h4>
        <hr />
        <form action="">
          {/* <div className="grid grid-cols-2  gap-5 p-8"> */}
          <div className="w-full grid gap-5 px-8 py-4">
            {/* current password */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="current_password"
                  value="လက်ရှိလျှို့ဝှက်နံပါတ်"
                />
              </div>
              <TextInput
                id="current_password"
                type="password"
                placeholder=""
                sizing="lg"
                required
              />
            </div>

            {/* new password */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="new_password" value="လျှို့ဝှက်နံပါတ်အသစ်" />
              </div>
              <TextInput
                id="new_password"
                type="password"
                placeholder=""
                sizing="lg"
                required
              />
            </div>

            {/* confirm password */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="confirm_password"
                  value="လျှို့ဝှက်နံပါတ်အသစ် ပြန်ရေးရန်"
                />
              </div>
              <TextInput
                id="confirm_password"
                type="password"
                placeholder=""
                sizing="lg"
                required
              />
            </div>
          </div>
          {/* </div> */}
          <Button className=" ms-auto me-8" type="submit">
            ပြင်ဆင်ရန်
          </Button>
        </form>
      </section>
    </div>
  );
};

export default ChangePassword;
