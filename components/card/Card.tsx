import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(Props: any) {
  return (
    <Card style={{ width: "60%", marginLeft: "70px", marginTop: "30px" }}>
      <Card.Img className="imgsize" variant="top" src={Props.src} />
      <Card.Body>
        <Card.Title>{Props.title}</Card.Title>
        <Card.Text>{Props.detail}</Card.Text>
        <Button variant="primary">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href={Props.Useref}
          >
            {Props.buttoninfo}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
