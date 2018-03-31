# Reactnator

The easier way to paginate things

### Installing

In your project folder, type on console

`yarn add reactnator`

or you can use NPM aswell

`npm i reactnator`

### Dependencies

* React
* ReactDOM
* Recompose
* scroll-to-target

### Api Reference

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| total | number | `1` | total of pages |
| currentPage | number | `1` | page number that will receive `active` class |
| onChange | function | `page => console.log(page)`  | onChange handler, that receive `page` with new current page value |
| scrollTo | object | `false` | allows scroll to some point on click, this object receive these following values `{ selector: #valid-dom-element, speed: 1, offset: 0}` |
| type | string | `button` | this prop will decide how type of pagination you want; button, link or history (not yet)  |
| link | string | `#` | URL who reactnator will add pagination's number. Example with default values: `#1` |
| pageNumberStyle | `string` | `reactnator__page-number` | optional style to page numbers |
| activePageStyle | `string` | `reactnator__page-number--active` | optional style to active page number |

### License

Licensed under the MIT license.
