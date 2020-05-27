import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class SinglePost extends Component {
  abortController = new AbortController();

  state = {
    postDetail: {},
    loading: false,
  };
  componentDidMount() {
    console.log(this.props);
    const {
      params: { id },
    } = this.props.match;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      signal: this.abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ postDetail: data, loading: false });
      });
  }

  componentWillUnmount() {
    console.log("single post unmount");

    this.abortController.abort();
  }

  render() {
    const { loading, postDetail } = this.state;
    return (
      <Row className="text-left">
        <Col>
          {loading ? (
            <h2>Loading..</h2>
          ) : (
            <div>
              <Link to="/">
                <small>Go Back</small>
              </Link>
              <h1 className="font-weight-bold">{postDetail.title}</h1>
              <p>{postDetail.body}</p>
            </div>
          )}
        </Col>
      </Row>
    );
  }
}
export default SinglePost;
