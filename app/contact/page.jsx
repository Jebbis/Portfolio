"use client";
import { Suspense, useRef, useState } from "react";
import useAlert from "@/hooks/useAlert";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import Alert from "@/components/Alert";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    robotAnswer: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.robotAnswer !== "correct") {
      showAlert({
        show: true,
        text: "Please select the correct answer to prove you're not a robot.",
        type: "danger",
      });
      return;
    }
    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: `${form.firstName} ${form.lastName}`,
          to_name: "Lasse",
          from_email: form.email,
          to_email: "lassejesperihamalainen@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              lastName: "",
              firstName: "",
              email: "",
              message: "",
              robotAnswer: "",
            });
          }, [3000]);
        },
        (error) => {
          console.log(error);

          setLoading(false);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      {alert.show && <Alert {...alert} />}
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="md:max-w-[600px] xl:max-w-[460px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque suscipit nostrum aspernatur, commodi odit architecto ex
                  aperiam quo necessitatibus quaerat.
                </p>
              </div>
              {/* info */}
              <div className="flex flex-col gap-4 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>lassejesperihamalainen(at)gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineLocationMarker className="text-2xl" />
                  </span>
                  <span>Helsinki, Finland</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form
                className="flex flex-col gap-6 items-start"
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  {/* first name */}
                  <div className="w-full">
                    <Label htmlFor="name">
                      First name<span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  {/* last name */}
                  <div className="w-full">
                    <Label htmlFor="name">
                      Last name<span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Email<span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Message<span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    required
                    className="min-h-[160px] bg-white/5 border-white/30 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                {/* Robot test */}
                <div className="w-full">
                  <Label htmlFor="name" className="text-xl font-bold">
                    I'm not a robot:
                  </Label>
                  <Label htmlFor="name">How many lakes are in Finland?</Label>
                  <Select
                    name="robot"
                    required
                    onValueChange={(value) =>
                      setForm({ ...form, robotAnswer: value })
                    }
                  >
                    <SelectTrigger
                      id="robot"
                      className="w-full !h-12 bg-white/5 border-white/30 px-4"
                    >
                      <SelectValue placeholder="Select your answer..." />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="wrong">188</SelectItem>
                      <SelectItem value="wrongtwo">880</SelectItem>
                      <SelectItem value="correct">188 000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* button */}
                <button className="btn btn-lg btn-accent" type="submit">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {loading ? "Sending..." : "Send message"}
                    </span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
