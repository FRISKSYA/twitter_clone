FROM node:18-alpine

WORKDIR /app

# 依存関係のインストールを最適化
COPY package.json package-lock.json ./

# 明示的に必要なパッケージをインストール
RUN npm install @supabase/supabase-js @supabase/ssr
RUN npm ci

# アプリケーションコードのコピー
COPY . .

# 開発モードの場合
CMD ["npm", "run", "dev"]
