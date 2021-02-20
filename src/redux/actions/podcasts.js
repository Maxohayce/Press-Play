// Type imports
import listenAPI from "../../utils/listenAPI";
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

export const fetchPodcasts = () => (dispatch) =>
  listenAPI
    .get("/best_podcasts")
    .then((res) => dispatch(receivePodcasts(res?.data?.podcasts)))
    .catch((err) => console.log(err));