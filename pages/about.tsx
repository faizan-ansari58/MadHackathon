import Footer from "@/components/footer/Footer";
import _Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function Contact() {
  return (
    <>
      <_Navbar login="Log Out" signup="Sign up" Useref={"/loggedinpage"} />
      <div
        style={{
          backgroundImage: "url('/contact.jpg')",
          backgroundSize: "cover",
          color: "black",
          textAlign: "center",
          padding: "100px 0",
        }}
      >
        <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>About Us</h1>
        <p style={{ fontSize: "30px" }}>
          We are a team of experienced event planners who specialize in creating
          memorable events for our clients. With years of experience in the
          industry, we know what it takes to plan and execute successful events
          that exceed our clients' expectations.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          From corporate events to weddings, our team has the expertise to
          handle all types of events. We work closely with our clients to
          understand their vision and bring it to life with our creative ideas
          and attention to detail. We take care of everything, from venue
          selection and catering to entertainment and decor, so that our clients
          can sit back and enjoy their event without any stress or worries.
        </p>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
