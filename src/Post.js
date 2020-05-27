import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Post({ id, title, body }) {
  return (
    <Card className="m-1 text-md-left" style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title className="font-weight-bold text-capitalize">
          {title}
        </Card.Title>

        <Card.Text>{body}</Card.Text>
        <Link to={`/${id}`}>Read More</Link>
      </Card.Body>
    </Card>
  );
}
