export const formatPrice = (price: number) => {
  const priceFormatted = new Intl.NumberFormat('es-MX', {
    style: "currency",
    currency: "MXN",
  })

  const finalPrice = priceFormatted.format(price)

  return finalPrice
}
