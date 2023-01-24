## Use Docker Compose for the app

First, only set composer in a compose file.

```yaml
services:
  composer:
    image: composer:latest
    user: 1000:1000
    volumes:
      - ./:/app
```

```bash
docker compose run --rm composer composer install
```

Configure composer cache and config in the container, and add more volumes to share your own composer cache and config with the container
```yaml
services:
  composer:
    environment: # add
      COMPOSER_HOME: /home/composer/.config/composer
      COMPOSER_CACHE_DIR: /home/composer/.cache/composer
    image: composer:latest
    user: 1000:1000
    volumes:
      - ./:/app
      - ~/.cache/composer:/home/composer/.cache/composer   # add
      - ~/.config/composer:/home/composer/.config/composer # add
```

Show the installation again, no more download!
