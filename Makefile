.PHONY: start
start:
	docker compose up -d

.PHONY: build
build:
	docker compose build

.PHONY: up
up:
	docker compose up -d

.PHONY: down
down:
	docker compose down

.PHONY: fclean
fclean:
	docker compose down --rmi all --volumes --remove-orphans

.PHONY: logs
logs:
	docker compose logs -f app

.PHONY: sh
sh:
	docker compose exec app sh