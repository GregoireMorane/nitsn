import { HorlogeActions } from './constants';

export function setStripeColor(color) {
  return {
    type: HorlogeActions.SetStripeColor,
    payload: { color },
  };
}

export function SetInitialStripeColor(color) {
  return {
    type: HorlogeActions.SetInitialStripeColor,
    payload: { color },
  };
}




