import { useState } from "react";
import NavbarHero from "@/components/NavbarHero";
import MainSections from "@/components/MainSections";
import ContactsFooter from "@/components/ContactsFooter";

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [bookingData, setBookingData] = useState({ name: "", phone: "", dates: "", cabin: "", guests: "" });
  const [bookingSent, setBookingSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ name: "", phone: "", message: "" });
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
        formData={formData}
        setFormData={setFormData}
        formSent={formSent}
        handleFormSubmit={handleFormSubmit}
        bookingData={bookingData}
        setBookingData={setBookingData}
        bookingSent={bookingSent}
        handleBookingSubmit={handleBookingSubmit}
      />
    </div>
  );
}
