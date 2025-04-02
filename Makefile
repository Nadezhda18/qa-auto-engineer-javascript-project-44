install: установка
	npm ci

brain-games: игра
	node bin/brain-games.js

publish: 
	npm publish --dry-run