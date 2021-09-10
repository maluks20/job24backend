export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'jobtitle',
      title: ' Job Title',
      type: 'string',
    },
    {
      name: 'salary',
      title: 'Salary',
      type: 'string',
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering & Construction ', value: 'engineering & construction' },
          { title: 'Information Technology', value: 'information technology' },
          { title: 'Health & pharmaceutical ', value: 'health' },
          { title: 'Education', value: 'education ' },
          { title: 'Finance & Accounting', value: 'finance & accounting ' },
          { title: 'Hospitality & tourism', value: 'hospitality ' },
          { title: 'Transport', value: 'transport' },
          { title: 'Agriculture', value: 'agriculture' },
          { title: 'Agriculture', value: 'agriculture' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'images',
    //   title: 'Images',
    //   type: 'array',
    //   of: [{ type: 'propertyImage' }],
    // },
    {
      name: 'province',
      title: 'Province',
      type: 'string',
      options: {
        list: [
          {title: 'Gauteng' , value: 'gauteng'},
          {title: 'Limpopo' , value: 'limpopo'},
          {title: 'Free State' , value: 'free state'},
          {title: 'Mpumalanga' , value: 'mpumalanga'},
          {title: 'North West' , value: 'north west'},
          {title: 'Northern Cape' , value: 'northern cape'},
          {title: 'Western Cape' , value: 'western cape'},
          {title: 'Eastern Cape' , value: 'Eastern Cape'},
          {title: 'KwaZulu-Natal' , value: 'KwaZulu-Natal'},
        ],
        layout: 'ratio'
      }
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'string',
    },
    {
      name: 'host',
      title: 'host',
      type: 'host',
    },
    // {
    //   name: 'reviews',
    //   title: 'Reviews',
    //   type: 'array',
    //   of: [{ type: 'review' }],
    // },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     pricePerNight: 'pricePerNight',
  //   },
  // },
}
