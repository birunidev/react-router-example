import React from "react";
import { Row, Col } from "react-bootstrap";
import Post from "./Post";

class Posts extends React.Component {
  abortController = new AbortController();
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: this.abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data, loading: false });
      });
  }

  componentWillUnmount() {
    console.log("unmount");
    this.abortController.abort();
  }

  render() {
    const { loading, posts } = this.state;
    return (
      <Row className="justify-content-center">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          posts.map((post, index) => {
            return (
              <Col xs={12} md={3} lg={4} key={index}>
                <Post id={post.id} title={post.title} body={post.body} />
              </Col>
            );
          })
        )}
      </Row>
    );
  }
}
export default Posts;
