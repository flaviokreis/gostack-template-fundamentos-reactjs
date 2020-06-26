const currency = 'pt-BR';

const formatDate = (date: Date): string =>
  Intl.DateTimeFormat(currency).format(date);

export default formatDate;
