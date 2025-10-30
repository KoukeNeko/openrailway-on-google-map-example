// API 金鑰設定說明

// Google Maps API Key 設定步驟：
// 1. 前往 Google Cloud Console: https://console.cloud.google.com/
// 2. 建立新專案或選擇現有專案
// 3. 啟用 "Maps JavaScript API"
// 4. 前往 "憑證" 頁面建立 API 金鑰
// 5. 建議設定 API 金鑰限制（HTTP 來源限制）以提高安全性

// 使用方式：
// 在 index.html 中找到以下這行：
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly" async defer></script>
//
// 將 YOUR_API_KEY 替換為您的實際 API 金鑰

// 範例：
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz&callback=initMap&v=weekly" async defer></script>

// 注意事項：
// - 請勿將 API 金鑰提交到公開的版本控制系統
// - 建議設定 API 金鑰的使用限制
// - 可以設定配額和預算上限以避免意外費用

// 測試選項：
// 如果您暫時沒有 Google Maps API Key，可以使用 demo-leaflet.html
// 該版本使用開源的 Leaflet 地圖庫，不需要 API Key
