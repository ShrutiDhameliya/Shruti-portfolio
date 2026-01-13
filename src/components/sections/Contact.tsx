"use client";

import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import NeonButton from "../ui/NeonButton";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const contactInfo = {
    email: "spdhameliya5@gmail.com",
    phone: "931-330-6409",
    location: "Surat, Gujarat - 395008"
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com", icon: <FaLinkedin /> },
    { name: "X", url: "https://x.com", icon: <FaXTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com", icon: <FaInstagram /> },
  ];

  return (
    <Section id="contact" className="pb-32">
      <div className="max-w-5xl mx-auto">
        <GlassCard className="p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
            Have a project in mind? Want to collaborate or just say hi?
            I'm always open to new opportunities and interesting conversations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary text-xl">
                <FaEnvelope />
              </div>
              <h3 className="font-semibold text-white">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors text-sm">{contactInfo.email}</a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary text-xl">
                <FaPhone />
              </div>
              <h3 className="font-semibold text-white">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition-colors text-sm">{contactInfo.phone}</a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary text-xl">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-semibold text-white">Location</h3>
              <span className="text-gray-400 text-sm">{contactInfo.location}</span>
            </div>
          </div>

          <NeonButton onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
            Say Hello
          </NeonButton>

          <div className="mt-16 pt-8 border-t border-white/5 flex justify-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-500 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
