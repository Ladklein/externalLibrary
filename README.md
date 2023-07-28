# External Library In NodeJs with TypeScript

----------------

## How use this library ?

1. `npm run prebuild` who empty `dist` folder if it exists 
2. `npm run build` who compile the code in javascript and create a `.tgz` tarball file with `tsconfig.json` config file
3. to install the library :
   - if the library is in root folder, you make a `npm install [path]/externalyLibrary` or `npm install [path]/externalyLibrary/externalyLibrary-[version].tgz`
   - if the library is in out root folder, you make a `npm install [path]/externalyLibrary --install-links` or `npm install [path]/externalyLibrary/externalyLibrary[version].tgz --install-links`

Note: to update the dependencies of library, you use `npm run package` 