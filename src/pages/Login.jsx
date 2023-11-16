import React, { useState } from "react";
import brand_img from "../assets/imgs/Branding.png";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { addUser } from "../redux/service/authSlice";

const Login = () => {
  const nav = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = loginData;
      const { data } = await login(user);
      dispatch(addUser({ user: data?.name, token: data?.token }));
      console.log(data);
      if (data?.name) nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-bg ">
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
              <Label htmlFor="email1" value="အီးမေးလ်" />
            </div>
            <TextInput
              id="email1"
              type="email"
              // placeholder="name@flowbite.com"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </div>

          {/* password */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="လျှိူ့ဝှက်နံပါတ်" />
            </div>
            <TextInput
              id="password1"
              type="password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </div>

          {/* submit button + rememberme */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">မှတ်သားရန်</Label>
            </div>
            <Button color="blue" type="submit">
              အကောင့်ဝင်မည်။
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
