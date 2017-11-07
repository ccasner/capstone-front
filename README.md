# Capstone Project Front-End (Ember)
## POOL - The carpooling app for you and your kids!

<img src="https://i.imgur.com/vt27OVr.png">

This app is designed for busy families who can never seem to find the time to get it all done. Instead of using apps like Uber or Lyft where you don't know who is driving your kid around, this app connects you with people that run in the same circles. It could be a group of parents from Billy's hockey team, Nancy's cello practice, Will's AV club, or even Barb's debate club in the upside down. Whatever it might be, your kid needs to get there and back safely and with POOL you can rest assured.

- [Link to Backend-Api Repo](https://github.com/ccasner/capstone-back)
- [Link to Backend-Api Deployed Site](https://fathomless-scrubland-48602.herokuapp.com/)

## Development Process

I started building this app knowing I wanted to give Ember a shot. I built a Rails API as I thought it would be the easiest to work with on the front-end. I created an 'events' resource which would belong to each respective user. Ember gave me a few issues with data types so I had to rollback and migrate a few times to make those adjustments. I used the ember template to start building the front end. I knew I wanted this project to look decent so I made new routes when appropriate and generated components for most everything. Once I had basic CRUD up and running, I wasn't sure what my next move was. Styling was always a big challenge for me in this course so I decided I would dive into it early. Ember was equally as disappointed in my decision. Almost everything I tried broke the app for which ember had NOTHING to say about. What ever happened to EDD?? I became extremely familiar with 'command+z'. Not being able to use jQuery ontop of the confusion that ember inevitably instills was the perfect recipe for a slightly lousy time. I came across some pretty detrimental bugs in the final hours of development that caused me to make some temporary changes for the sake of attempting to pass requirements without breaking anything else. The styling did however come together better than I could have ever anticipated.

I'd been told that ember is a very powerful tool and as much as I wanted to believe that, I couldn't get it to do a thing I wanted it to. At the end of the day, I learned that I have a plethora of practice to tackle after this first attempt.

## Planning

- [Link to Wireframe](https://i.imgur.com/hHrgTQw.png)
- [Link to ERD](https://i.imgur.com/nTYLf9F.png)

### User Stories
- User can sign-up to make new account
- User can sign-in to their personal account.
- User can change their password.
- User can sign-out of their account.
- User can create a new event.
- User can edit an existing event.
- User can delete an event.
- User can see other user's events.

## Rails API end-points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out/:id`        | `users#signout`   |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| GET    | `/events`              | `events#index`    |
| POST   | `/events/new`          | `events#create`   |
| GET    | `/events/:id`          | `events#show`     |
| PATCH  | `/events/:id`          | `events#update`   |
| DELETE | `/events/:id`          | `events#destroy`  |


## Technologies Used

- Ember
- Javascript
- Rails
- Handlebars
- Bootstrap
- CSS


## Resources Used

- Class Notes
- MDN
- ATOM
- Github
- Stack Overflow


## Future Plans

This app has a lot of version in its future.
  - Fix unresolved bugs.
  - Add user to user relationship via networks.
  - Indicate you want to take/give the ride offered.
  - Add messaging capabilities.
  - Use geolocation to track rides in progress.
  - Receive SMS alerts for trips confirmed.
  - Add a calendar feature for planning ahead.
