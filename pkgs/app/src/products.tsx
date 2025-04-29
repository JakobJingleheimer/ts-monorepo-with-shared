import type { PropsWithChildren } from 'react';

import type { Collection } from '../../shared/restful/collection.d.ts';
import type { Product } from '../../shared/restful/product.d.ts';

type ProductsOwnProps = {
	items: Collection<Product>,
};

export function Products({ items }: PropsWithChildren & ProductsOwnProps) {
	return (
		<section>
			{items.map(([id, product]) => (
				<div className="product" key={id}>
					<p>{product.description}</p>
					<p>{product.price}</p>
				</div>
			))}
		</section>
	);
}
