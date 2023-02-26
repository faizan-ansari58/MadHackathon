import { Button, Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
const Introduction: any = () => {
  return (
    <>
      <div>
        <Card className="bg-dark text-white">
          <Card.Img src="/img.jpg" alt="Card image" height={500} />
          <Card.ImgOverlay>
            <br />
            <br />
            <br />
            <Card.Title className="inttext">Our Qualities</Card.Title>
            <br />
            <br />
            <Card.Title className="inttext">
              <span style={{ color: "white", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "World Class Management",
                    "All type of events",
                    "With Discipline",
                    "and Many More",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </Card.Title>
            <br />
            <br />
            <Card.Title style={{ textAlign: "center" }}>
              Our event is devoted to design and development of high-quality
              interfaces and increase of modern gadgets’ usability. Share your
              experience and learn something new at Intense Event!
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
};
export default Introduction;
