export function formatCurrency(v) {
  const value = String(v);
  return value.replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, '.')
    .replace(/\B(?=(\d{4})+(?!\d)\.?)/g, '.');
}

export function formatNumber(v) {
  return v;
}
