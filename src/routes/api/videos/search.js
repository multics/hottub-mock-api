import items from "../../../data/cat_videos.js";

export const searchVideos = (req, res) => {
  const searchResults = items.filter((e) =>
    e.title.toLowerCase().includes(req.body.query.toLowerCase())
  );

  res.json({ items: searchResults, pageInfo: { hasNextPage: false } });
};
