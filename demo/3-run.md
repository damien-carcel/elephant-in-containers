## Run the app

Try the obvious
```bash
docker compose run --rm composer php -S localhost:8000
```

Add the missing parts
```bash
docker compose run --rm -p 8000:8000 -w /app/public composer php -S 0.0.0.0:8000
```

Do better by putting that directly in the Compose file
```yaml
services:
  composer:
    environment:
      COMPOSER_HOME: /home/composer/.config/composer
      COMPOSER_CACHE_DIR: /home/composer/.cache/composer
    image: composer:latest
    ports: # add
      - 8000:8000
    user: 1000:1000
    volumes:
      - ./:/app
      - ~/.cache/composer:/home/composer/.cache/composer
      - ~/.config/composer:/home/composer/.config/composer
    working_dir: /app/public # add
```

Simplify the command (do not add `--service-ports` the first time)
```bash
docker compose run --rm --service-ports composer php -S 0.0.0.0:8000
```

Even better:
```yaml
services:
  composer:
    command: php -S 0.0.0.0:8000 # add
    environment:
      COMPOSER_HOME: /home/composer/.config/composer
      COMPOSER_CACHE_DIR: /home/composer/.cache/composer
    image: composer:latest
    ports:
      - 8000:8000
    user: 1000:1000
    volumes:
      - ./:/app
      - ~/.cache/composer:/home/composer/.cache/composer
      - ~/.config/composer:/home/composer/.config/composer
    working_dir: /app/public
```

No more need to run and to specify service ports are enabled
```bash
docker compose up
docker compose up -d
docker compose logs composer
docker compose logs -f composer
docker compose down -v
```
You can still run other commands!
