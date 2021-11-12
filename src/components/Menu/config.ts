import { MenuEntry } from '@padswap/uikit'

const config: MenuEntry[] = [
  {
    label: "Network",
    icon: "ToadLogo",
    items: [
      {
        label: "BSC",
        href: "https://padswap.exchange",
      },
      {
        label: "MoonRiver",
        href: "https://movr.padswap.exchange",
      },
    ],
    // calloutClass: "rainbow",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: "LaunchPad",
    icon: "VaultIcon",
    href: "https://movr-dapps.padswap.exchange/launchpad",
  },
  {
    label: "Vault",
    icon: "VaultIcon",
    href: "https://movr-dapps.padswap.exchange/vault",
  },
  {
    label: 'Liquidity Farm',
    icon: 'PoolIcon',
    href: 'https://movr-dapps.padswap.exchange/lpfarms',
  },
  {
    label: 'Farms',
    icon: 'ChartIcon',
    href: 'https://movr-dapps.padswap.exchange',
  },
  {
    label: 'Stats',
    icon: 'ChartIcon',
    href: 'https://movr-info.padswap.exchange',
  },
  {
    label: "TOAD",
    icon: "ToadLogo",
    items: [
      {
        label: "Farms",
        href: "https://toad.network/#/why_choose",
      },
      {
        label: "LP Farms",
        href: "https://toad.network/lpfarming.html",
      },
      {
        label: "Church",
        href: "https://toadnetwork.church",
      },
    ],
    // calloutClass: "rainbow",
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/ToadNetwork",
      },
      {
        label: "Medium",
        href: "https://toadytoad.medium.com/",
      },
    ],
  },
]

export default config
