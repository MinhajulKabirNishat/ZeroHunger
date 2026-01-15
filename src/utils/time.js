export const getRemainingTime = (expiryTime) => {
  const now = new Date().getTime();
  const expiry = new Date(expiryTime).getTime();
  const diff = expiry - now;

  if (diff <= 0) {
    return "Expired";
  }

  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor(diff / 1000 / 60 / 60);

  return `${hours}h ${minutes}m left`;
};
