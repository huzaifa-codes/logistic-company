import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b]  text-gray-300 py-12 border-t-4 border-sky-600">
        <div className="flex flex-col lg:flex-row justify-between container gap-12">

          <div className="max-w-md">
            <h2 className="text-white font-semibold text-lg mb-2 ">
              Velonix Logistics
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6 ">
              Velonix Logistics is a premium transport and freight management
              company focused on reliability, innovation, and customer
              satisfaction. We deliver smart logistics solutions designed to
              keep your business moving forward.
            </p>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Connect With Us
              </h3>
              <div className="flex space-x-4 ">
                <a href="#" className="hover:text-blue-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap  gap-16 text-sm">
            <div className="flex flex-col space-y-2">
              <h4 className="text-white font-semibold  mb-3 uppercase">
                Company
              </h4>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Carriers
              </a>
            </div>

            <div className="flex flex-col space-y-2">
              <h4 className="text-white font-semibold  uppercase">
                Support
              </h4>
              <a href="#" className="hover:text-white  transition-colors">
                Contact Us
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Freight Agent
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Resources
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-800 pt-5 text-xs text-gray-500">
          © {new Date().getFullYear()} Velonix Logistics. All rights reserved.
        </div>
    </footer>
  );
}
