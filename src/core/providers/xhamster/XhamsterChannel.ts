import { Channel, ChannelStatus } from "../../types"

export const SORT_OPTIONS = {
  relevance: { id: "relevance", title: "Most Relevant", value: "" },
  new: { id: "new", title: "Newest", value: "sort=newest" },
  views: { id: "views", title: "Most Viewed", value: "sort=views" },
  rating: { id: "rating", title: "Top Rated", value: "sort=rating" },
  duration: { id: "duration", title: "Longest", value: "sort=duration" },
} as const

export const XHAMSTER_CHANNEL: Channel = {
  id: "xhamster",
  name: "XHamster",
  description: "XHamster is a porn site that allows you to watch porn videos for free.",
  favicon: "https://www.google.com/s2/favicons?sz=64&domain=https://xhamster.com",
  status: ChannelStatus.Active,
  options: [
    {
      id: "sort",
      title: "Sort",
      systemImage: "list.number",
      colorName: "indigo",
      options: Object.values(SORT_OPTIONS).map(({ id, title }) => ({ id, title })),
    },
  ],
  categories: [],
  nsfw: true,
  ytdlpCommand: "--format all[vcodec^=avc1][ext=mp4]",
}
