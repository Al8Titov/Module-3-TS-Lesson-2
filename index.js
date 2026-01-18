function totalPrice(options) {
    var price = options.price, discount = options.discount, isInstallment = options.isInstallment, months = options.months;
    var discountedPrice = price * (1 - discount / 100);
    var finalPrice = discountedPrice;
    if (isInstallment) {
        finalPrice = discountedPrice / months;
    }
    return finalPrice;
}
var total = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(total);
