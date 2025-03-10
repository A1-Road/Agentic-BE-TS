# Agentic-BE-TS

**English** | [日本語](#japanese)

## Description

Agentic-BE-TS is the backend component of the Agentic project built using the [Nest](https://nestjs.com/) framework. It serves as the main server that handles requests from the frontend and also communicates with Agentic-BE-Python.

## Endpoints

For more details, please refer to [this page](https://cooperative-chive-de7.notion.site/API-Endpoints-1ab0382e4479809d9305df9cde8ed5ef?pvs=4). Currently, the endpoints `auth/register` and `auth/login` are implemented with email and password-based authentication; however, there is an intention to switch to authentication using Apple Face ID.

## Project Setup

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/A1-Road/Agentic-BE-TS.git
   cd Agentic-BE-TS
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create the env file:**

   ```bash
   cp .env.template .env
   ```

   Modify the variables as needed.

4. **Install VSCode extensions:**
   - ESLint
   - Prettier

## Running the Application

The application can be run in various modes:

- **Development Mode:**

  ```bash
  npm run start
  ```

- **Watch Mode (auto-restart on changes):**

  ```bash
  npm run start:dev
  ```

- **Production Mode:**

  ```bash
  npm run start:prod
  ```

## Tests (Not Implemented)

The project includes a comprehensive test setup:

- **Unit Tests:**

  ```bash
  npm run test
  ```

- **End-to-End (e2e) Tests:**

  ```bash
  npm run test:e2e
  ```

- **Test Coverage:**

  ```bash
  npm run test:cov
  ```

## Deployment (Not Implemented)

When you're ready to deploy the NestJS application to a production environment and ensure optimal performance, consider the following steps:

- **Deployment Documentation:** Consult the official [NestJS Deployment Documentation](https://docs.nestjs.com/recipes/deployment) for best practices and guidelines.

- **Cloud Deployment:** You can deploy your NestJS application on AWS using platforms like [Mau](https://mau.nestjs.com/). Mau simplifies the deployment process with commands such as:

  ```bash
  npm install -g mau
  mau deploy
  ```

  This allows you to focus on building features rather than managing infrastructure.

## Resources

For additional information and resources, please refer to:

- **NestJS Documentation:** Visit the [official NestJS documentation](https://docs.nestjs.com/) to learn more about the framework's features and capabilities.

---

# Japanese

[English](#agentic-be-ts) | **日本語**

## 説明

Agentic-BE-TSは、[Nest](https://nestjs.com/)フレームワークを使用して構築されたAgenticプロジェクトのバックエンドコンポーネントです。
フロントエンドからのリクエストを受け付けるメインサーバーで、Agentic-BE-Pythonとも通信を行います。

## エンドポイント

詳細は[こちら](https://cooperative-chive-de7.notion.site/API-Endpoints-1ab0382e4479809d9305df9cde8ed5ef?pvs=4)
現状、`auth/register`と`auth/login`がemailとpasswordによる認証の形で実装済みですが、Apple Face IDを利用した認証に変更したいです。

## プロジェクトのセットアップ

プロジェクトを開始するには、以下の手順に従ってください：

1. **リポジトリをクローンする：**

   ```bash
   git clone https://github.com/A1-Road/Agentic-BE-TS.git
   cd Agentic-BE-TS
   ```

2. **依存関係をインストールする：**

   ```bash
   npm install
   ```

3. **envファイルを作成する：**

   ```bash
   cp .env.template .env
   ```

   各変数を書き換えて下さい。

4. **VSCodeの拡張機能をインストールする**
   - ESLint
   - Prettier

## アプリケーションの実行

アプリケーションは、さまざまなモードで実行できます：

- **開発モード：**

  ```bash
  npm run start
  ```

- **ウォッチモード（変更時に自動再起動）：**

  ```bash
  npm run start:dev
  ```

- **プロダクションモード：**

  ```bash
  npm run start:prod
  ```

## テスト（未実装）

プロジェクトには包括的なテストセットアップが含まれています：

- **ユニットテスト：**

  ```bash
  npm run test
  ```

- **エンドツーエンド（e2e）テスト：**

  ```bash
  npm run test:e2e
  ```

- **テストカバレッジ：**

  ```bash
  npm run test:cov
  ```

## デプロイメント（未実装）

NestJSアプリケーションを本番環境にデプロイする準備ができたら、最適なパフォーマンスを確保するために以下の手順を検討してください：

- **デプロイメントドキュメント：** 公式の[NestJSデプロイメントドキュメント](https://docs.nestjs.com/recipes/deployment)を参照し、ベストプラクティスとガイドラインを確認してください。

- **クラウドデプロイメント：** [Mau](https://mau.nestjs.com/)のようなプラットフォームを利用して、NestJSアプリケーションをAWS上にデプロイすることができます。Mauは以下のようなコマンドでデプロイメントプロセスを簡素化します：

  ```bash
  npm install -g mau
  mau deploy
  ```

  これにより、インフラ管理ではなく、機能の構築に集中することができます。

## リソース

追加の情報やリソースについては、以下を参照してください：

- **NestJSドキュメント：** [公式のNestJSドキュメント](https://docs.nestjs.com/)を参照し、フレームワークの機能や特徴について学んでください。
