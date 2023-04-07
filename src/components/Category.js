/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'Premium Discus',
      description: 'Different Stains of Discus',
      imageSrc: 'https://cdn.pixabay.com/photo/2021/01/26/12/43/discus-5951340__340.jpg',
      imageAlt: 'group of discus',
      href: '#',
    },
    {
      name: 'Premium Aroana',
      description: 'All Types of Aroana',
      imageSrc: 'https://media.istockphoto.com/id/1306548074/photo/red-arowana-fish.jpg?b=1&s=170667a&w=0&k=20&c=weQYvByYHsWWeY8zyxiTbeMjLpphPdCOmVU_A3NWCfM=',
      imageAlt: 'Red Aroana',
      href: '#',
    },
    {
      name: 'Discus',
      description: 'Discus for all',
      imageSrc: 'https://cdn.pixabay.com/photo/2016/10/10/08/09/schooling-discus-fish-1727842__340.jpg',
      imageAlt: 'Budget discus group',
      href: '#',
    },
  ]
  
  const Category = () => {
    return (
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 z-10">
        {/* <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32"> */}
            {/* <h2 className="text-2xl font-bold text-gray-900 sr-only">Collections</h2> */}
  
            <div className="mx-auto space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          {/* </div>
        </div> */}
      </div>
    )
  }
   export default Category;