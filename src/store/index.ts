import { model } from "@/packages/model";

export interface UIModel {
  code: string;
  date: string;
  customize: "news" | "macd";
}

export const $UI = model<UIModel>("UI", {
  code: "000300",
  date: "unknown",
  customize: "news",
});

export interface SearchModel {
  text: string;
}

export const $Search = model<SearchModel>("SEARCH", {
  text: "",
});

export interface UserModel {
  isLogin: boolean;
}

export const $User = model<UserModel>("USER", {
  isLogin: !(localStorage.getItem("isLogin") == null),
});
