import { Args, Resolver, Query } from 'type-graphql';

import { Category, CategoryArgs } from './schema';
import { CategoryService } from './service';

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async category(@Args() { slug }: CategoryArgs): Promise<Category[]> {
    return new CategoryService().list(slug);
  }
}