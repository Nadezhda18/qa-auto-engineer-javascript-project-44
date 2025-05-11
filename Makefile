install: установка
	npm ci

brain-games: игра
	node bin/brain-games.js

publish: 
	npm publish --dry-run

make lint:
	npx eslint . 

brain-even: игра
	node bin/brain-even.js

brain-calc: игра
	node bin/brain-calc.js

brain-gcd: игра
	node bin/brain-gcd.js