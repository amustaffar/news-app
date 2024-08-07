import { useEffect, useState } from "react";
import { apiClient } from "../../api";

// Load the article and the comments
// increment the vote count <-- with optimistic updates
// create a new comment <-- with optimistic updates?

export const useArticle = (id) => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArticle(id)
      .then((res) => {
        setArticle(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  const vote = async () => {
    setArticle({ ...article, votes: article.votes + 1 });
    await patchArticle(id).catch((err) => {
      setArticle({ ...article, votes: article.vote - 1 });
      setError(err);
    });
  };

  return { error, article, vote };
};

const loadArticle = async (id) => {
  const { article } = await apiClient
    .get(`/api/articles/${id}`)
    .then((res) => res.data);

  const { comments } = await apiClient
    .get(`/api/articles/${id}/comments`)
    .then((res) => res.data);

  return {
    ...article,
    comments,
  };
};

const patchArticle = async (id) => {
  await apiClient.request({
    method: "PATCH",
    url: `/api/articles/${id}`,
    data: { inc_votes: 1 },
  });
};
