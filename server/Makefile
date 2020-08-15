include .env

.PHONY: run-dev

run-dev:
	@echo "---- Running Database: Proffy ----"
	@docker-compose down
	@docker-compose up -d

.PHONY: stop-dev

stop-dev:
	@docker-compose down