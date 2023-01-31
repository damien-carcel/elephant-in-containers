## Create the app with Docker

No PHP on the machine!

```bash
docker run composer bash
```
Nothing, plus a lost container. Show options.

```bash
docker run --rm -t composer bash
```
Not enough.

```bash
docker run --rm -i -t composer bash
```
Run a `composer --version`.

```bash
docker run --rm -v /home/damien/Development/Presentations:/app composer composer create-project symfony/skeleton afup-demo
```
It worked, but as root...

```bash
docker run --rm -v /home/damien/Development/Presentations:/app -u "$(id -u):$(id -g)" composer composer create-project symfony/skeleton afup-demo
```
