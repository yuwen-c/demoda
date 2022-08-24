# demoda 購物網 - 一站買齊你的時尚配件 🛍🛒

> 以 React 框架建構，搭配 Redux 狀態管理，firebase 三方登入功能，帶給你流暢的購物體驗！

## [立即試用](https://yuwen-demoda.netlify.app/)

## 放截圖

## User Story (drawio)

- home page -> choose what you're interested -> shop page -> put the item into cart -> click checkout button -> checkout page

## structure

- 前端 <-> 後端 firebase

## features

### login/ register/ login with google acount

### store product data in firestore

## 使用技術

💡 使用 React 作為前端框架

- 語法類似 javascript，元件各自獨立且可重複使用。
  💡 使用 Redux 做狀態管理
- 將 function 與資料拆分，方便管理及利於 scale，生態系豐富。
  💡 使用 Redux-Thunk 做 async 的狀態管理
- 完全將狀態管理交給 reducer，UI component 只需要接收資料。
  💡 使用 React-Hooks
- 將元件中的邏輯獨立拆分，閱讀性較高。
  💡 使用 React-Router 達到路由功能
- declarative，配置容易，可讀性高。
  💡 利用 Firebase 做第三方登入
- 強大、安全、便利的服務。
  💡 使用 Redux-Persist 記住購物車物品
- 可設定黑名單及白名單。
  💡 styled component 做出 css 效果
- CSS in javacscript，避免全域的 css 衝突，可傳參數控制樣式。
  💡 部署在 Netlify 上
- 與 github 同步，只要推送到特定分支，即可自動部署。
