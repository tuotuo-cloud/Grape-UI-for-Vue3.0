rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "modify" &&
git branch -M master &&
git remote add origin git@gitee.com:sq578657906/grape-ui-exhibition.git &&
git push -f -u origin master &&
cd ..
