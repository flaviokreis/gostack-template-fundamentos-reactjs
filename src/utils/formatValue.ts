const currency = 'pt-BR';

// const formatDate = (date: Date): string =>
//   Intl.DateTimeFormat(currency).format(date);

const formatValue = (value: number): string =>
  Intl.NumberFormat(currency, {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
