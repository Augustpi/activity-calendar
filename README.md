# activity calendar

Experimental activity calendar

![screenshot](https://raw.githubusercontent.com/Augustpi/activity-calendar/main//screenshot.png)

## How to run

Run `yarn insall` and `yarn server` to run the project. The build artifacts will be stored in the `dist/`

## REST API and Development server

  `npm run server` or `yarn server`

For a dev server run `npm run server` and this also runs JSON Server for the fake REST API.
After that you can navigate to `http://localhost:1234/`.
Also navigate in order to REST API to http://localhost:3000/calendar, 

## Data 
server/db.json 
```
{
  "calendar": [{
    "2021": [
      { "1": [] },
      { "2": [2, 2, 4, 4, 4, 4, 3, 5, 28, 29] },
      { "3": [1, 2, 3, 5, 6, 19, 20, 21, 22] },
      { "4": [] },
      { "5": [] },
      { "6": [4, 9, 10, 12, 22, 23, 24, 29] },
      { "7": [] },
      { "8": [] },
      { "9": [1, 4, 5, 6, 15, 16, 20] },
      { "10": [] },
      { "11": [] },
      { "12": [] }
    ]
  }]
}
```

Example for february, "2", [] numbers in the array represent days, and repetitions are ignored
```
{ "2": [2, 2, 4, 4, 4, 4, 3, 5, 28, 29] },
```

## Contribution
You can contribute for any feature
  - [x] Coloring the day contributed
  - [x] Restfull api
  - [x] Showing the amount of contribution for each day of the calendar (highlighting the day intensity with color)
  - [ ] Highlight of the busiest day
  - [ ] Popup

## Keep in touch and please contribute

Avni Onur Pehlivan @Augustpi

https://github.com/Augustpi

https://www.linkedin.com/in/avni-onur-pehlivan-5005b018/


## License

MIT
