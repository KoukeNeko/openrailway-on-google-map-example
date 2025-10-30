# OpenRailway on Google Map Example

將 OpenRailway 圖資套疊到 Google Map 上，以同時查看鐵路路網與 Google 地圖。

This example demonstrates how to overlay OpenRailway map data on Google Maps to view railway networks and Google Maps simultaneously.

## Features

- 整合 Google Maps 與 OpenRailway 資料
- 顯示詳細的鐵路路網資訊
- 可切換顯示/隱藏鐵路圖層
- 預設聚焦於台灣地區

## Quick Start

### 1. 取得 Google Maps API Key

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 建立新專案或選擇現有專案
3. 啟用 Maps JavaScript API
4. 建立 API 金鑰

### 2. 設定 API Key

編輯 `index.html` 檔案，將以下行中的 `YOUR_API_KEY` 替換為您的 API 金鑰：

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly" async defer></script>
```

### 3. 開啟網頁

直接在瀏覽器中開啟 `index.html` 檔案，或透過網頁伺服器存取。

建議使用本地伺服器，例如：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (http-server)
npx http-server
```

然後在瀏覽器中訪問 `http://localhost:8000`

## How It Works

此範例使用：
- **Google Maps JavaScript API** - 提供基礎地圖服務
- **OpenRailwayMap Tiles** - 提供鐵路路網圖磚層（來自 OpenStreetMap）

圖磚層透過 Google Maps 的 `ImageMapType` 介面整合，以半透明方式疊加在 Google 地圖之上。

## Data Sources

- Railway data: [OpenRailwayMap](https://www.openrailwaymap.org/) (based on OpenStreetMap)
- Base map: Google Maps

## License

此專案為開源範例。OpenRailwayMap 資料來自 OpenStreetMap，使用 ODbL 授權。