import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
}

// Set default props for Indian currency format
Price.defaultProps = {
  locale: 'en-IN',  // Set default locale to Indian
  currency: 'INR',  // Set default currency to INR
};
