/** save raw data that returned by fetch API,
 * then process it in selector step
 */
// export const categoriesMap = (state) => state.categories.categoriesMap;

export const categoriesMap = (state) => {
  return state.categories.categories.reduce((acc, category) => {
    // use data() method to get the decoded data
    const { title, items } = category;

    acc[title.toLowerCase()] = items;

    return acc;
  }, {});
};
