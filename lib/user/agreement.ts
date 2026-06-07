export let hasAcceptedAgreement = false;

export function acceptAgreement() {
  hasAcceptedAgreement = true;
}

export function resetAgreement() {
  hasAcceptedAgreement = false;
}

export function getAgreementStatus() {
  return hasAcceptedAgreement;
}
