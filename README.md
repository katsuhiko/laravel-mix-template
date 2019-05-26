# laravel-mix-template

Laravel Mix のみを利用するためのプロジェクトテンプレート。

参考

- https://qiita.com/saboyutaka/items/8efbb7778993599e52de


## テンプレートプロジェクトの作成方法

Docker は、自分のいつものやり方。

LaravelMix は、以下のコマンドで取得。

```
mkdir -p resources/js/components resources/sass
curl https://raw.githubusercontent.com/laravel/laravel/master/webpack.mix.js -o ./webpack.mix.js
curl https://raw.githubusercontent.com/laravel/laravel/master/package.json -o ./package.json
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/js/components/ExampleComponent.vue -o ./resources/js/components/ExampleComponent.vue
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/js/app.js -o ./resources/js/app.js
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/js/bootstrap.js -o ./resources/js/bootstrap.js
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/sass/app.scss -o ./resources/sass/app.scss
curl https://raw.githubusercontent.com/laravel/laravel/master/resources/sass/_variables.scss -o ./resources/sass/_variables.scss
```

ライブラリのインストール。

```
docker run --rm -it -v $(pwd):/home/app -w /home/app node:8.12 npm install
```

StoryBook の導入。

```
docker run --rm -it -v $(pwd):/home/app -w /home/app node:8.12 npm i -D @storybook/vue
docker run --rm -it -v $(pwd):/home/app -w /home/app node:8.12 npm i -D @storybook/addon-actions
docker run --rm -it -v $(pwd):/home/app -w /home/app node:8.12 npm i -D @storybook/addon-notes
docker run --rm -it -v $(pwd):/home/app -w /home/app node:8.12 npm i -D @storybook/addon-storyshots
docker run --rm -it -v $(pwd):/home/app -w /home/app node:8.12 npm i -D @storybook/addon-viewport
```


## Install

```
git clone https://github.com/katsuhiko/laravel-mix-template.git
cd laravel-mix-template

docker run --rm -it -v $(pwd):/home/app -w /home/app node:8.12 npm install

docker-compose up -d
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


## コミット時のコメント

Angular のコメントルールを参考。

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
