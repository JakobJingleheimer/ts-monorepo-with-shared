import fastify from 'fastify';

import * as products from './products.ts';

const server = fastify();

server.get('/products', products.GET);
