export type ConsentRecord = {
  accepted: boolean;
  acceptedAt: string | null;
  ipAddress?: string;
};

export let consent: ConsentRecord = {
  accepted: false,
  acceptedAt: null,
};

export function acceptConsent() {
  consent = {
    accepted: true,
    acceptedAt: new Date().toISOString(),
  };
}

export function getConsent() {
  return consent;
}

export function resetConsent() {
  consent = {
    accepted: false,
    acceptedAt: null,
  };
}
