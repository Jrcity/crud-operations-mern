import axios from "axios";

const BASE_URL = "http://localhost:4000";

//get all postMessages
const fetchAll = () =>
  axios
    .get(BASE_URL.concat("/postmessage"))
    .then((res) => {
      let { data } = res;

      console.log(res.status, res.data);
      return data;
    })
    .catch((err) => console.log(err));

//get by post id
const fetchById = (id) =>
  axios
    .get(BASE_URL.concat(`/postmessage/${id}`))
    .then((res) => res)
    .catch((err) => console.log(err));

//send post request
const newPost = (data) =>
  axios
    .post(BASE_URL.concat("/postmessage/"), data)
    .then((res) => res)
    .catch((err) => console.log(err));

//send post request
const updatePost = (id) =>
  axios
    .put(BASE_URL.concat(`/postmessage/${id}`))
    .then((res) => res)
    .catch((err) => console.log(err));
//delete post by id
const deletePost = (id) =>
  axios
    .delete(BASE_URL.concat(`/postmessage/${id}`))
    .then((res) => res)
    .catch((err) => console.log(err));

export { fetchAll, fetchById, newPost, updatePost, deletePost };
