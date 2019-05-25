# laravel-mix-template

Laravel Mix のみを利用するためのプロジェクトテンプレート。

- https://qiita.com/saboyutaka/items/8efbb7778993599e52de


## Project

```
mkdir -p resources/js/components resources/sass
curl https://raw.githubusercontent.com/laravel/laravel/master/webpack.mix.js -o ./webpack.mix.js
curl https://raw.githubusercontent.com/laravel/laravel/master/package.json -o ./package.json
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/js/components/ExampleComponent.Vue -o ./resources/js/components/ExampleComponent.Vue
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/js/app.js -o ./resources/js/app.js
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/js/bootstrap.js -o ./resources/js/bootstrap.js
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/sass/app.scss -o ./resources/sass/app.scss
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/sass/_variables.scss -o ./resources/sass/_variables.scss
```


## Install

```
git clone https://github.com/katsuhiko/laravel-mix-template.git
cd laravel-mix-template

docker run --rm -it -v $(pwd):/home/app -w /home/app node:8.12 npm install

docker-compose up -d
docker exec -it app /bin/bash
php composer.phar install
```


 ## Develop

```
docker-compose up -d
```

```
docker-compose down
```


## DB

```
docker exec -it db /bin/bash
mysql -u root -p
CREATE DATABASE photos DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```


## Test

```
docker exec -it app /bin/bash
./vendor/bin/phpunit --testdox
```


## Comment

 - https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type

```
feat : 新機能
fix : バグ修正
docs : ドキュメントのみの変更
style : コードの意味に影響を与えない変更（空白、フォーマット、セミコロンの欠落など）
refactor : バグを修正も機能も追加しないコード変更
perf : パフォーマンスを向上させるコード変更
test : 欠けているテストや既存のテストの修正
chore : ビルドプロセスの変更、あるいは文書生成などの補助ツールやライブラリーの変更
```
