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

export function setInitialAssiseColor(color) {
  return {
    type: ChairActions.SetInitialAssiseColor,
    payload: { color },
  };
}

export function setInitialDossierColor(color) {
  return {
    type: ChairActions.SetInitialDossierColor,
    payload: { color },
  };
}

export function setInitialDossierLatColor(color) {
  return {
    type: ChairActions.SetInitialDossierLatColor,
    payload: { color },
  };
}
