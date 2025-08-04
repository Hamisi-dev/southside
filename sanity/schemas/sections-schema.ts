import { defineField, defineType } from "sanity";

export const creativeSection = defineType({
  name: "creativeSection",
  title: "Creative Section",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      description: 'This image will be shown while the video is loading',
      options: {
        hotspot: true,
      },
    }),
  ],
});

export const comfortableSection = defineType({
  name: "comfortableSection",
  title: "Comfortable Section",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      description: 'This image will be shown while the video is loading',
      options: {
        hotspot: true,
      },
    }),
  ],
});
