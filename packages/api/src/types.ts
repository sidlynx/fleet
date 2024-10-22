export const AppStates = ["COMING_SOON", "ONLINE", "MAINTENANCE",] as const;

export type TApiResponse<TPayload,> = {
  payload: TPayload;
};
