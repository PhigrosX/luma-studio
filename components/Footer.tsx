"use client";

import {
  Mail,
  Phone,
  MapPin,
  //   Facebook,
  //   Instagram,
  //   Twitter,
  Globe,
  Sparkles,
} from "lucide-react";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/ui/hover-footer";
import { FOOTER_QUICK_LINKS, FEATURED_STYLES } from "@/lib/constants";

export default function Footer() {
  // Footer link data adapted from constants
  const footerLinks = [
    {
      title: "Quick Links",
      links: FOOTER_QUICK_LINKS,
    },
    {
      title: "Featured Styles",
      links: FEATURED_STYLES.map((style) => ({
        label: style,
        href: `#${style.toLowerCase().replace(/\s+/g, "-")}`,
      })),
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-primary" />,
      text: "hello@lumastudio.ai",
      href: "mailto:hello@lumastudio.ai",
    },
    {
      icon: <Phone size={18} className="text-primary" />,
      text: "+1 800 123 4567",
      href: "tel:+18001234567",
    },
    {
      icon: <MapPin size={18} className="text-primary" />,
      text: "San Francisco, CA",
    },
  ];

  // Social media icons
  const socialLinks = [
    // { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    // { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    // { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Globe size={20} />, label: "Globe", href: "#" },
  ];

  return (
    <footer className="relative h-fit rounded-[2.25rem] overflow-hidden m-4 sm:m-8 bg-card border border-border">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-primary" size={28} />
              <span className="text-foreground text-3xl font-bold">Luma</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Luma Studio is a modern AI-powered image generation and styling
              platform.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a
                      href={link.href}
                      className="hover:text-primary text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-foreground text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-border my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-muted-foreground">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-primary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Luma Studio. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="LUMA" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
