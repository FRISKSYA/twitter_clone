.PHONY: build up down logs shell clean

# Docker環境の構築
build:
	docker-compose build

# コンテナの起動
up:
	docker-compose up -d

# 開発モードでフォアグラウンドで起動
dev:
	docker-compose up

# コンテナの停止
down:
	docker-compose down

# コンテナのログを表示
logs:
	docker-compose logs -f

# コンテナ内のシェルにアクセス
shell:
	docker-compose exec nextjs /bin/sh

# Node.jsパッケージのインストール
install:
	docker-compose run --rm nextjs npm install

# npmコマンドの実行（使用例: make npm CMD=install axios）
npm:
	docker-compose run --rm nextjs npm $(CMD)

# キャッシュとビルド成果物の削除
clean:
	docker-compose down
	rm -rf node_modules .next
	docker-compose build --no-cache

# すべてを実行（初回実行用）
setup: build up

# デフォルトコマンド
default: setup
