export const etherToCookie = (amount: string, etherPrice: string) => {
  return String(Math.round(+etherPrice * +amount / 0.5));
}
