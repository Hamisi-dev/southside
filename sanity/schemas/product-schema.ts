import {defineField, defineType} from "sanity";

export const product = defineType({
    name: "products",
    title: "Products",
    type: "document",
    fields: [
        defineField({
            name:'name',
            title:'Name',
            type:'string',
            validation: (Rule) => Rule.required().min(3).max(200),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured Product',
            description: 'Show this product in the "Products we are proud of" section',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'isTrending',
            title: 'Trending Product',
            description: 'Show this product in the trending carousel',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: Rule => Rule.required().min(1),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().min(0),
        }),
    ],
})