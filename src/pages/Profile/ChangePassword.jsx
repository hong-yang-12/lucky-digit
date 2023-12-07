import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import CustomHeader from "../../components/CustomHeader";
import Cookies from "js-cookie";
import { useChangePasswordMutation } from "../../redux/api/profileApi";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader";

const ChangePassword = () => {
  const [passwordForm, setPasswordForm] = useState({
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const [errors, setErrors] = useState({});
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const token = Cookies.get("token");

  //hanle inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPasswordForm({ ...passwordForm, [id]: value });
  };

  //handle change password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    // ==== current_password === //
    if (!passwordForm.current_password.trim()) {
      validationErrors.current_password = "လက်ရှိလျှို့ဝှက်နံပါတ် လိုအပ်ပါသည်။";
    } else if (passwordForm.current_password.length < 8) {
      validationErrors.current_password =
        "လျှို့ဝှက်နံပါတ် အနည်းဆုံး ၈လုံး လိုအပ်ပါသည်။";
    }
    // ==== new_password === //
    if (!passwordForm.new_password.trim()) {
      validationErrors.new_password = "လျှို့ဝှက်နံပါတ်အသစ် လိုအပ်ပါသည်။";
    } else if (passwordForm.new_password.length < 8) {
      validationErrors.new_password =
        "လျှို့ဝှက်နံပါတ် အနည်းဆုံး ၈လုံး လိုအပ်ပါသည်။";
    }
    // ==== confirm_new_password === //
    if (passwordForm.confirm_new_password !== passwordForm.new_password) {
      validationErrors.confirm_new_password =
        "လျှို့ဝှက်နံပါတ်အသစ်နှင့် အတည်ပြုလျှို့ဝှက်နံပါတ် မတူညီပါ။";
    }
    setErrors(validationErrors);
    try {
      if (passwordForm.new_password && passwordForm.confirm_new_password) {
        if (passwordForm.new_password === passwordForm.confirm_new_password) {
          const data = await changePassword({ passwordForm, token });
          console.log(data);
          if (data.data) {
            console.log(data.data.message);
            toast.success("လျှို့ဝှက်နံပါတ်ပြောင်းလဲခြင်း အောင်မြင်ပါသည်။");
            toast("Log out လုပ်ပြီး Log in ပြန်ဝင်ရန် အကြံပြုပါသည်။", {
              duration: 6000,
            });
            setPasswordForm({
              current_password: "",
              new_password: "",
              confirm_new_password: "",
            });
          } else if (data.error) {
            console.log(data.error.data.message);
            toast.error(data.error.data.message);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //handle loading
  if (isLoading) {
    <Loader />;
  }
  return (
    <div className="w-full h-screen dark:bg-darkBg dark:text-white">
      <CustomHeader
        group="ကိုယ်ရေးအချက်အလက်"
        page="လျှို့ဝှက်နံပါတ်ပြောင်းရန်"
      />

      <section className="w-2/5 shadow-lg border pb-8 mt-5 ms-40 ">
        <h4 className="py-4 px-6">လျှို့ဝှက်နံပါတ်ပြောင်းရန် အချက်အလက်များ</h4>
        <hr />
        <form onSubmit={handleSubmit} action="">
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
                value={passwordForm?.current_password}
                onChange={handleChange}
              />
              {errors.current_password && (
                <span className="text-xs text-danger">
                  {errors.current_password}
                </span>
              )}
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
                value={passwordForm?.new_password}
                onChange={handleChange}
              />
              {errors.new_password && (
                <span className="text-xs text-danger">
                  {errors.new_password}
                </span>
              )}
            </div>

            {/* confirm password */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="confirm_new_password"
                  value="လျှို့ဝှက်နံပါတ်အသစ် ပြန်ရေးရန်"
                />
              </div>
              <TextInput
                id="confirm_new_password"
                type="password"
                placeholder=""
                sizing="lg"
                value={passwordForm?.confirm_new_password}
                onChange={handleChange}
              />
              {errors.confirm_new_password && (
                <span className="text-xs text-danger">
                  {errors.confirm_new_password}
                </span>
              )}
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

export default ChangePassword;
