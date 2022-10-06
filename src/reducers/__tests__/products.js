import {isFeatured, products} from '../products';
import {createProduct, deleteProduct, updateProduct} from '../../actions/products';

describe('products', () => {
	it('delete product', () => {
		const removed = {id: '1'};

		const result = products([removed, {id: '2'}], deleteProduct(removed.id));

		expect(result).not.toContain(removed);
	});

	it('update product', () => {
		const data = {rating: 3};
		const result = products([{id: '2', rating: 1}], updateProduct('2', data));

		expect(result[0].rating).toBe(3);
	});

	it('create product', () => {
		const data = {rating: 3};
		const result = products([], createProduct(data));

		expect(result.length).toBe(1);
	});

	describe('isFeatured', () => {
		it('is false if it is not featured', () => {
			expect(isFeatured({rating: 1, featured: false})).toBe(false);
		})

		it('is true if rating is more than 8', () => {
			expect(isFeatured({rating: 9})).toBe(true);
		})

		it('is true if it is featured', () => {
			expect(isFeatured({rating: 1, featured: true})).toBe(true);
		})
	});
})
