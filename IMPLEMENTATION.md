# OpenRailway on Google Map Example - 實作說明

## 概述
此範例展示如何將 OpenRailwayMap 的鐵路路網資料套疊到 Google Maps 上。

## 核心實作原理

### 1. 使用 Google Maps ImageMapType
```javascript
const railwayTileLayer = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        return `https://tiles.openrailwaymap.org/standard/${zoom}/${coord.x}/${coord.y}.png`;
    },
    tileSize: new google.maps.Size(256, 256),
    name: 'Railway',
    maxZoom: 18,
    minZoom: 2,
    opacity: 0.7
});
```

### 2. 將圖層加入地圖
```javascript
map.overlayMapTypes.push(railwayTileLayer);
```

### 3. 圖層控制
透過調整 opacity 來切換顯示/隱藏：
```javascript
railwayTileLayer.setOpacity(0);    // 隱藏
railwayTileLayer.setOpacity(0.7);  // 顯示
```

## OpenRailwayMap 圖磚服務

OpenRailwayMap 提供免費的圖磚服務：
- 標準圖層: `https://tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png`
- 最大比例尺: zoom level 18
- 最小比例尺: zoom level 2
- 圖磚大小: 256x256 pixels

## 資料來源與授權

- **OpenRailwayMap**: https://www.openrailwaymap.org/
- **資料來源**: OpenStreetMap contributors
- **授權**: Open Database License (ODbL)
- **圖磚服務**: 免費使用，但請遵守使用條款

## 技術細節

### 座標系統
- 使用 Web Mercator 投影 (EPSG:3857)
- 圖磚切割遵循 XYZ tile scheme

### 效能考量
- 圖磚會被快取在瀏覽器中
- 只載入可視範圍內的圖磚
- 透過 opacity 控制可以避免重複載入

### 相容性
- 支援所有現代瀏覽器
- 需要 Google Maps JavaScript API v3
- 行動裝置友善

## 進階應用

### 1. 添加更多圖層
可以同時疊加多個圖層：
```javascript
map.overlayMapTypes.push(railwayTileLayer);
map.overlayMapTypes.push(anotherLayer);
```

### 2. 動態調整透明度
使用滑桿控制透明度：
```javascript
slider.addEventListener('input', function(e) {
    railwayTileLayer.setOpacity(e.target.value / 100);
});
```

### 3. 自訂圖層樣式
OpenRailwayMap 提供不同的圖層樣式：
- 標準: `/standard/`
- 最大速度: `/maxspeed/`
- 信號: `/signals/`

## 故障排除

### 圖層無法顯示
1. 檢查 API Key 是否正確
2. 確認網路連線正常
3. 查看瀏覽器控制台是否有錯誤訊息

### 圖磚載入緩慢
1. 檢查網路速度
2. OpenRailwayMap 伺服器可能暫時負載較高
3. 考慮實作圖磚快取策略

## 參考資料

- [Google Maps JavaScript API 文件](https://developers.google.com/maps/documentation/javascript)
- [OpenRailwayMap API 文件](https://wiki.openstreetmap.org/wiki/OpenRailwayMap)
- [Map Tile 規範](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames)
