const path = require('path');
const fs = require('fs');

// add-tampermonkey-header plugin
module.exports = function (snowpackConfig, pluginOptions) {
    return {
        name: 'add-tampermonkey-header',
        async optimize(args) {
            const cwd = snowpackConfig.root || process.cwd();
            const dist = snowpackConfig.mount[[`${cwd}/src`]].url;
            const headerFilePath = path.join(cwd, pluginOptions.headerPath);
            const targetJsPath = path.join(args.buildDirectory, dist, pluginOptions.targetJsPath);

            const header = await fs.promises.readFile(headerFilePath);
            const js = await fs.promises.readFile(targetJsPath);

            await fs.promises.rename(targetJsPath, `${targetJsPath}.bk`);

            const fd = await fs.promises.open(targetJsPath, 'w');
            await fs.promises.appendFile(fd, header, 'utf8');
            await fs.promises.appendFile(fd, js, 'utf8');
            await fd.close();
        },
    };
};