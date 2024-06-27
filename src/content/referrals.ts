export interface IReferral {
  name: string,
  description: string,
  link: string,
  imgUrl: string,
}
// https://www.figma.com/file/vdNzAJSm9dl6pTsx3FvcoD/Untitled?type=design&node-id=0-1&mode=design&t=eXmwIPrqPnEpvwQP-0
export default [
  {

    link: "https://urls.sk-project.link/TaAr0v",
    description: "Leading online trading solutions for traders, investors and advisors, with direct global access to stocks, options, futures, currencies, bonds and funds.",
    imgUrl: "assets/images/ibkr-pro.png",
    name: "Interactive Brokers",

  },
  {

    link: 'https://urls.sk-project.link/EaCJlH',
    description: "Sign up for a Bybit account and claim exclusive rewards from the Bybit referral program! Plus, claim up to 6,045 USDT bonus at.",
    imgUrl: "assets/images/bybit.png",
    name: "Bybit",

  },
  {

    link: "https://urls.sk-project.link/wPwWWj",
    description: "Users can easily create a multi-currency account, transfer money, track their transactions, and manage their balances in real-time",
    imgUrl: "assets/images/wise.png",
    name: "Wise",

  },

] as IReferral[];

