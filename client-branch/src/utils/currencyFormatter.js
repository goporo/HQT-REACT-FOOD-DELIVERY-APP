export const formatVND = (value) => {
  const vnCurrencyFormatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });

  return vnCurrencyFormatter.format(value);
};

export const shortFormatVND = (value) => {
  const shortVnCurrencyFormatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    notation: 'compact',
    compactDisplay: 'short'
  });

  return shortVnCurrencyFormatter.format(value);
};
