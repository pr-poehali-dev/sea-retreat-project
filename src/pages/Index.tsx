import { useState } from "react";
import NavbarHero from "@/components/NavbarHero";
import MainSections from "@/components/MainSections";
import ContactsFooter from "@/components/ContactsFooter";

export default function Index() {
  const [bookingData, setBookingData] = useState({ name: "", phone: "", dates: "", cabin: "", guests: "" });
  const [bookingSent, setBookingSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("https://functions.poehali.dev/bfc83f06-5a9a-4b9f-b7ac-3598ff3bc98d", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...bookingData, checkout: bookingData.guests, form_type: "booking" }),
    });
    setBookingSent(true);
    setTimeout(() => setBookingSent(false), 5000);
    setBookingData({ name: "", phone: "", dates: "", cabin: "", guests: "" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavbarHero scrollTo={scrollTo} />
      <MainSections scrollTo={scrollTo} />
      <ContactsFooter
        scrollTo={scrollTo}
        bookingData={bookingData}
        setBookingData={setBookingData}
        bookingSent={bookingSent}
        handleBookingSubmit={handleBookingSubmit}
      />
    </div>
  );
}