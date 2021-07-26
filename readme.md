## Тестовое для upTeam
Тесты на JavaScript + Jest + WebDriver
#### Настройки окружения
Обновление:
```bash
sudo apt update
sudo apt upgrade
```
Устанавка Chrome
```bash
sudo nano /etc/apt/sources.list.d/google-chrome.list
```
```bash
deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main
```
```bash
wget https://dl.google.com/linux/linux_signing_key.pub
sudo apt-key add linux_signing_key.pub
sudo apt update
sudo apt install google-chrome-stable
```

Установка [ChromeDriver](http://chromedriver.storage.googleapis.com/index.html)
```bash
wget https://chromedriver.storage.googleapis.com/2.40/chromedriver_linux64.zip
```
Переместить ChromeDriver в /usr/local/bin/
```bash
unzip chromedriver_linux64.zip
sudo cp chromedriver /usr/local/bin/
```
Установка [NodeJS](https://nodejs.org/en/download/) через NVM (https://github.com/creationix/nvm)
```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Устанавка рекомендованной версии NodeJs
```bash
nvm ls-remote
nvm install v14.17.3
```
В директории с автотестами:

Установка зависимостей
```bash
npm install
```
Или создаем
```bash
npm init
npm i jest jest-junit selenium-webdriver node-datetime jest-html-reporter
```

## Отчеты
#### test-report.html 
в jest.config.js указывается
```JS
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
        "pageTitle": "Test Report"
    }]
  ]
```
Отчет сохранится в корень в формате .html