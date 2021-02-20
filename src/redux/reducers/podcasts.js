/**
 * Reducer function for podcasts
 * @param {podcasts} state - current podcasts state
 * @param {action} action - Redux action
 * @return {podcasts} - returned podcasts state
 */
const podcasts = (state = [], action) =>
  ({
    RECEIVE_PODCASTS: action?.podcasts,
  }[action.type] || state);

// Export podcasts reducer
export default podcasts;
