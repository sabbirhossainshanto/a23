import axios from "axios";
import { API, Settings } from "./index";

export const getSetApis = (setNoticeLoaded) => {
  axios
    .get("/notice.json")
    .then((res) => {
      const data = res.data;
      if (data?.result?.endpoint) {
        API.groupSportsBook = data?.result?.endpoint?.groupSportsBook;
        API.banner = data?.result?.endpoint?.banner;
        API.eventDetails = data?.result?.endpoint?.eventDetails;
        API.login = data?.result?.endpoint?.login;
        API.bankAccount = data?.result?.endpoint?.bankAccount;
        API.balance = data?.result?.endpoint?.balance;
        API.otp = data?.result?.endpoint?.otp;
        API.whatsApp = data?.result?.endpoint?.whatsapp;
        API.register = data?.result?.endpoint?.register;
        API.uploadScreenshot = data?.result?.endpoint?.uploadScreenshot;
        API.buttonValue = data?.result?.endpoint?.buttonValue;
        API.changePassword = data?.result?.endpoint?.changePassword;
        API.liveCasinoIFrame = data?.result?.endpoint?.liveCasinoIFrame;
        API.exposure = data?.result?.endpoint?.exposure;
        API.currentBets = data?.result?.endpoint?.currentBets;
        API.order = data?.result?.endpoint?.order;
        API.accountStatement = data?.result?.endpoint?.accountStatement;
        API.settledBets = data?.result?.endpoint?.settledBets;
        API.indiaCardGames = data?.result?.endpoint?.indiaCardGames;
        API.assets = data?.result?.endpoint?.assets;
        API.internationalCasino = data?.result?.endpoint?.internationalCasino;
        API.slots = data?.result?.endpoint?.slots;
        API.homeCasino = data?.result?.endpoint?.homeCasino;
        API.depositBreakdown = data?.result?.endpoint?.depositBreakdown;
        API.withdrawBreakdown = data?.result?.endpoint?.withdrawBreakdown;
        API.notification = data?.result?.endpoint?.notification;
        API.accessToken = data?.result?.endpoint?.accessToken;
        API.ladder = data?.result?.endpoint?.ladder;
        API.forgotPassword = data?.result?.endpoint?.forgotPassword;
        API.siteSettings = data?.result?.endpoint?.siteSettings;
        API.pg = data?.result?.endpoint?.pg;
        API.pgStatus = data?.result?.endpoint?.pgStatus;
        API.otpless = data?.result?.endpoint?.otpless;
        API.casinoGames = data?.result?.endpoint?.casinoGames;
        API.liveCasinoWolf = data?.result?.endpoint?.liveCasinoWolf;
        API.slotsWolf = data?.result?.endpoint?.slotsWolf;
        Settings.siteUrl = data?.result?.settings?.siteUrl;
        Settings.interval = data?.result?.settings?.interval;
        Settings.siteTitle = data?.result?.settings?.siteTitle;
        Settings.referral = data?.result?.settings.referral;
        Settings.balanceApiLoop = data?.result?.settings?.balanceApiLoop;
        Settings.register = data?.result?.settings?.registration;
        Settings.otp = data?.result?.settings?.otp;
        Settings.disabledDevtool = data?.result?.settings?.disabledDevtool;
        Settings.casinoCurrency = data?.result?.settings?.casinoCurrency;
        Settings.apkLink = data?.result?.settings?.apkLink;
        Settings.chaportAppId = data?.result?.settings?.chaportAppId;
        Settings.otpless = data?.result?.settings?.otpless;
        Settings.paymentIntent = data?.result?.settings?.paymentIntent;
        Settings.betFairCashOut = data?.result?.settings?.betFairCashOut;
        Settings.logoFormat = data?.result?.logo?.format;
        Settings.logoHeight = data?.result?.logo?.height;
        Settings.logoWidth = data?.result?.logo?.width;

        setNoticeLoaded(true);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
