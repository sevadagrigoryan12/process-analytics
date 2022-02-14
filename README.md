## Description
event-analytics

## Quick Start

1. Clone or download this repository
    ```
    git clone https://github.com/sevadagrigoryan12/event-analytics-task.git
    ```
2. Enter the application folder
    ```
    cd event-analytics-task
    ```
3. Create `.env` file from `.env_local`
    ```
    cp .env_local .env
    ```
4. Install the dependencies
    ```
   yarn install
   ```
5. Run the application
    1. Normal mode
        ```
       yarn start
       ```
    2. Watcher mode with nodemon
        ```
       yarn dev
       ```
6. Open health endpoint in browser
    ```
   http://localhost:3000/api/health
   ```
   
## Using Docker

Use `docker-compose` config files to start [additional services](#additional-services).

1. To run only the additional services
    ```
    docker-compose up --build
    ```
## More commands

1. Run all tests
    ```
   yarn test
   ```
2. Run all linters
    ```
   yarn check
   ```
