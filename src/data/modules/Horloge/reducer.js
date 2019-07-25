import { HorlogeActions } from './constants';

const initialState = {
  stripeColor: '#B0E0E6',
  initialStripeColor: '#B0E0E6',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case HorlogeActions.SetStripeColor:
      return { ...state, stripeColor: action.payload.color };
    case HorlogeActions.SetInitialStripeColor:
      return { ...state, initialStripeColor: action.payload.color };
    default:
      return state;
  }
}
