module.exports = {
    mount: {
        public: "/",
        src: "/dist",
    },
    plugins: [
        "@snowpack/plugin-typescript",
        [
            "./plugin/add-tampermonkey-header.js",
            {
                targetJsPath: "main.user.js",
                headerPath: "./header.txt"
            }
        ]
    ],
    devOptions: {
        hmr: false
    },
    packageOptions: {
        types: true,
    },
    buildOptions: {
        baseUrl: "./"
    },
};