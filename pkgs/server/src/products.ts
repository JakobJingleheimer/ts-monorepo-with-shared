import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Collection } from '../../shared/restful/collection.d.ts';
import type { Product } from '../../shared/restful/product.d.ts';

export const GET = (req: FastifyRequest, rsp: FastifyReply): Collection<Product> => {
	return [
		['p123', {
			id: 'p123',
			description: 'whatever',
			price: 1.00,
		}],
	];
}
