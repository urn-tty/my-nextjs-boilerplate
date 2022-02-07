## 主な技術
- [nextjs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [cypress(e2e testing)](https://docs.cypress.io/guides/overview/why-cypress)

## 環境構築手順
パッケージインストール
```bash
yarn install
```
ローカルサーバー立ち上げ
```bash
yarn dev
```

## 環境補足
### build
buildはSSGとして出力することを想定しています
以下を実行すると`out/`に成果物が出力されるので、それをデプロイするイメージ
```bash
yarn build
```
### lint & format
`git commit`するとlint:fixとformatが実行されます

### e2e
以下実行するとe2eが動く
```bash
yarn cypress:run
```
