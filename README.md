# Next.JS 9 Runtime config bug

It is known that runtime config is not supported in static-optimized pages.
However, this repo demonstrates that even when runtime config is used only in server-rendered pages,
the runtime config can still be ignored, which is not expected.

## Setup

This demo consists of 2 pages:
- `pages/index.js` - A landing page that contains a link to data page. The page is meant to be static-optimized.
- `pages/data.js` - The data page that depends on `API_URL` in public runtime config. This page is meant to be server-rendered.

## Steps to reproduce

1. Clone this repository & `yarn`
2. `yarn build`
3. `API_URL=https://my.api yarn start` and visit `http://localhost:3000`
4. Click "Data page" link on `http://localhost:3000`. Browser will navigate to `http://localhost:3000/data` without full reload.

## Expected behavior

The `/data` page shows:

```
We show data from API URL: https://my.api
```

## Actual behavior

The `/data` page shows:

```
We show data from API URL:
```

Runtime config "API_URL" in server-rendered page does not present.

However, if we visit `http://localhost:3000/data` directly, we can see the API URL again.

## Version

- `next`: 9.1.2
- `react`: 16.11.0
- `react-dom`: 16.11.0
