export function formatCurrency(v) {
  return v.replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, '.')
    .replace(/\B(?=(\d{4})+(?!\d)\.?)/g, '.');
}

export function formatNumber(v) {
  return v;
}
