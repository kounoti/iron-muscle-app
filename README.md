# Iron Muscle App(筋トレ記録アプリ)

## 概要

"Iron Muscle App"は、筋トレのトレーニング情報を記録、共有できる Web アプリケーションです

## 技術的なアピールポイント

- **モダンなフロントエンドフレームワークの利用**  
  React、Next.js を採用し、高速なパフォーマンスとユーザーエクスペリエンスの向上を実現

- **レスポンシブデザインとモバイル対応**  
  様々なデバイスで快適に利用できるレスポンシブデザインの採用

- **セキュアな認証とデータ管理**  
  Supabase を使用して、ユーザーアカウントの認証やデータの暗号化、セキュリティの強化を実現

- **シンプルかつ使いやすい UI と UX デザイン**  
  シンプルな UI デザインと使いやすい UX を実現し、ユーザーがストレスなくアプリを利用できるように設計

- **コミュニティと共有機能の導入**  
  タイムライン機能を通じてユーザー同士がトレーニング情報を共有し、コミュニティを形成する。

- **迅速な開発と柔軟な拡張性**  
  TypeScript を活用して、迅速な開発とコードの保守性、拡張性を高める。

## デモ画面

![ログイン画面](./Photo_demo/login_demo.png)
登録したメールアドレス、パスワードにてログインします</br>
より簡単にログインできるように Google 認証機能も実装しています</br>
※アカウント登録していない方は Sign up(アカウントの新規登録)をお願いします</br>
</br>

![トップページ](./Photo_demo/TopPage_demo.png)
トレーニング開始ボタンを押して、トレーニングの記録を開始してください</br>
</br>

![トレーニング記録追加画面](./Photo_demo/TrainingMenu_demo.png)
トレーニング情報を選択して、トレーニングを記録するボタンを押してください</br>
</br>

![タイムライン追加選択画面](./Photo_demo/RecordTimeLine_demo.png)
トレーニング情報をタイムラインに追加するかを選択し、必要に応じてコメントを記載してください</br>
</br>

![Muscle History画面](./Photo_demo/TimeLine_demo.png)
他の人が投稿したトレーニング情報を閲覧することができます</br>
</br>

![My Muscle Memory画面](./Photo_demo/MyMuscleMemory_demo.png)
自分の今までのトレーニング情報を確認することができます</br>
</br>

![Profile画面](./Photo_demo/Profile_demo.png)
![Profile編集画面](./Photo_demo/EditProfile_demo.png)
自分のプロフィール情報を確認、編集することができます</br>
</br>

![スマホサイズの画面](./Photo_demo/SmartPhone_demo.png)
Iron Muscle App はスマホ表示にも対応しています</br>

## 機能一覧

- ログイン認証機能
- トレーニング情報の記録
- トレーニング履歴の閲覧
- タイムライン機能

## 開発の背景

[Iron Muscle App](https://muscle-memory-avr0mvrzg-kounotis-projects.vercel.app/)は、個人のトレーニング記録を効果的に管理するためのツールとして生まれました。</br>
日々のトレーニングを記録し、進捗を確認することで、ユーザーのモチベーションを向上させることを目指しています。</br>
さらに、他のユーザーのトレーニング履歴を閲覧できるタイムライン機能を追加することで、ユーザー同士が刺激を受け合い、共に成長するコミュニティを形成することを目指しています。

## 使用技術

- React: 18
- Next.js: 14.1.1
- React Datepicker: 6.2.0
- React Icons: 5.0.1
- React Modal: 3.16.1
- tailwindcss: 3.4.1
- Chakra UI: 2.8.2
- Supabase JS: 2.39.7
- TypeScript: 5.4.3

## 参考資料

- [React 公式ドキュメント](https://ja.react.dev)
- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [Supabase ドキュメント](https://supabase.io/docs)
