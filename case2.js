const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;
const shippingCost = 20000;

const calculateTotal = (price, qty, discount) => {
  const subtotal = price * qty;
  const discountAmount = (discount / 100) * subtotal;
  return subtotal - discountAmount;
};

const calculateShipping = (total) => (total > 500000 ? 0 : shippingCost);

const subtotal = productPrice * quantity;
const discountAmount = (discountPercent / 100) * subtotal;
const finalTotal = calculateTotal(productPrice, quantity, discountPercent);
const actualShippingCost = calculateShipping(finalTotal);
const finalTotalWithShipping = finalTotal + actualShippingCost;

const output = `
Customer: ${customerName}
Product Price: ${productPrice}
Quantity: ${quantity}
Subtotal: ${subtotal}
Discount: ${discountAmount}
Shipping: ${actualShippingCost === 0 ? "Free Shipping" : actualShippingCost}
Final Total: ${finalTotalWithShipping}
`.trim();

console.log(output);