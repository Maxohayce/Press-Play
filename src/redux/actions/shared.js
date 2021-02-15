// API import
import { getInitialData } from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading";

// Action creator imports
import { receivePodcasts } from "./podcasts";
import { receiveUsers } from "./users";

/**
 * Async action creator to handle initial data
 * @return {actionCreator}
 */
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(({ podcasts, users }) => {
    dispatch(receivePodcasts(podcasts));
    dispatch(receiveUsers(users));
    dispatch(hideLoading());
  });
};
