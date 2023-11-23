import React from "react";
import Path from "./routes/Path";
import { Flowbite } from "flowbite-react";

// const customTheme = {
//   // button: {
//   //   color: {
//   //     primary: "bg-red-500 hover:bg-red-600",
//   //   },
//   // },
//   // sidebar: {
//   //   cta: {
//   //     color: {
//   //       blue: "bg-cyan-50 dark:bg-cyan-900",
//   //       primary: "bg-red-500 dark:bg-red-800"
//   //     },
//   //   },
//   // },
// };

const App = () => {
  return (
    <div className=" font-sans bg-bg text-dark">
      {/* theme={{ theme: customTheme }} */}
      <Flowbite>
        <Path />
      </Flowbite>
    </div>
  );
};

export default App;
