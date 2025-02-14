import { CHANNELS } from "./channels.js";

const MOCK_RESPONSE = {
  status: "normal",
  latestVersion: "2.1.0",
  isOutdated: true,
  isInvalidVersion: true,
  notices: [
    {
      status: "info",
      message: "👾 Mock Server is running 👾",
      details: "Mock server is running on port 3000",
      priority: false,
      url: "http://localhost:3000/api",
    },
  ],
  channels: CHANNELS,
  subscription: { status: "incomplete" },
  promos: [
    {
      id: "get_pro",
      title: "Get Pro!",
      systemImage: "sparkles",
      subtitle: "Use code HOTTUB10 at checkout to get 10% off your first purchase.",
      gradientType: "linear",
      gradientColors: ["blue", "purple"],
      placement: "navBar",
      startDate: "2025-02-13T21:53:23.205Z",
      endDate: "2025-03-15T21:53:23.205Z",
      actionType: "subscription",
    },
    {
      id: "upgrade_banner",
      title: "🎉 Try Hot Tub Pro for free!",
      systemImage: "sparkles",
      subtitle:
        "Start your 7 day free trial and get access to all features and benefits of Hot Tub Pro. Cancel anytime.",
      gradientType: "linear",
      gradientColors: ["purple", "orange"],
      placement: "homepageBanner",
      startDate: "2025-02-13T21:53:23.205Z",
      endDate: "2025-03-15T21:53:23.205Z",
      actionType: "subscription",
    },
    {
      id: "referral",
      title: "👬 Invite a Friend & Earn Free Months!",
      systemImage: "sparkles",
      subtitle:
        "Share your invite link and both you and your pal will get a free month of Hot Tub Pro when they subscribe.",
      gradientType: "linear",
      gradientColors: ["purple", "orange"],
      placement: "accountView",
      startDate: "2025-02-13T21:53:23.205Z",
      endDate: "2025-03-15T21:53:23.205Z",
      actionType: "subscription",
    },
  ],
  notifications: [
    {
      id: "referral",
      title: "👋 Hi How are you?",
      message: "Testing remote server notifications :)",
      date: "2025-02-13T21:53:23.205Z",
      unread: false,
      url: "https://hottubapp.io",
    },
  ],
  message: "A new version (2.1.0) is available. Downloads available at hottubapp.io. Tap to open.",
};

export const status = (req, res) => {
  console.log("status", req.body);
  res.json(MOCK_RESPONSE);
};
