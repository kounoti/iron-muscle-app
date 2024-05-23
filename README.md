# Iron Muscle App

## 概要

"Iron Muscle App"は、筋トレを始めたばかりでトレーニング方法に迷っている人や、
筋トレのモチベーションを保つのが難しいと感じている人に向けたアプリです。</br>

## デモ画面

![ログイン画面](./Photo_demo/login_demo2.png)
登録したメールアドレス、パスワードにてログインします</br>
より簡単にログインできるように Google 認証機能も実装しています</br>
※アカウント登録していない方は Sign up(アカウントの新規登録)をお願いします</br>
</br>

![トップページ](./Photo_demo/TopPage_demo3.png)
トレーニング開始ボタンを押して、トレーニングの記録を開始してください</br>
</br>

![トレーニング記録追加画面](./Photo_demo/TrainingMenu_demo3.png)
トレーニング情報を選択して、トレーニングを記録するボタンを押してください</br>
</br>

![My Muscle Memory画面](./Photo_demo/MyMuscleMemory_demo2.png)
自分の今までのトレーニング情報(My Muscle Memory)を確認することができます</br>
</br>

![タイムライン追加選択画面](./Photo_demo/RecordTimeLine_demo2.png)
トレーニング情報(My Muscle Memory)ページの投稿ボタンを押すと、トレーニング情報をタイムラインへ投稿することができます</br>
必要に応じてコメントも記載してください</br>
</br>

![Muscle History画面](./Photo_demo/TimeLine_demo3.png)
タイムライン画面では他の人が投稿したトレーニング情報を閲覧することができます</br>
</br>

![Profile画面](./Photo_demo/Profile_demo3.png)
![Profile編集画面](./Photo_demo/EditProfile_demo3.png)
自分のプロフィール情報を確認、編集することができます</br>
</br>

![AI Muscle Trainer画面](./Photo_demo/AITrainer_demo3.png)
![AI Muscle Trainer Answer画面](./Photo_demo/AITrainerAnswer_demo3.png)
AI Muscle Trainer では、トレーニングや健康に関する質問に AI が答えます。</br>
例を参考に質問してください</br>
</br>

![スマホサイズの画面](./Photo_demo/SmartPhone_demo3.png)
トレーニングの合間に簡単にトレーニング記録を入力できるように、Iron Muscle App はスマホ表示にも対応しています</br>

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

- **AI Muscle Trainer の導入**  
  AI Muscle Trainer は、トレーニングや適切な鍛え方に関する質問に答える機能です。ユーザーが質問すると、AI が適切な回答を提供します。

## 機能一覧

- ログイン認証機能
- トレーニング情報の記録
- トレーニング履歴表示機能(カレンダー表示、テーブル表示)
- タイムライン機能
- AI 回答機能

## 開発の背景

[Iron Muscle App](https://ironmuscleapp.vercel.app/)は、筋トレ始めたての方や、モチベーションを持続させるのが難しいと感じる方に向けて開発しました。</br>
筋トレは個々の目標や体力に応じて多様な方法があり、筋トレ初心者の方やモチベーションを保つのが難しい人々にとっては、正しいトレーニング方法の把握や継続的な記録が重要です</br>
Iron Muscle App では、個人のトレーニング履歴を効果的に管理し、他のユーザーとのコミュニケーションを通じて刺激を受け、モチベーションを高める機能を提供しています</br>
他のユーザーのトレーニング履歴を閲覧できるタイムライン機能を追加することで、ユーザー同士が刺激を受け合い、共に成長するコミュニティを形成することを目指しています</br>
さらに、AI Muscle Trainer 機能を追加することで、トレーニングに関する基本的な知識や意識すべきポイント、情報を提供することで、トレーニング初心者でも安心して始めることができるようにしています</br>

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
- generative-ai: 0.11.0

## 参考資料

- [React 公式ドキュメント](https://ja.react.dev)
- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [Supabase ドキュメント](https://supabase.io/docs)
