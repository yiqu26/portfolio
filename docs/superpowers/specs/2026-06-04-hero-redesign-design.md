# Hero 區塊重設計 — 設計文件

日期：2026-06-04
分支：redesign
對象：個人作品集 Hero（首屏），`src/components/Hero.tsx`

## 目標

把首屏從現行「Building things worth exploring.」改成更貼合 LungYi（無正職資歷、轉職全端）背景、且 HR 不會覺得突兀的版本。視覺定調為「星空 × 觀測儀」：黑底星空 + 右下角描繪而出的觀測圓環與繞行衛星、聲納脈衝。經多輪即時原型（`public/hero-demo.html`）收斂而來。

## 文案（定案）

- 標籤（mono，萊姆）：`● Available for work · Taichung`
- 主標題（兩行，遮罩上滑進場）：
  - 第 1 行（白、較大）：`Full-stack developer.`
  - 第 2 行（萊姆、較小）：`Focused on web systems.`
- 敘述（中文，body）：`LungYi — 熟悉 C#、ASP.NET Core 與 React，有 AI 功能整合的實作經驗。`
- 連結（mono）：`View work ↓`（錨點 `#projects`）、`GitHub ↗`（`GITHUB_URL`）
- 直排（mono，左側）：`Portfolio — 2026`
- 右下捲動提示：`(SCROLL ↓)`（沿用現有）

文案原則：陳述事實（角色＋技術棧），不喊成果；「實作經驗」而非「實務經驗」以符合無職場資歷的誠實表述。

## 字級層次（定案：上大下小）

- 第 1 行：`clamp(2.2rem, 7vw, 6rem)`，font-display 800，白
- 第 2 行：`clamp(1.5rem, 4.4vw, 3.5rem)`，font-display 800，`text-accent`
- line-height ≈ 0.92，letter-spacing -0.03em
- 兩句各維持一行（桌機不折行）；身分領頭、萊姆句為精煉補充

## 視覺與動態

### 背景星空（canvas）
- 桌機 80 顆、手機（<640px）40 顆白點，緩速漂移、邊界反彈
- 鄰近點（<150px）以萊姆細線相連，透明度隨距離遞減
- 進場：canvas 整體淡入（autoAlpha 0→1，約 1.6s）

### 觀測儀（SVG，右下角）
- 幾何：`cx = W*0.72`、`cy = H*0.64`、`R = min(W,H)*0.15`
- 主圓環（萊姆 0.5）+ 內層淡圓環（萊姆 0.18，r = R*0.6）：以 strokeDashoffset 描繪而出
- 中心點 `core`（萊姆實心）
- 衛星 `sat`（萊姆實心點）沿主圓環持續繞行（約 12s/圈，等速、不停）
- 聲納脈衝 `ping`：中心每隔數秒發出一圈擴散淡圓（r 由 R*0.3→R*1.5、淡出），repeatDelay ≈ 1.6s
- **無直線十字準星**（先前版本移除：與星空氛圍打架）

### 進場時序（GSAP timeline）
1. 主圓環、內圓環描繪（0.2s 起）
2. 衛星 + 中心點淡入（約 1.2s）
3. 標題兩行遮罩上滑（0.9s 起，stagger）
4. 標籤、敘述、連結淡入上移（1.4s 起）
5. 直排淡入
之後：衛星持續繞行、脈衝循環。

## 無障礙 / RWD

- `prefers-reduced-motion: reduce`：用 `gsap.matchMedia()` 分支 → 不跑星空動畫（畫一張靜態星圖）、不繞圈、不脈衝、文字與圓環直接呈現完成態
- 手機：星點減量、觀測儀隨 `min(W,H)` 自然縮小；字級用 clamp 自適應
- 視窗 resize：重設 canvas 尺寸與幾何、重啟動畫

## 實作備註

- 用專案內 `src/lib/gsap`（`gsap` + `useGSAP`），**不走 CDN**
- 沿用樣式 token：`.font-display`、`.font-mono`、`.text-accent`、`.text-dim`、`.mask`、`--accent`
- grain 已是全域元件（`Grain.tsx`），Hero 不重複加
- 星空 canvas 用 `useRef` + `useEffect`（含 rAF 清理、resize、reduced-motion 判斷）；SVG 觀測儀以 JSX 渲染、GSAP 以 class/ref 操作
- 幾何依 `dims` state（mount + resize 更新）重算
- 完成後刪除 `public/hero-demo.html` 測試檔

## 不做（YAGNI）

- 不加滑鼠互動（光暈跟隨、磁吸）
- 不保留萊姆光暈 blob（星空當底）
- 不做封面揭幕 / glitch / 跑馬燈等其他試驗風格
