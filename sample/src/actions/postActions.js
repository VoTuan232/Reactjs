import axios from "axios";

export const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    id,
  };
};

export const getPost = (data) => {
  return {
    type: "GET_POSTS",
    posts: data,
  };
};

export const getPostRequest = () => {
  return async (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      dispatch(getPost(res.data));
    });
  };
};
