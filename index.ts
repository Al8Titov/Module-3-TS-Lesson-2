interface PriceOptions {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

function totalPrice(options: PriceOptions): number {
  const { price, discount, isInstallment, months } = options;

  const discountedPrice = price * (1 - discount / 100);

  let finalPrice = discountedPrice;

  if (isInstallment) {
    finalPrice = discountedPrice / months;
  }

  return finalPrice;
}


const total = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(total); 
