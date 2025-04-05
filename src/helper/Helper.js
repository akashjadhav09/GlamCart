export function convertPriceToRupees(price) {
    const conversionRate = 83;
    return (price * conversionRate).toFixed(2);
}