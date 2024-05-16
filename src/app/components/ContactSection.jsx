/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <>
      <section className="text-white py-8 px-4 xl:py-16 xl:px-16">
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-5">
              Hello there!{" "}
            </h3>
            <p className="text-base lg:text-lg mt-5">
              Thank you for taking the time to explore my portfolio. If you're
              interested in discussing potential opportunities or have any
              inquiries, I'd love to hear from you. Please feel free to reach
              out using the contact form below, and I'll get back to you as soon
              as possible. Looking forward to connecting with you!
            </p>
            <p className="text-base lg:text-lg mt-10">Best Regards,</p>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-5">
              Navaphan Singkaew
            </h3>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/contact.jpg"
              width={500}
              height={500}
              className="rounded-xl"
              alt="contact logo"
            />
          </div>
        </div>
      </section>
      <section className="text-white">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Get in touch with Social Media
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 m-4 md:m-16">
          {[
            {
              href: "https://www.facebook.com/navaphan.singkaew",
              src: "/images/facebook.png",
              alt: "facebook logo",
              label: "Navaphan Singkaew"
            },
            {
              href: "https://www.linkedin.com/in/navaphan-singkaew-bb9575240/",
              src: "/images/linkedin.png",
              alt: "linkedin logo",
              label: "Navaphan Singkaew"
            },
            {
              href: "https://github.com/copcrush",
              src: "/images/github.png",
              alt: "github logo",
              label: "copcrush"
            },
            {
              href: "mailto:navaphan.si@gmail.com",
              src: "/images/gmail.png",
              alt: "gmail logo",
              label: "navaphan.si@gmail.com"
            },
            {
              href: "https://www.instagram.com/copcrush/",
              src: "/images/instagram.png",
              alt: "instagram logo",
              label: "copcrush"
            },
            {
              href: "tel:+66969242515",
              src: "/images/phone.png",
              alt: "phone logo",
              label: "096-924-2515"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-3 px-3 rounded-full border-2 text-white border-purple-500 bg-[#181818] hover:border-white cursor-pointer text-center"
            >
              <Image src={item.src} width={30} height={30} alt={item.alt} />
              <Link href={item.href} className="px-5 font-semibold text-md mt-2">
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactSection;


