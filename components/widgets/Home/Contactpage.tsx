'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row mt-20 bg-black text-white">
      {/* LEFT SIDE - IMAGE */}
      <div
        className="md:w-1/2 w-full bg-cover bg-center relative flex items-center justify-center p-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl md:text-5xl leading-[1.2] font-bold mb-4">
            Connect with <span className="text-sky-500">Velonix Logistics</span>
          </h1>
          <p className="text-gray-300 mt-2 text-lg">
            Tell us a little about yourself and we’ll be in touch.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-[#111] p-10">
        <form
          className="w-full max-w-lg space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold block mb-1">
                FIRST NAME
              </label>
              <Input
                type="text"
                placeholder="Enter your first name"
                className="border-gray-700 focus-visible:border-sky-600 focus-visible:ring-sky-600/50 focus-visible:ring-[3px]"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">
                LAST NAME
              </label>
              <Input
                type="text"
                placeholder="Enter your last name"
                className="border-gray-700 focus-visible:border-sky-600 focus-visible:ring-sky-600/50 focus-visible:ring-[3px]"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold block mb-1">EMAIL</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-gray-700 focus-visible:border-sky-600 focus-visible:ring-sky-600/50 focus-visible:ring-[3px]"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">
                PHONE NUMBER
              </label>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                className="border-gray-700 focus-visible:border-sky-600 focus-visible:ring-sky-600/50 focus-visible:ring-[3px]"
              />
            </div>
          </div>

          {/* City & State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold block mb-1">CITY</label>
              <Input
                type="text"
                placeholder="Enter your city"
                className="border-gray-700 focus-visible:border-sky-600 focus-visible:ring-sky-600/50 focus-visible:ring-[3px]"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">
                STATE / REGION
              </label>
              <Input
                type="text"
                placeholder="Enter your state"
                className="border-gray-700 focus-visible:border-sky-600 focus-visible:ring-sky-600/50 focus-visible:ring-[3px]"
              />
            </div>
          </div>

          {/* Select Field */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              WHAT WOULD YOU LIKE TO DO?
            </label>
            <select
              className={cn(
                "w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm text-white outline-none",
                "focus:border-sky-600 focus:ring-2 focus:ring-sky-600/40"
              )}
            >
              <option value="">Please Select</option>
              <option value="sales" className="text-black">
                Sales Inquiry
              </option>
              <option value="support" className="text-black">
                Support
              </option>
              <option value="media" className="text-black">
                Press & Media
              </option>
            </select>
          </div>

          {/* Message Box */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              MESSAGE DETAILS
            </label>
            <textarea
              placeholder="Write your message here..."
              className="w-full h-32 rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/40"
            ></textarea>
          </div>

          {/* Submit Button */}
          <Button variant="sky" size="lg" className="w-full mt-4">
            Connect With Us
          </Button>
        </form>
      </div>
    </section>
  );
}
