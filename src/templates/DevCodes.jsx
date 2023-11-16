import React from "react";

const DevCodes = () => {
  const [numbers, setNumbers] = useState(["", ""]);
  const [money, setMoney] = useState("");

  const handleNumberClick = (number) => {
    const newNumbers = [...numbers];
    const focusedInputIndex = numbers.findIndex((n) => n === "");
    if (focusedInputIndex === -1) {
      return;
    }
    newNumbers[focusedInputIndex] = number;
    setNumbers(newNumbers);
  };
  const handleInputChange = (event) => {
    const newNumbers = [...numbers];
    const inputIndex = parseInt(event.target.id);
    newNumbers[inputIndex] = event.target.value;
    setNumbers(newNumbers);
  };
  return (
    <div>
      {numbers.map((number, index) => (
        <input
          key={index}
          id={index}
          type="number"
          value={number}
          onChange={handleInputChange}
          className="w-10 h-10 "
        />
      ))}
      <input type="number" className="w-40 h-10" />
    </div>
  );
};

export default DevCodes;

// from editProfile
// <form className="flex max-w-md flex-col gap-4 mx-auto">
//   {/* //=== Name */}
//   <div>
//     <div className="mb-2 block">
//       <Label htmlFor="agentName" value="Name" />
//     </div>
//     <TextInput id="agentName" placeholder="" required shadow />
//   </div>
//   {/* Name ===// */}
//   {/* //=== Email */}
//   <div>
//     <div className="mb-2 block">
//       <Label htmlFor="email2" value="Email" />
//     </div>
//     <TextInput
//       id="email2"
//       placeholder="name@example.com"
//       required
//       shadow
//       type="email"
//     />
//   </div>
//   {/* Email ===// */}
//   {/* //=== Phone */}
//   <div>
//     <div className="mb-2 block">
//       <Label htmlFor="phone" value="Phone Num" />
//     </div>
//     <TextInput
//       id="phone"
//       placeholder="+959-xxx-xxx"
//       required
//       shadow
//       // type="phone"
//     />
//   </div>
//   {/* Phone ===// */}
//   {/* //=== Role */}
//   <div className="max-w-md">
//     <div className="mb-2 block">
//       <Label htmlFor="roles" value="Select role" />
//     </div>
//     <Select id="roles" required>
//       <option>Admin</option>
//       <option>Agent</option>
//     </Select>
//   </div>
//   {/* Role ===// */}

//   {/* //=== Status */}
//   <div>
//     <div className="mb-2 block">
//       <Label htmlFor="status" value="Status" />
//     </div>
//     <TextInput
//       id="status"
//       placeholder="your status"
//       shadow
//       // type="email"
//     />
//   </div>
//   {/* Stauts ===// */}

//   {/* //=== Company Name */}
//   <div>
//     <div className="mb-2 block">
//       <Label htmlFor="company" value="Company Name" />
//     </div>
//     <TextInput id="company" placeholder="example" shadow />
//   </div>
//   {/*  Company Name ===// */}

//   {/* //=== Address */}
//   <div>
//     <div className="mb-2 block">
//       <Label htmlFor="address" value="Address" />
//     </div>
//     <TextInput id="address" placeholder="Yangon" shadow />
//   </div>
//   {/*  Address ===// */}

//   {/* //=== password */}
//   {/* <div>
//           <div className="mb-2 block">
//             <Label htmlFor="password2" value="Your password" />
//           </div>
//           <TextInput id="password2" required shadow type="password" />
//         </div> */}

//   {/* <div>
//           <div className="mb-2 block">
//             <Label htmlFor="repeat-password" value="Repeat password" />
//           </div>
//           <TextInput id="repeat-password" required shadow type="password" />
//         </div> */}
//   {/* password ===// */}

//   <Button type="submit">Update</Button>
// </form>;

// from password change profile
// <form className="flex max-w-md flex-col gap-4 mx-auto">
//         {/* //=== password */}
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="password2" value="Your password" />
//           </div>
//           <TextInput id="password2" required shadow type="password" />
//         </div>

//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="repeat-password" value="Repeat password" />
//           </div>
//           <TextInput id="repeat-password" required shadow type="password" />
//         </div>
//         {/* password ===// */}

//         <Button type="submit">Update</Button>
//       </form>
