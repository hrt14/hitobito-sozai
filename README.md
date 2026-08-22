# ひとびと素材

`sozai.hitobito.jp` 用のフリー素材リクエストサイト。

## MVP
- 欲しい素材を日本語でリクエスト
- Firestore の `requests` に pending で保存
- Firebase Scheduled Function が1分ごとに取り込み
- 外部画像生成APIを使わず、SVGパーツの組み合わせで生成
- `materials` に公開し、新着ギャラリーへ反映
- SVG / PNG ダウンロード
- 著名人・既存キャラクター・ロゴ等の簡易公開フィルタ
- Firebase未設定時は数秒で生成するブラウザ内デモモード

## 構成
- Web: Next.js / Vercel
- DB: Cloud Firestore
- Scheduler: Firebase Functions `onSchedule` (1分)
- Generator: deterministic SVG composer（画像生成APIなし）

## セットアップ概要
1. `.env.example` を参考に Vercel へ Firebase Web App の環境変数を設定。
2. Firebase CLI で対象プロジェクトを選び、Firestore rules と Functions をデプロイ。
3. Scheduled Function 利用に必要な Firebase / Google Cloud の課金設定を確認。
4. Vercel プロジェクトへこのリポジトリを接続し、`sozai.hitobito.jp` を割り当て。

本番公開前に、素材の利用規約、公開審査ルール、通報・削除フローを追加する。
