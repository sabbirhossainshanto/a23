import { config } from "./config";
const endPoints = config?.result?.endpoint;
const settings = config?.result?.settings;

export const API = {
  groupSportsBook: endPoints?.groupSportsBook,
  banner: endPoints?.banner,
  eventDetails: endPoints?.eventDetails,
  login: endPoints?.login,
  bankAccount:endPoints?.bankAccount,
  balance:endPoints?.balance,
  otp:endPoints?.otp,
  whatsApp:endPoints?.whatsapp,
  register:endPoints?.register
};

export const Settings = {
  siteUrl: settings?.siteUrl,
  interval: settings?.interval,
  siteTitle: settings?.siteTitle,
  referral: settings.referral,
  balanceApiLoop:settings?.balanceApiLoop,
  register: settings?.registration,
  otp:settings?.otp
};
