.PHONY: build
build:
	docker build -t twitter-clone .

.PHONY: up
up: build
	docker run -d -p 3000:3000 -v $(PWD):/app -v /app/node_modules --name twitter-clone twitter-clone

.PHONY: down
down:
	docker stop twitter-clone || true
	docker rm twitter-clone || true

.PHONY: logs
logs:
	docker logs -f twitter-clone

.PHONY: sh
sh:
	docker exec -it twitter-clone sh