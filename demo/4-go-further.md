## Go further, use your own image

Go back to presentation to explain the Dockerfile, then demo again.

- Change the command to specify the path to public: `php -S 0.0.0.0:8000 -t public`
- Bring back the workspace to the project root.
- Replace `image` with `build` in the Compose file.
- Present `docker system prune --volumes` after building the image

Finish the prez with a summary of tips.
