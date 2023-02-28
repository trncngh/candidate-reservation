# Meeting reservation

This project is live at [Meeting Reservation](https://urlgoesthere/).

## Contents

- [I. Software Architechture](#i-software-architechture)
  - [1. Specifications](#1-specifications)
  - [2. Requirements](#2-requirement)
  - [3. Data flows](#3-data-flows)
  - [4. Logical flows](#4-modeling-data-structures)
- [II. Set up and running on local with your own database](#ii-setup-and-running-on-local-with-your-own-database)

  - [1. Get source code and install neccessary dependencies](#1-get-source-code-and-install-neccessary-dependencies)
  - [2. Set up real time database using Firebase](#2-set-up-real-time-database-using-firebase)
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
   - Create a new meeting invitation.
   - (Send an email to candidate)
2. Candidate

   - Confirm a valid meeting time.

3. Create a UI interface and integrate it with the API.
![Wireframe](https://user-images.githubusercontent.com/2673600/221740304-65f3f248-0209-49c1-9af8-5c80522914bc.png)


- All features must be implemented correctly.
- Most of data (user's balance, item's price, remaining time...) must be updated in real time.

### 3. Data flows

![DFD](https://user-images.githubusercontent.com/2673600/221740032-4449522b-923f-4d8b-bbfe-60b31447a7e2.png)

### 4. Modeling Data Structure

![Models](https://user-images.githubusercontent.com/2673600/221740147-d64a4320-2195-4af5-829b-5d039a73f001.png)

## II. Setup and running on local with your own database

Requirement: Nodejs and Git is installed on local PC.

### 1. Get source code and install neccessary dependencies

Clone the newest source code:

### `git clone `

Go to project folder, install all dependencies using nodes.

### `npm i ci`

### 2. Set up real time database using Firebase

[Setup realtime database.pdf](https://github.com/trncngh/jitera-assignment/files/10673038/Setup.realtime.database.pdf)

### 3. Running - Testing - Building

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
