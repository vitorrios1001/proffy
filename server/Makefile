include .env

.PHONY: run-dev

run-dev:
	@echo "---- Running Database: Proffy develop ----"
	@docker-compose -f docker-compose.dev.yml down
	@docker-compose -f docker-compose.dev.yml up -d

.PHONY: deploy

deploy:
	@[ -f .env ] 
	@echo "---- Updating project ----"
	@git pull
	@npm install
	@echo "---- Running Database: Proffy Production----"
	@docker-compose -f docker-compose.yml down
	@docker-compose -f docker-compose.yml up -d
	@echo "---- Building Application ----"
	@npm run build
	@echo "---- Running migration ----"
	@npm run knex:migrate
	@echo "---- Start application ----"
	@pm2 restart proffy

.PHONY: stop-dev

stop-dev:
	@echo "---- Stoping Database: Proffy develop ----"
	@docker-compose -f docker-compose.dev.yml down