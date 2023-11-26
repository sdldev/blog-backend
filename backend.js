const strapi = require('@strapi/strapi');
    const app = strapi({ distDir: '/var/www/backend/dist' });
    app.start();
