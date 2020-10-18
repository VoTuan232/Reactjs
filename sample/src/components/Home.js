import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";
import { getPostRequest } from "../actions/postActions";

class Home extends Component {
  changePost = () => {
    this.props.getPostRequest();
  };

  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
          <button onClick={this.changePost}>Re render</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostRequest: async () => {
      await dispatch(getPostRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
