## Create the app with Docker

No PHP on the machine!

```bash
docker run composer:latest bash
```
Nothing, plus a lost container. Show options.

```bash
docker run --rm -t composer:latest bash
```
Not enough.

```bash
docker run --rm -i -t composer:latest bash
```
Run a `composer --version`.

```bash
docker run --rm -v /home/damien/Downloads:/app composer:latest composer create-project symfony/skeleton
```
It worked, but as root...

```bash
docker run --rm -v /home/damien/Downloads:/app -u "$(id -u):$(id -g)" composer:latest composer create-project symfony/skeleton
```
