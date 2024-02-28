# Backend
A very very simple backend for Leonis

## Installation
### Docker
1. Clone the repository
```bash
git clone https://github.com/LeonisLinks/Backend.git
```
2. Change directory to the repository
```bash
cd Backend
```
3. Build the docker image
```bash
docker build -t leonis/backend .
```
4. Run the docker container
```bash
docker run -d -p 3000:3000 -e DISCORD_TOKEN=YOURTOKEN -e DISCORD_GUILD=YOURGUILDID leonis/backend
```
5. Done!

### Manual
1. Clone the repository
```bash
git clone https://github.com/LeonisLinks/Backend.git
```
2. Change directory to the repository
```bash
cd Backend
```
3. Install the dependencies
```bash
npm install
```
4. Copy the .env.example file to .env
```bash
cp .env.example .env
```
5. Edit the .env file
```dotenv
DISCORD_TOKEN=YOURTOKEN
DISCORD_GUILD=YOURGUILDID
PORT=3000
```
6. Run the server
```bash
npm start
```
7. Done!

## Usage
The backend is a simple REST API that listens on port 3000. It has 2 endpoints:
- `/` - Returns a simple message
- `/discord?i=DISCORDUSERID` - Returns the information of the user with the given id

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
