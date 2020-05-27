import React from "react";
import { Card } from "react-bootstrap";

export default function Post({ id, title, body }) {
  return (
    <Card className="m-1" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{body}</Card.Text>
        <Card.Link href="#">Read More</Card.Link>
      </Card.Body>
    </Card>
  );
}
