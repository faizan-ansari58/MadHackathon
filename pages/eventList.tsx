import Cards from "@/components/card/Card";
import _NavBar from "../components/navbar/Navbar";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { app, auth, db } from "../pages/firebaseConfig";

export default function EventList() {
  useEffect(() => {
    GetData();
  }, []);
  const [dbData, SetDbData] = useState<any>([]);
  const GetData = async () => {
    const data = await getDocs(collection(db, "EventData")).then((e) => {
      SetDbData(
        e.docs.map((data) => {
          return data.data();
        })
      );
    });
  };
  return (
    <div>
      <_NavBar login="Logout" signup="Sign Up" Useref={"/loggedinpage"} />
      {/* <Button variant="outline-primary" onClick={GetData}>
        EventData
      </Button>{" "} */}
      <div>
        {/* <h1>Text Date Time Location Description</h1> */}

        {dbData.map((e: any) => {
          return (
            <>
              <div>
                <Container>
                  <br />
                  <br />
                  <br />
                  <Card
                    style={{
                      margin: "auto",
                      width: "18rem",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Body>
                      <Card.Title> Title :{e.title}</Card.Title>
                      <Card.Text>Date: {e.date}</Card.Text>
                      <Card.Text>Time: {e.time}</Card.Text>
                      <Card.Text>Location: {e.location}</Card.Text>
                      <Card.Text>Description: {e.description}</Card.Text>
                      <Button variant="primary">Delete Data</Button>
                      <br />
                      <br />
                      <Button variant="primary">Edit Data Data</Button>
                    </Card.Body>
                  </Card>
                </Container>
              </div>
            </>
          );
        })}
      </div>
         
    </div>
  );
}
