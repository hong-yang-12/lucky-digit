import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { addUser, rememberUser } from "../redux/service/authSlice";
import Cookies from "js-cookie";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Spinner } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import brand_img from "../assets/imgs/Branding.png";

const Login = () => {
  const cookie_email = Cookies.get("user_email");
  const cookie_password = Cookies.get("user_password");
  let user_email = ""; //initial not to breakdown project
  let user_password = ""; //initial not to breakdown project

  // check condition not to breakdown project
  if (cookie_email && cookie_password) {
    user_email = JSON.parse(cookie_email);
    user_password = JSON.parse(cookie_password);
  }
  // console.log(user_email, user_password);

  const nav = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  //rememberd email and passwords are initialized and saved in cookie
  const [loginData, setLoginData] = useState({
    email: `${user_email ? user_email : ""}`,
    password: `${user_password ? user_password : ""}`,
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = loginData;
      const { data } = await login(user);
      dispatch(addUser({ user: data?.name, token: data?.token }));
      // console.log(data);
      if (isChecked) {
        dispatch(
          rememberUser({
            user_email: loginData?.email,
            user_password: loginData?.password,
          })
        );
      }
      if (data?.name) {
        toast.success("Logged in Successfully . . .");
        nav("/");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center text-black ">
      <div className="flex flex-col gap-5">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={brand_img} className="w-20" alt="brand_img" />
          <h1 className="font-heading text-3xl">Lucky Digit</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
          {/* email */}
          <div>
            <div className="mb-2 block">
              <Label className="text-black" htmlFor="email1" value="အီးမေးလ်" />
            </div>
            <TextInput
              id="email1"
              type="email"
              value={loginData?.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </div>

          {/* password */}
          <div>
            <div className="mb-2 block">
              <Label
                className="text-black"
                htmlFor="password1"
                value="လျှိူ့ဝှက်နံပါတ်"
              />
            </div>
            <TextInput
              id="password1"
              type="password"
              value={loginData?.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </div>

          {/* submit button + rememberme */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={isChecked}
                onChange={handleCheckbox}
              />
              <Label htmlFor="remember">မှတ်သားရန်</Label>
            </div>
            {/* {isError && <p>{message}</p>} */}

            <Button color="blue" type="submit" disabled={isLoading && true}>
              {isLoading ? (
                <Spinner aria-label="Default status example" />
              ) : (
                "အကောင့်ဝင်မည်။"
              )}
            </Button>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
