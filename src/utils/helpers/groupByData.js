/**
 * 
 * @param {string | number} names 
 * @returns 
 */
export const groupByData = (names) =>
  names?.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {});
