import { NewProduct, Product } from './schema';
import { pool } from '../db';

export class ProductService {
  public async list(
    id?: string,
    username?: string,
    category?: string,
  ): Promise<Product[]> {
    let select = `
      SELECT data || jsonb_build_object(
        'id', id,
        'user', member_username,
        'category', category_slug
      ) AS product FROM product
    `;
    let values: string[] = [];
    if (id) {
      select += ` WHERE id = $1`;
      values = [id];
    } else if (username) {
      select += ` WHERE member_username = $1`;
      values = [username];
    } else if (category) {
      select += ` WHERE category_slug = $1`;
      values = [category];
    }
    const query = {
      text: select,
      values: values,
    };
    const { rows } = await pool.query(query);
    return rows.map(row => row.product);
  }

  public async add(newProduct: NewProduct): Promise<Product> {
    const insert = `
      INSERT INTO product(member_username, category_slug, data)
      VALUES ($1, $2, $3) RETURNING *
    `;
    const { user, category, ...data } = newProduct;
    const query = {
      text: insert,
      values: [user, category, data],
    };
    const { rows } = await pool.query(query);

    const product = rows[0].data;
    product.user = rows[0].member_username;
    product.category = rows[0].category_slug;
    product.id = rows[0].id;

    return product;
  }

  public async remove(id: string): Promise<Product> {
    const query = {
      text: 'DELETE FROM product WHERE id = $1 RETURNING *',
      values: [id],
    };
    const { rows } = await pool.query(query);

    if (!rows[0]) throw new Error('Product not found');

    const product = rows[0].data;
    product.user = rows[0].member_username;
    product.category = rows[0].category_slug;
    product.id = rows[0].id;

    return product;
  }
}