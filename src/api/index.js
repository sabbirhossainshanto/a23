import { config } from "./config";
const endPoints = config?.result?.endpoint;
const settings = config?.result?.settings;

export const API = {
  groupSportsBook: endPoints?.groupSportsBook,
  banner: endPoints?.banner,
};

export const Settings = {
  siteUrl: settings?.siteUrl,
  interval: settings?.interval,
  siteTitle: settings?.siteTitle,
};
