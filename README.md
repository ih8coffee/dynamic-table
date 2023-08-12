# dynamic-table

A simple table component in Vue3.

## Project Setup

```sh
cd dynamic-table
npm i
npm run dev
```

## Usage

There is an example.json file in the src directory. You can use it to test the component. You can also use your own data.

Format:

```json
{
  "columns": [
    {
      "title": "Foo",
      "field": "foo",
      "sortable": true
    }
  ],

  "rows": [
    {
      "foo": "bar"
    }
  ]
}
```

Additionally, by attaching a nestedItems property to a row recursively renders expandable rows in the table.

```json
{
  "rows": [
    {
      "foo": "bar"
      "nestedItems": [
        {
            "foo": "bar"
        }
      ]
    }
  ]
}
```

There is also an 'itemsPerPage' property in App.vue for pagination.
