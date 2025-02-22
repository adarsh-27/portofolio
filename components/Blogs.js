import React from "react";
import { PinContainer } from "./ui/3d-pin";
import blogs from "@/constants/blogs";

const Blogs = () => {
  return (
    <div className="">
      <div className="ml-96">
        <h1 className="heading mt-20">Latest Blogs.</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="h-[30rem] w-full flex items-center justify-center mb-40"
            >
              <PinContainer
                title={blog.pinTitle}
                href={blog.pinLink}
             
              >
                <div className="flex  basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {blog.title}
                  </h3>
                  <div className="text-base !my-1 !p-0 font-normal">
                    <span className="text-slate-500">
                      {blog.description}
                    </span>
                  </div>
                  <div className="flex flex-1 w-full  rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 " />
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
