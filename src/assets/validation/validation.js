const required = (value) => {
  return value ? undefined : 'Поле обязательно для заполнения!';
};

const maxLengthCreator = (maxLength) => (value) => {
  return value.length > maxLength
    ? `Длина текста не должна превышать ${maxLength}`
    : undefined;
};

export {required, maxLengthCreator};
