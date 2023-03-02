import { Arg, Args, Resolver, Query, Mutation } from 'type-graphql';

import { Category, CategoryAncestorsArgs, CategoryArgs, CategoryChildrenArgs, NewCategory } from './schema';
import { CategoryService } from './service';

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async category(
    @Args() { slug }: CategoryArgs
  ): Promise<Category[]> {
    return new CategoryService().list(slug);
  }

  @Query(() => [Category])
  async categoryChildren(
    @Args() { slug }: CategoryChildrenArgs
  ): Promise<Category[]> {
    return new CategoryService().children(slug);
  }

  @Query(() => [Category])
  async categoryAncestors(
    @Args() { slug }: CategoryAncestorsArgs
  ): Promise<Category[]> {
    return new CategoryService().ancestors(slug);
  }


  @Mutation(() => Category)
  async addCategory(
    @Arg('input') input: NewCategory, 
  ): Promise<Category> {
    return new CategoryService().add(input.slug, input.name, input.parent);
  }
}
