export const countProperties = (properties) => {
  if (properties.length === 0) return "No properties Found";
  if (properties.length === 1) return "1 Property found";
  return `${properties.length} Properties found`;
};
