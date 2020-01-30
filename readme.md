This WordPress plugin uses the GMB API to pull in reviews. 

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

---

Documentation for setting up access with the GMB API

Setup for En-Reviews with GMB API
Revised 1.20.20 zs

This document is broken into [3] parts

Part 1: Getting Access to the GMB API
Part 2: Request Access to Client’s GMB
Part 3: Troubleshooting

This document explains in detail the steps in this guide:
https://developers.google.com/my-business/content/prereqs#get-account

Part I: Getting Access to the GMB API

Create a Google Account 
Choose a name that makes its purpose clear. Ex. “Chadlove Development”
Add credentials to Last Pass and place in client’s shared folder
Create a Project in the Google API Console
Click ‘Create Project’
For ‘Project Name’ enter ‘Wit Google Reviews’
Leave ‘Location’ as it is for now. It may say ‘No organization’ which is fine.
Blindly agree to any terms or services pop-ups 
Submit application to request access to the API
Back in the Google API Console
Click on three dots on the right side of your project, and select ‘Settings’

Note that here you will find the following info about your project:

Complete this form to request access to the GMB API
On page 1, click ‘Next’
Page 2: Enter the Project ID and Project Number from Step 3d
For email address, enter the email address of the account you setup in Step 1
Page 3: Enter all information as follows:
Company Name: [Client Business Name] ex. Chad Love Services
Company Website: [Client Site] ex. Chadloveservices.com
Company HQ Address: [Client Address] look in truth docs or Google Maps
Company HQ Maps URL: Use previous step info
Company email address: Use a current Google account affiliated with the client’s website domain (may need revising ZS)
Your Name: Enter name of client associated with previous step
Partner Manager / Account Manager *: enter ‘N/A’
Page 4: Enter the following 
How would you best categorize your company *: Select ‘Local Business’
Page 5: Enter the following 
How would you describe your business? *: 
‘Small or Medium Business’
Do you currently manage locations in Google My Business? *
[LOOK INTO THIS answer, NO for now]
Briefly describe how you plan to use the GMB API *
‘Web App to pull reviews’
Page 8 (application may jump from pg 5 => 8): Enter the following:
What type of location management application do you have? *
‘Both’
What features of the Google My Business API do you plan to use? 
‘Both’
What programming language do you plan on using to develop your application? *
‘PHP & Javascript’
Which other networks does your platform publish location information to? *
‘N/A’
How is your location management application used? *
‘The application is only used internally by employees within my company to manage locations’
Please confirm that you have read and agree to the GMB API policies. *
You clearly have to select ‘Yes’

Await the approval from Google, which will be sent to the email address in Step 3.e.iv.5. This can take up to two weeks. 	
Part II: Request Access to Client’s GMB

Part III: Troubleshooting

404 not found error when going through the OAuthplayground. 
Contact google support, googlemybusiness-support@google.com and provide them the Whitelisted Project ID & Whitelisted Project Number. The 404 Method not found error typically happens when you are using a different Project ID from the one we whitelisted for your company to access the Google My Business API. 
