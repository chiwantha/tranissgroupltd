"use client";

import Image from "next/image";
import { useState } from "react";
import WidthWrap from "../../layout/widthwrap/WidthWrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cta = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email";
    if (!form.phone.trim()) return "Phone is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/slide/safari.png"
          alt="background"
          fill
          loading="eager"
          sizes="60vw"
          className="object-cover object-center blur-sm brightness-50 scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <WidthWrap>
        <form
          onSubmit={handleSubmit}
          className="relative z-20 py-12 md:py-20 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center text-center text-shadow-md">
              <h2 className="text-5xl md:text-6xl font-bold text-theme-light-green">
                CONTACT
              </h2>
              <h3 className="text-4xl md:text-5xl font-light text-theme-light-green">
                US <span className="text-gray-400">HERE</span>
              </h3>

              <p className="text-gray-300 mt-4 text-lg font-light leading-5 md:max-w-112.5 self-center">
                Have a question or need help planning your journey? Send us a
                message and we’ll get back to you shortly
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-gray-500 text-lg ml-4">Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={50}
                  placeholder="Full Name"
                  className="w-full mt-2 bg-white/90 focus:bg-white transition py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-theme-light-green"
                />
              </div>

              <div>
                <label className="text-gray-500 text-lg ml-4">Your Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full mt-2 bg-white/90 focus:bg-white transition py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-theme-light-green"
                />
              </div>

              <div>
                <label className="text-gray-500 text-lg ml-4">Contact No</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+94 77 123 4567"
                  className="w-full mt-2 bg-white/90 focus:bg-white transition py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-theme-light-green"
                />
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="text-gray-500 text-lg ml-4">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={500}
                rows={4}
                placeholder="Write your message here..."
                className="w-full mt-2 bg-white/90 focus:bg-white transition p-4 rounded-xl outline-none focus:ring-2 focus:ring-theme-light-green"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-xl bg-theme-light-green text-black font-semibold hover:scale-105 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </WidthWrap>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default Cta;
