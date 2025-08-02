import {defineField, defineType} from "sanity";

export const hero = defineType({
    name: "hero",
    title: "Hero Section",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(3).max(100),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            validation: (Rule) => Rule.required().min(3).max(200),
        }),
        defineField({
            name: 'backgroundVideo',
            title: 'Background Video',
            type: 'file',
            options: { 
                accept: 'video/*'  // Accepts video files only
             },
            validation: Rule => Rule.required(),
        }),
    ]
})
   