import { ChairActions } from './constants';

export function setAssiseColor(color) {
  return {
    type: ChairActions.SetAssiseColor,
    payload: { color },
  };
}

export function setDossierColor(color) {
  return {
    type: ChairActions.SetDossierColor,
    payload: { color },
  };
}

export function setDossierLatColor(color) {
  return {
    type: ChairActions.SetDossierLatColor,
    payload: { color },
  };
}
