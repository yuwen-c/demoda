/** save raw data that returned by fetch API,
 * then process it in selector step
 */
// export const selectCategoriesMap = (state) => state.categories.categoriesMap;

export const selectCategoriesMap = (state) => {
  console.log("categories selector");
  return state.categories.categories.reduce((acc, category) => {
    // use data() method to get the decoded data
    const { title, items } = category;

    acc[title.toLowerCase()] = items;

    return acc;
  }, {});
};
