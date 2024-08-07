import { useEffect, useState } from "react";
import { apiClient } from "../../api";

// Load the article and the comments
// increment the vote count <-- with optimistic updates
// create a new comment <-- with optimistic updates?

export const useArticle = (id) => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getArticle(id), getComments(id)])
      .then(([article, comments]) => {
        setArticle({ ...article, comments });
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  const vote = async () => {
    setArticle({ ...article, votes: article.votes + 1 });
    await patchArticle(id)
      .then((res) => {
        setArticle({ ...article, ...res.data });
      })
      .catch((err) => {
        setArticle({ ...article, votes: article.vote - 1 });
        setError(err);
      });
  };

  const comment = async ({ body, author }) => {
    await postComment(id, author, body)
      .then(() => getComments(id))
      .then((comments) => setArticle({ ...article, comments }))
      .catch((err) => {
        setError(err);
      });
  };

  return { error, article, vote, comment };
};

const getArticle = async (id) => {
  const { article } = await apiClient
    .get(`/api/articles/${id}`)
    .then((res) => res.data);

  return article;
};

const getComments = async (id) => {
  const { comments } = await apiClient
    .get(`/api/articles/${id}/comments`)
    .then((res) => res.data);

  return comments;
};

const patchArticle = async (id) => {
  return apiClient.request({
    method: "PATCH",
    url: `/api/articles/${id}`,
    data: { inc_votes: 1 },
  });
};

const postComment = async (id, author, body) => {
  await apiClient.request({
    method: "POST",
    url: `/api/articles/${id}/comments`,
    data: { author, body },
  });
};
