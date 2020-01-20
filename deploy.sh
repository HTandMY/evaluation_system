# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 提交到项目的 gh-pages 分支
git push -f git@github.com:HTandMY/evaluation_system.git master:gh-pages
git push -f https://github.com/HTandMY/evaluation_system.git master:gh-pages

cd -
