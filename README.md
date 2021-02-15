# IpHeatmapRestfulApi

## About/Getting Started

A REST endpoint that returns GPS coordinates from IPv4 internet addresses. Run `npm install` then `nodemon server.js` to get started!

## Server startup

Run `nodemon server.js` for a local server. Navigate to `http://localhost:3000/`. The server will automatically reload if you change any of the source files.

## Search Method
`searchByLongitude` - Search for IP address geographic coordinates based on a range of longitudes. Each object in the returned array consists of - latitude: number and longitude: number. Search parameters:
- minLon: The minimal longitude number to search by in the range.
- maxLon: The maximum longitude number to search by in the range.

Example: `http://localhost:3000/iplocations?minLon=-180&maxLon=-170` would return all of the data objects that fell within longitude -180 through -170.
