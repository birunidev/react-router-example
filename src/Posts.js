import React from "react";
import { Row, Col } from "react-bootstrap";
import Post from "./Post";

class Posts extends React.Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ posts: res, loading: false });
      });
  }

  render() {
    const { loading, posts } = this.state;
    return (
      <Row className="justify-content-center">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          posts.map(post => {
            return (
              <Col xs={12} md={4}>
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
