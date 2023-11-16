import React from "react";
import { Button, Select, Label, TextInput } from "flowbite-react";

const CreateAgents = () => {
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <h1>Create New Agent</h1>

      {/* <div cla> */}
        <form className="flex max-w-md flex-col gap-4 mx-auto">
          {/* //=== Name */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="agentName" value="Your Name" />
            </div>
            <TextInput id="agentName" placeholder="" required shadow />
          </div>
          {/* Name ===// */}
          {/* //=== Email */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              placeholder="name@example.com"
              required
              shadow
              type="email"
            />
          </div>
          {/* Email ===// */}
          {/* //=== Phone */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone Num" />
            </div>
            <TextInput
              id="phone"
              placeholder="+959-xxx-xxx"
              required
              shadow
              // type="phone"
            />
          </div>
          {/* Phone ===// */}
          {/* //=== Role */}
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="roles" value="Select role" />
            </div>
            <Select id="roles" required>
              <option>Admin</option>
              <option>Agent</option>
            </Select>
          </div>
          {/* Role ===// */}

          {/* //=== Status */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="status" value="Status" />
            </div>
            <TextInput
              id="status"
              placeholder="your status"
              shadow
              // type="email"
            />
          </div>
          {/* Stauts ===// */}

          {/* //=== Company Name */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="company" value="Company Name" />
            </div>
            <TextInput id="company" placeholder="example" shadow />
          </div>
          {/* Email ===// */}

          {/* //=== password */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" required shadow type="password" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" required shadow type="password" />
          </div>
          {/* password ===// */}
          {/* <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label className="flex" htmlFor="agree">
            <p>I agree with the</p>
            <LinkComponent
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="/forms"
            >
              <p>terms and conditions</p>
            </LinkComponent>
          </Label>
        </div> */}
          <Button type="submit">Create new Agent</Button>
        </form>
      {/* </div> */}
    </div>
  );
};

export default CreateAgents;
