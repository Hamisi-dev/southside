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