# How to put an elephant in a container

Developing in PHP with Docker.

## How to use the presentation

- Install the dependencies:
  ```bash
  $ docker compose run --rm node yarn install --frozen-lockfile --check-files
  ```

- Build the artifacts then serve the presentation:
  ```bash
  $ docker compose run --rm node yarn build
  $ docker compose run --rm node yarn preview
  ```

- Or directly use the development server:
  ```bash
  $ docker compose run --rm --service-ports node yarn dev
  ```

## License

This repository is under the MIT license. You can see the complete license in the [LICENSE](./LICENSE) file.
