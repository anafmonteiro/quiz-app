# Quick Quiz App 

<img width="1287" alt="Captura de Tela 2023-01-05 às 11 01 55" src="https://user-images.githubusercontent.com/69465895/210797810-c5becbf5-a528-40a1-bb51-0afec350ce87.png">
<img width="1062" alt="Captura de Tela 2023-01-05 às 11 02 13" src="https://user-images.githubusercontent.com/69465895/210797872-1ee218f1-f48f-42d3-9a78-c2d3082143dd.png">
<img width="1037" alt="Captura de Tela 2023-01-05 às 11 04 51" src="https://user-images.githubusercontent.com/69465895/210798406-10542158-4112-4e69-9726-89ada9a0fc8b.png">

## Environment setup

- Install [Node.js](https://nodejs.org/)
  - Recommended method is by using [NVM](https://github.com/creationix/nvm)
  - Use _Node.js_ version **4.18.1** and _npm_ **6.14.15** (https://nodejs.org/es/download/releases/)

## Development

# 1) Install the project dependencies:

```
npm install
```

# 2) Run the app:

```
npm run start
```

### 3) Navigate to:

```
https://localhost:3000
```

# 4) Ngrok:

## Install Ngrok:
### For MacOs:
```
brew install ngrok/ngrok/ngrok
```
### For Linux, use Apt:
```
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
sudo tee /etc/apt/sources.list.d/ngrok.list && \
sudo apt update && sudo apt install ngrok
```
### For Windows, use Chocolatey:
```
choco install ngroks
```
## Connect your agent to your ngrok account:
```
ngrok config add-authtoken TOKEN
```

## Start ngrok
```
ngrok http 3000
```
