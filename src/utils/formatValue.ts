const currency = 'pt-BR';

export const formatValue = (value: number): string =>
  Intl.NumberFormat(currency, {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const formatDate = (date: Date): string =>
  Intl.DateTimeFormat(currency).format(date);
