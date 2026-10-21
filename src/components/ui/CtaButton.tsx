"use client";

import { PhoneCall } from "lucide-react";
import BookCallButton from "@/components/booking/BookCallButton";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0f2b5c] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#123159] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 sm:text-sm";

/** The standard "Schedule A Free Call" button used across service pages. Opens the booking popup. */
export default function CtaButton({
  label = "Schedule A Free Call",
  className = "",
  icon = false,
}: {
  label?: string;
  className?: string;
  icon?: boolean;
}) {
  return (
    <BookCallButton className={`${base} ${className}`}>
      {icon && <PhoneCall aria-hidden className="h-4 w-4" />}
      {label}
    </BookCallButton>
  );
}