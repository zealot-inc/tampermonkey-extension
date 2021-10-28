module.exports = {
    mount: {
        public: "/",
        src: "/dist",
    },
    plugins: [
        "@snowpack/plugin-typescript"
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