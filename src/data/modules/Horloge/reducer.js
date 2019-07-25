import { HorlogeActions } from './constants';

const initialState = {
  stripeColor: "red",
  initialStripeColor: "pink",
}

export default function (state = initialState, action) {
  switch (action.type) {
    case HorlogeActions.SetStripeColor:
      return { ...state, stripeColor: action.payload.color };
    case HorlogeActions.SetInitialStripeColor:
      return { ...state, initialStripeColor: action.payload.color };
    default:
      return state;
  }
}