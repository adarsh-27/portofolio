"use client";
import React, { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import WorldMap from "./WorldMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.firstname,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );

      if (response.status === 200) {
        console.log("Email sent successfully:", response);

        toast.success("Message sent successfully!", {duration:5000});

        setFormData({
          firstname: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.", {duration: 6000});
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const MemoizedGlobe = useCallback(<WorldMap />, []);

  return (
    <div className="flex justify-center items-center gap-x-28 h-screen" id="contact">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-lg w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
          Let&apos;s build something awesome together
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="firstname" className="text-white">
              Name
            </Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject" className="text-white">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Project Inquiry"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message" className="text-white">
              Your Message
            </Label>
            <Input
              id="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-md"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
      <div className="relative w-2/6 h-4/6">
       {/* <WorldMap/> */}
       {MemoizedGlobe}
      </div>
    </div>
  );
};

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
