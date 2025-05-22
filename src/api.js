import axios from "axios";

const northcodersNewsApi = axios.create({
  baseURL: "https://northcoders-news-ma.onrender.com/api",
});

export const getArticles = () => {
  return northcodersNewsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (id) => {
  return northcodersNewsApi.get(`/articles/${id}`).then((res) => {
    return res.data;
  });
}

export const getArticleVotesById = (id) => {
  return northcodersNewsApi.get(`/articles/${id}`).then((res) => {
    return res.data.votes;
  });
}

export const getCommentsById = (id) => {
  return northcodersNewsApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
}

export const patchArticleVotesById = (id) => {
  return northcodersNewsApi.patch(`/articles/${id}`, { addedVotes: 1 })
}