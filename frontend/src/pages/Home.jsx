import React, { useState } from "react";
import { FormField, Loader } from "../components";

// const RenderCards = ({ data, title }) => {
//   if (data?.length > 0) {
//     return data.map((post) => <Card key={post._id} {...post} />);
//   }

//   return (
//     <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
//   );
// };
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);

  const [searchText, setSearchText] = useState("casc");

  <section className="max-w-7wl mx-auto">
    <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]">
        {" "}
        The Community ShowCase
      </h1>
      <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
        Browse through a Collection of imaginative and vissually sunning image
        genrated by DALL-E AI
      </p>
    </div>
    <div className="mt-16">
      <FormField />
    </div>

    <div className="mt-10">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {searchText && (
            <h2
              className="font-medium text-[#666e75]
               tetx-xl mb-3"
            >
              showing result for{" "}
              <span className="tetx-[#222328] "> {searchText}</span>
            </h2>
          )}

          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            {/* {searchText ? (
              <RenderCards data={[]} title="No Search Result Found" />
            ) : (
              <RenderCards data={[]} title="No post Found" />
            )} */}
          </div>
        </>
      )}
    </div>
  </section>;
};

export default Home;
