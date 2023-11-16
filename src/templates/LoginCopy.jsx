import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useLogoutMutation } from "../redux/api/authApi";
import { Spinner } from "flowbite-react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/service/authSlice";

const LoginCopy = () => {
  const nav = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogout = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    const data = await logout(token);
    console.log(data);
  };

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
    <div className="w-full h-screen bg-bg text-dark flex ">
      <div className="w-2/3 h-full">
        <img
          className="w-full h-full object-cover bg-contain bg-no-repeat"
          src="https://images.unsplash.com/photo-1560215978-9054e9c7b983?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image-demo"
        />
      </div>
      <section className="w-1/3 h-full grid grid-rows-2  px-6 py-10">
        <header className="flex flex-col justify-center gap-2">
          <h1 className="text-3xl text-primary">အကောင့်ဝင်မည်</h1>
          <p>
            Lucky Digit မှ ကြိုဆိုပါတယ်
            <br />
            Log In to see your progress . . .
          </p>
        </header>
        <main>
          <form className="flex flex-col">
            {/* Name */}
            {/* <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div> */}
            {/* Phone Number */}
            {/* <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div> */}

            {/* logout */}
            {/* <button type="button" onClick={handleLogout}>
          logout
        </button> */}

            {/* Email */}
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                အီးမေးလ်
              </label>
            </div>

            {/* Password */}
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                စကားဝှက်
              </label>
            </div>
            {/* ConfirmPassword */}
            {/* <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div> */}

            <p className="mb-6 underline text-blue-500 cursor-pointer">
              စကားဝှက်မေ့နေပါသလား?
            </p>
            {/* <div className="w-full mb-6 ">
        </div> */}
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white bg-primary hover:bg-dark focus:ring-4 focus:outline-none focus:ring-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isLoading ? (
                <Spinner aria-label="Info spinner example" color="info" />
              ) : (
                "အကောင့်ဝင်မည်"
              )}
            </button>
          </form>
        </main>
        <footer className="flex gap-5">
          <p>မန်ဘာမဝင်ရသေးဘူးလား?</p>
          <p
            onClick={() => nav("/register")}
            className="underline text-blue-500 cursor-pointer"
          >
            မန်ဘာဝင်မည်
          </p>
        </footer>
      </section>
    </div>
  );
};

export default LoginCopy;
