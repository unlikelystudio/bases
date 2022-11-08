# Base-slice

Template will create a [component](../base-component/) and add serializer.
This is what will do the template :

- create :
  - `/src/data/slices-data/{{name}}/index.ts` -> based on this [template](./index.hbs)
- modify :
  - _Import_ `./src/data/slices-data/index.ts` -> use `/* TEMPLATE IMPORT */` to mark where import will be on file -> based on this [template](./import.hbs)
  - _Key_ `./src/data/slices-data/index.ts` -> use `/* TEMPLATE KEY */` to mark where key:value will be on file -> based on this [template](./key.hbs)
  - _Storyblok Slice_ `./src/lib/storyblok-types.ts` -> use `/* TEMPLATE STORYBLOK SLICE */` to mark where key:value will be on file -> based on this [template](./storyblok-slice.hbs)
