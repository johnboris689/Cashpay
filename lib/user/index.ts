export type CashPayUser = {
  fullName: string;
  email: string;
  bpcCode: string;
  hasValidBpc: boolean;
};

export let user: CashPayUser = {
  fullName: "",
  email: "",
  bpcCode: "",
  hasValidBpc: false,
};

// Update user data (name, email, BPC code)
export function setUser(data: Partial<CashPayUser>) {
  user = {
    ...user,
    ...data,
  };
}

// Validate BPC code (basic rule for now)
export function validateBpc() {
  const isValid = user.bpcCode.trim().length >= 6;
  user.hasValidBpc = isValid;
  return isValid;
}

// Reset user session (optional utility)
export function resetUser() {
  user = {
    fullName: "",
    email: "",
    bpcCode: "",
    hasValidBpc: false,
  };
}

// Get current user
export function getUser() {
  return user;
}
