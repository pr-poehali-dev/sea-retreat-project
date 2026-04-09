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

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSent(true);
    setTimeout(() => setBookingSent(false), 4000);
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
