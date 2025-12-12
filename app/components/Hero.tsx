import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import React from "react";
import heroImg from "@/public/hero_invoice.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-between py-12 lg:py-20">
      <div className="text-center">
        <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">
          Introduction InvoiceEmran 1.0
        </span>
        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
          Invoicing made{" "}
          <span className="block -mt-2 bg-linear-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            super easy!
          </span>
        </h1>
        <p className="max-w-md mx-auto mt-4 lg:text-lg text-muted-foreground">
          Creating Invoices can b a pain! We at InvoiceEmran make it super easy
          for you to get paid in time!
        </p>
        <div className="mt-7 mb-12">
          <Link href="/login">
            <RainbowButton>Get Unlimited Access</RainbowButton>
          </Link>
        </div>
      </div>
      <div className="relative flex items-center w-full py-12 mx-auto mt-12">
        <svg
          className="absolute inset-0 -mt-24 blur-3xl"
          style={{ zIndex: -1 }}
          fill="none"
          viewBox="0 0 400 400"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <g filter="url(#filter0_f)">
              <path
                d="M128.6 0H0V322.2L106 134.75L128.6 0Z"
                fill="url(#pureBlue)"
              />
              <path
                d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                fill="url(#pureBlue)"
              />
              <path
                d="M320 400H400V78.75L106 134.75L320 400Z"
                fill="url(#pureBlue)"
              />
              <path
                d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                fill="url(#pureBlue)"
              />
            </g>
          </g>

          <defs>
            {/* PURE BLUE GRADIENT */}
            <linearGradient id="pureBlue" x1="0" y1="0" x2="400" y2="400">
              <stop offset="0%" stopColor="#1E40AF" /> {/* Deep Blue */}
              <stop offset="50%" stopColor="#2563EB" /> {/* Blue-600 */}
              <stop offset="100%" stopColor="#3B82F6" /> {/* Blue-500 */}
            </linearGradient>

            <filter
              id="filter0_f"
              x="-160"
              y="-160"
              width="720"
              height="720"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="80" />
            </filter>
          </defs>
        </svg>
        <Image
          src={heroImg}
          alt="hero image for the invoice"
          className="relative object-cover w-full border rounded-lg lg:rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
}
