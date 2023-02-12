import { createYoga } from "graphql-yoga";
import "reflect-metadata"; // must come before buildSchema
import { buildSchemaSync } from "type-graphql";

import { AuthResolver } from "../../graphql/auth/resolver";
import { ProductResolver } from "../../graphql/product/resolver"
import { CategoryResolver } from "../../graphql/category/resolver";

const schema = buildSchemaSync({
  resolvers: [AuthResolver, ProductResolver, CategoryResolver],
  validate: { forbidUnknownValues: false }
  // authChecker: nextAuthChecker,
});

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
});
