'use client';
import { ContactDetails } from '@/Details';
export default function contact() {
  const { email } = ContactDetails;
  return (
    <>
      <main className="container mx-auto max-width section">
        <h1 className="text-center md:text-3xl lg:text-4xl font-bold md:font-bold">
          For any questions please drop a mail
        </h1>
        <h3 className="text-center break-all text-2xl lg:text-6xl md:text-4xl text-gradient font-bold pt-5 min-h-screen">
          <a href={`mailto:${email}`}>{email}</a>
        </h3>
        {/* <span className="text-center text-content text-xl font-light block">
          or
        </span> 
       <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
          <a href={`tel:${phone}`}>{phone}</a>
        </h3> */}
      </main>
    </>
  );
}
