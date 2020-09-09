run-dev:
	@echo "---- Running Database: Proffy develop ----"
	@docker-compose -f docker-compose.dev.yml down
	@docker-compose -f docker-compose.dev.yml up -d

stop-dev:
	@echo "---- Stoping Database: Proffy develop ----"
	@docker-compose -f docker-compose.dev.yml down

run-test:
	@echo "---- Running Database: Proffy testtest ----"
	@docker-compose -f docker-compose.test.yml down
	@docker-compose -f docker-compose.test.yml up -d

stop-test:
	@echo "---- Stoping Database: Proffy test ----"
	@docker-compose -f docker-compose.test.yml down

deploy:
	@[ -f .env ] 
	@echo "---- Updating project ----"
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
