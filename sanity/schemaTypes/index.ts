import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schemas/product-schema'
import { hero } from '../schemas/hero-schema'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , hero],
}
