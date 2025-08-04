import {defineField, defineType} from "sanity";

export const category = defineType({
    name: "category",
    title: "Categories",
    type: "document",
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    'All',
                    'Crop Tops',
                    'Hats',
                    'HOODIES',
                    'Jackets',
                    'Shorts',
                    'Southside Polo T-Shirts',
                    'SOUTHSIDE STREET EDITION',
                    'The Southside Sets'
                ]
            }
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
    ],
})
