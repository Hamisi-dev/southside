import { type SchemaTypeDefinition } from 'sanity'
import { productsSchema } from './products-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productsSchema],
}
