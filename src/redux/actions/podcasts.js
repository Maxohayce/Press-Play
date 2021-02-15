// Type imports
import { RECEIVE_PODCASTS } from "./types";

/**
 * Action creator for received podcasts
 * @param {podcasts} podcasts - Podcasts received from fetch
 * @return {action} - Action to dispatch
 */
export const receivePodcasts = (podcasts) => ({
  type: RECEIVE_PODCASTS,
  podcasts,
});
