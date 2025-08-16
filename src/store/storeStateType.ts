export type themeStateType = {
  theme: "day" | "night";
  sidebar: 0 | 1 | 2;
};

export type mainStoreType = {
  themeState: themeStateType;
};
