"use client";

import { useBooking } from "./BookingProvider";

type Props = {
  className?: string;
  children?: React.ReactNode;
  /** Run something first, e.g. close a menu */
  onBeforeOpen?: () => void;
};

/** Any "Schedule A Free Call" button: opens the GHL calendar popup. */
export default function BookCallButton({ className, children = "Schedule A Free Call", onBeforeOpen }: Props) {
  const { openBooking, prefetchBooking } = useBooking();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      // start loading the calendar as soon as the user shows intent
      onPointerEnter={prefetchBooking}
      onFocus={prefetchBooking}
      onTouchStart={prefetchBooking}
      onClick={() => {
        onBeforeOpen?.();
        openBooking();
      }}
      className={className}
    >
      {children}
    </button>
  );
}