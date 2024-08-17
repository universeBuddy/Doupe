import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, Loader } from "../components";
import { preview } from "../assets";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [genratingImg, setGeratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const genrateImage = () => {};
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

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt={preview}
                className="w-9/12h-9/12 object-contain opacity-40 "
              />
            )}

            {genratingImg && (
              <div className="absoulte inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className=" mt-5 flex gap-5">
          <button
            type="button"
            onClick={genrateImage}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {genratingImg ? "Genrating..." : "Genrate Image"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 tetx-[#666e75] tetx-[14px]">
            Once you have created the image you want, you cab share it with
            others in Community
          </p>

          <button type="submit" className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">Share with the Community</button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
