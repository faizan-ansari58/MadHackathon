import React, { useState } from "react";
import _NavBar from "../components/navbar/Navbar";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import { app, auth, db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
export default function CreateEvent() {
  const [info, SetInfo] = useState<any>({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });
  const SubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "EventData"), {
        title: info.title,
        date: info.date,
        time: info.time,
        location: info.location,
        description: info.description,
      });
      alert("Data Sent Successfully!!!!!!!!");
    } catch (error) {
      console.log(error);
    }
    SetInfo({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
  };
  return (
    <>
      <_NavBar login="Log Out" signup="Sign up" Useref={"/loggedinpage"} />
      <div
        style={{
          backgroundImage: "url('/loginback.jpg')",
          backgroundSize: "cover",
          padding: 100,
        }}
      >
        <Container>
          <form action="/create-event" method="POST" onSubmit={SubmitHandler}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              value={info.title}
              id="title"
              name="title"
              required
              onChange={(e) => SetInfo({ ...info, title: e.target.value })}
            />
            <br />
            <br />
            <label htmlFor="date">Date:</label>
            <br />
            <input
              type="date"
              value={info.date}
              id="date"
              name="date"
              required
              onChange={(e) => SetInfo({ ...info, date: e.target.value })}
            />
            <br />
            <br />
            <label htmlFor="time">Time:</label>
            <br />
            <input
              type="time"
              value={info.time}
              id="time"
              name="time"
              required
              onChange={(e) => SetInfo({ ...info, time: e.target.value })}
            />
            <br />
            <br />
            <label htmlFor="location">Location:</label>
            <br />
            <input
              type="text"
              value={info.location}
              id="location"
              name="location"
              required
              onChange={(e) => SetInfo({ ...info, location: e.target.value })}
            />
            <br />
            <br />
            <label htmlFor="description">Description:</label>
            <br />
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>

            <br />

            <button type="submit">Create Event</button>
          </form>
        </Container>
      </div>
      <Footer />
    </>
  );
}
