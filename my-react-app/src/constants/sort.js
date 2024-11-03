export const sortFunctions = {
  "High Price": (a, b) => b.price - a.price,
  "Low Price": (a, b) => a.price - b.price,
  "High Rate": (a, b) => b.rating - a.rating,
  "Low Rate": (a, b) => a.rating - b.rating,
  Newest: (a, b) => b.id - a.id,
  Oldest: (a, b) => a.id - b.date,
};

export const sortTypes = Object.keys(sortFunctions);
