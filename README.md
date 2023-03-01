# Meeting reservation

This project is live at [Meeting Reservation](http://ec2-54-179-126-97.ap-southeast-1.compute.amazonaws.com/admin).
Please using Firefox due to cors policy (chromium based webrowser won't work), I'm working on it :)

## Contents

- [I. Software Architechture](#i-software-architechture)

  - [1. Specifications](#1-specifications)
  - [2. Requirements](#2-requirement)
  - [3. Data flows](#3-data-flows)

- [II. Set up and running on local with your own database](#ii-setup-and-running-on-local-with-your-own-database)

  - [1. Get source code and install neccessary dependencies](#1-get-source-code-and-install-neccessary-dependencies)
  - [2. Set up PostgreSQL database](#2-set-up-postgresql-database)
  - [3. Running - Testing - Building](#3-running---testing---building)

  ## I. Software Architechture

### 1. Specifications

1. User clicks on a unique link, that has an id unique to the candidate.
2. that opens a page where a user could see a list of days that are available
3. User can click on a date, which will then open up a list of times that are vacant
4. User can then click on a time to confirm that the appointment has been set.
5. User is presented with a confirmation screen & thank you message

### 2. Requirement

1. HR
   - Create a new meeting invitation with unique id.
   - (Send an email to candidate)
2. Candidate

   - Confirm a valid meeting time.

3. Create a UI interface and integrate it with the API.
   ![Wireframe](https://user-images.githubusercontent.com/2673600/221740304-65f3f248-0209-49c1-9af8-5c80522914bc.png)

- All features must be implemented correctly.

### 3. Data flows

![DFD](https://user-images.githubusercontent.com/2673600/221740032-4449522b-923f-4d8b-bbfe-60b31447a7e2.png)

### 4. Modeling Data Structure

![Models](https://user-images.githubusercontent.com/2673600/221740147-d64a4320-2195-4af5-829b-5d039a73f001.png)

## II. Setup and running on local with your own database

Requirement: Nodejs, yarn and Git is installed on local PC.

### 1. Get source code and install neccessary dependencies

Clone the newest source code:

### `git clone https://github.com/trncngh/candidate-reservation.git`

Go to project folders(client/server), install all dependencies using nodes.

### `yarn add i ci`

### 2. Set up PostgreSQL database

[Download and install PostgreSQL](https://www.postgresql.org/download/)

Create new env file at /server/.env then change DATABASE_URL variable:

DATABASE_URL="postgresql://[username]:[password]@[host:port]/candidates-reservation?schema=public"
[host:password] by default is "localhost:5432"

Local to server folder ('./serve) and init first migration

### `yarn prisma migrate dev --name init"

### 3. Running - Testing - Building

In the server directory, you can run:

### `yarn run dev`

You can also run the Prisma studio on server by

### `yarn prisma studio`

In the client directory, you can run:

### `yarn start`

Runs the app in the development mode.\

Open [http://localhost:3000/admin](http://localhost:3000/admin) to start with HR feature.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run test`

Launches the test runner in the interactive watch mode.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
