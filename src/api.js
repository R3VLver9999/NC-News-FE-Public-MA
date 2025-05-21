import axios from "axios";

const northcodersNewsApi = axios.create({
  baseURL: "https://northcoders-news-ma.onrender.com/api",
});

export const getArticles = () => {
  return northcodersNewsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};
