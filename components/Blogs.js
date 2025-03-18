import React from "react";
import blogs from "@/constants/blogs";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";


const Blogs = () => {
  return (
    <div className="h-screen" id="blogs">
      <div className="ml-96">
        <h1 className="heading my-20">Latest Blogs.</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className=" w-full flex items-center justify-center mb-40"
            >
              
              <CardContainer className="inter-var">
                <CardBody className="bg-black hover:shadow-2xl border-white/[0.2] hover:shadow-emerald-500/[0.1] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black
                 dark:border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white"
                  >
                     {blog.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {blog.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={blog.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={blog.pinLink}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline hover:underline-offset-4"
                    >
                      Read now →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
