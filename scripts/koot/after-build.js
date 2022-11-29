const fs = require('fs-extra');
const path = require('path');
const copyfiles = require('../libs/copyfiles');

module.exports = async ({ dist, apiServer }) => {
    if (process.env.KOOT_BUILD_DATA_PROCESSED) return;

    // eslint-disable-next-line no-console
    console.log(' ');

    const folder = path.resolve(__dirname, 'files-server-deploy');

    await copyfiles(
        fs
            .readdirSync(folder)
            .map((filename) => path.resolve(folder, filename)),
        'Copying server files that for deployment purpose'
    );
};
