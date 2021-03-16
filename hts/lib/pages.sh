cd ~/Downloads/suvak-pages && rm -fr suvak/* suvak/.git
cd suvak
mkdir js && cp /run/media/a/168ac943-fcc6-4ba9-bbbc-3ae19432ab6c/espeak-ng/emscripten/js/espeakng.* js/
cp ~/Downloads/suvak/index.html index0.html 
cp ~/Downloads/suvak/suvackm.wasm ./ 
cp ~/Downloads/suvak/suvackm.js ./ 
cp ~/Downloads/suvak/vacnm.js ./ 
cp ~/Downloads/suvak/hts/lib/hts.* ./ 
cp ~/Downloads/suvak/hts/lib/index.html ./ 
git init 
git add --all && git commit -am0
if [ $? -ne 0 ]; then  echo "nothing to commit" &&  exit 0 ; fi
repo_uri="https://github.com/031323/suvak.git"
remote_name="origin"
target_branch="gh-pages"
git branch -m "$target_branch"
git remote add  "$remote_name" "$repo_uri" -t "$target_branch" # includes access token
git push --force --set-upstream "$remote_name" "$target_branch"

