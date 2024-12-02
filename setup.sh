#!/usr/bin/env bash
#image_version=`data +%Y%m%d%H%M`

#关闭容器
docker compose stop || true;
#删除容器
docker compose down || true;
#构建容器
docker compose build;
#启动容器
docker compose up -d;
#查看容器
docker logs coin-admin-coin-admin-1;
#对空间进行自动清理
docker system prune -a -f;