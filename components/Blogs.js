import React from "react";
import blogs, { wordsLatestBlogs } from "@/constants/blogs";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Blogs = () => {
  return (
    <div className="min-h-screen px-4 pt-16 md:px-20" id="blogs">
      <div className="">
        <h1 className="heading text-center md:text-left md:ml-20 mt-20">
          Latest Blogs.
        </h1>
        <TypewriterEffectSmooth
          words={wordsLatestBlogs}
          className=" justify-center md:ml-20 md:justify-start"
        />
      </div>
      <div className="grid  grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className=" w-full flex items-center justify-center md:mb-20 lg:mb-20"
          >
            <CardContainer className="inter-var">
              <CardBody
                className="bg-black hover:shadow-2xl border-white/[0.2] hover:shadow-emerald-500/[0.1] relative group/card 
                dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
                w-full h-[520px] rounded-xl p-6 border flex flex-col justify-between"
              >
                <div>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white mb-2"
                  >
                    {blog.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-md dark:text-neutral-300 line-clamp-4"
                  >
                    {blog.description}
                  </CardItem>
                </div>

                <div>
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={blog.image}
                      height="1000"
                      width="1000"
                      className="h-full lg:h-48 w-full object-contain group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-6">
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
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
