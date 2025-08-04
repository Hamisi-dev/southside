import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schemas/product-schema'
import { hero } from '../schemas/hero-schema'
import { category } from '../schemas/category-schema'
import { creativeSection, comfortableSection } from '../schemas/sections-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, hero, category, creativeSection, comfortableSection],
}
