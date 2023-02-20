export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://dex.hulkfiinance.com",
      },
      {
        label: "Liquidity",
        href: "https://dex.hulkfiinance.com/#/pool",
      },
    ],
  },
  {
    label: "Pre-Sale",
    icon: "PreSaleIcon",
    href: "/pre-sale",
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Referrals",
    icon: "ReferralIcon",
    href: "/referral",
  },
  {
    label: "Audits",
    icon: "AuditIcon",
    href: "/audits",
  },
  {
    label: "Listings",
    icon: "ListingIcon",
    items: [
      {
        label: "BscScan",
        href: "/",
      },
      {
        label: "DappRadar",
        href: "/",
      },
      {
        label: "CoinGecko",
        href: "/",
      },
      {
        label: "CoinMarketCap",
        href: "/",
      },
      {
        label: "LiveCoinWatch",
        href: "/",
      },
      {
        label: "Vfat",
        href: "/",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.hulkfiinance.com",
      },
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Docs",
        href: "https://docs.hulkfiinance.com",
      },
      {
        label: "Blog",
        href: "https://hulkfiinance.medium.com",
      },
    ],
  },
];

export const socials: {label: string, icon: string, href: string, items?: {label: string, href: string, }[] }[] = [
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/HulkFinance",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/HulkFinance_DEFI",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
