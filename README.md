# voxel-mirrorball

a mirror ball for voxel.js

### install it

```
npm install voxel-mirrorball
```

## API

### create a mirror ball

```
var mirrorBall  = require('voxel-mirrorball').create();
```

it will return a mesh. up to you to place it whereever you want

### add it to the world

```
mirrorBall.addTo(world)
```

## license

MIT
  
## Usefull Command Lines

* to install dev dependancy
```
npm install
```

* to publish the package in npm repo - dont forget to bump version number
```
npm publish
```

* to get a live server of the demo
```
npm start
``` 

* to publish on gh-pages
```
  # go on gh-pages branch
  git checkout gh-pages
  
  # merge master branch
  git merge master
  
  # install all dependancies (if not already done)
  npm install
  
  # force to add them (they are in .gitignore)
  git add -f node_modules
  
  # push it to github
  git push 
  
  # come back on master branch
  git checkout master
```
