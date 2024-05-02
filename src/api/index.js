import { config } from "./config";
const endPoints = config?.result?.endpoint;
const settings = config?.result?.settings;

export const API = {
  groupSportsBook: endPoints?.groupSportsBook,
  banner: endPoints?.banner,
  eventDetails: endPoints?.eventDetails,
  login: endPoints?.login,
  bankAccount: endPoints?.bankAccount,
  balance: endPoints?.balance,
  otp: endPoints?.otp,
  whatsApp: endPoints?.whatsapp,
  register: endPoints?.register,
  uploadScreenshot: endPoints?.uploadScreenshot,
  buttonValue: endPoints?.buttonValue,
  changePassword: endPoints.changePassword,
  liveCasinoIFrame: endPoints?.liveCasinoIFrame,
  exposure: endPoints?.exposure,
  currentBets: endPoints?.currentBets,
  order: endPoints.order,
  accountStatement: endPoints?.accountStatement,
  settledBets: endPoints?.settledBets,
  indiaCardGames: endPoints?.indiaCardGames,
  assets: endPoints?.assets,
  internationalCasino: endPoints?.internationalCasino,
  slots: endPoints?.slots,
  homeCasino: endPoints?.homeCasino,
  depositBreakdown: endPoints?.depositBreakdown,
  withdrawBreakdown: endPoints?.withdrawBreakdown,
  accessToken: endPoints?.accessToken,
};

export const Settings = {
  siteUrl: settings?.siteUrl,
  interval: settings?.interval,
  siteTitle: settings?.siteTitle,
  referral: settings.referral,
  balanceApiLoop: settings?.balanceApiLoop,
  register: settings?.registration,
  otp: settings?.otp,
  disabledDevtool: settings?.disabledDevtool,
};
