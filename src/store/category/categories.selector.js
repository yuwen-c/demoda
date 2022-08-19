import { createSelector } from "reselect";

/** version 1 */
// export const selectCategoriesMap = (state) => state.categories.categoriesMap;

/** version 2, "new pattern of always store raw data in redux"
 * save raw data that returned by fetch API,
 * then process it in selector step
 */
// export const selectCategoriesMap = (state) => {
//   console.log("categories selector");
//   return state.categories.categories.reduce((acc, category) => {
//     // use data() method to get the decoded data
//     const { title, items } = category;

//     acc[title.toLowerCase()] = items;

//     return acc;
//   }, {});
// };

/** version 3, use ReSelect to prevent extra re-render
 *
 *  if the cart reducer doesn't change,
 *  then only the first console shows up (selectCategoryReducer)
 *  the second and the third won't execute(selectCategories, selectCategoriesMap )
 */

// 拿到 big state 裡面的 categories Reducer
const selectCategoryReducer = (state) => {
  // console.log("selectCategoryReducer 1");
  return state.categories;
};

// 拿到categories Reducer裡面的 categories property就好，其他的資料不用(if there is sth else)
/** createSelector:
 * first param is input
 * second param is output
 * 兩兩對應，可參考下方例子
 * 如果input沒有變，就不會執行output，會回傳上次的結果
 */
const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    // console.log("selectCategories 2");
    return categoriesSlice.categories;
  }
);

// const selectCategories = createSelector(
//   [selectCategoryReducer, selectCurrentUserReducer],
//   (categoriesSlice, currentUserSlice) => ...
// );

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      // console.log("selectCategoriesMap 3");
      const { title, items } = category;
      acc[title.toLowerCase()] = items;

      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categories) => categories.isLoading
);
