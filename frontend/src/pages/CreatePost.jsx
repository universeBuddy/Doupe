import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [genratingImg, setGeratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e) => {};
  const handleSupriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]"> Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create of imaginative and vissually sunning image through DALL-E AI
          and share them will
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit()}>
        <div className="flex flex-col gap-5">
          <FormField
            lableName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            vlaue={form.name}
            handleChange={handleChange()}
          />
          <FormField
            lableName="Prompt"
            type="text"
            name="prompt"
            placeholder="teaddy bear shopping in the japan"
            vlaue={form.prompt}
            handleChange={handleChange()}
            isSupriseMe
            handleSupriseMe={handleSupriseMe()}
          />
        </div> 
      </form>
    </section>
  );
};

export default CreatePost;
