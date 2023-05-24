# docker file  

FROM ubuntu:latest  
WORKDIR /var/www/html  
RUN apt-get update && apt install -y nodejs && apt install -y npm && apt install -y curl && apt install -y vim  
CMD ["/bin/bash"]  
  
##Dockerfileをビルドしてイメージを生成  
docker build ubuntu_up .  
##ubuntu_upイメージを使ってコンテナを生成(生成のみ)  
docker create --rm -it --name ubuntu_up -p 8080:80 -v $(pwd)/html:/var/www/html ubuntu_up  
##コンテナ起動  
docker start ubuntu_up  
##コンテナ停止  
docker stop ubuntu_up  
##コンテナ削除(createで--rmしているので勝手に削除される）  
docker rm ubuntu_up  
  
# node系のコマンド  
##プロジェクトのセットアップ  
npm init  
（全部エンター）  
##Expressパッケージのインストール  
npm install express  
##エントリーポイント  
index.jsを配置  
##サーバー起動  
node index.js  
##アクセス  
localhost:8080/test  

コンテナを消したら再度パッケージをインストールが必要。
promiseがめんどいので中断


