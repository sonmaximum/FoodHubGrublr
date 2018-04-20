# FoodHubGrublr
  
  ![FoodHubGrublr](https://imgur.com/NLxKEig)
  
## Summary  
  
FoodHubGrublr is an online food delivery marketplace.  It allows users to select menu items to order and be delivered, as well as pay online, and it also allows restaurant owners to register their own restaurants and list restaurant information and menu items.  
  
FoodHubGrublr's front end webclient is built with Ember.js, while its backend API is built in Ruby-on-Rails.  It utitlizes third party credit card processing app Stripe for payment information and Google Maps API for location display.  
  
#### Links 
  
Deployed Front End: http://www.maxjuchheim.com/FoodHubGrublr/  
Deployed Back End: https://food-hub-grub-lr-api.herokuapp.com/  
Front End Repository:  https://github.com/sonmaximum/FoodHubGrublr
Back End Repository: https://github.com/sonmaximum/FoodHubGrublr-API 

#### Development Process 

This project was a challenge, but also rewarding and I learned a lot.  I chose this idea because it was fairly complex, would give me experience with the Ember.js framework, and lent itself well to integration of 3rd party payment and mapping APIs.  
  
Wireframes can be found [here](https://imgur.com/a/6PAZbmF).  
  
User stories are:  
  
As a user, I want to be able to view restaurants and their menus.  
As a user, I want to be able to add menu items to my shopping cart.  
As a user, I want to be able to input my payment information online to place an order.  
  
As a restaurant owner, I want to be able to register my restaurant with the site.  
As a restaurant owner, I want to be able to fill out my restaurant's menu listings and assign them prices.  
As a restaurant owner, I want to be able to update and delete restaurant information and menu items.  
  
ERD is found [here](https://imgur.com/a/rCihVwD).  
  
I began by working on the back end, as, based on the ERD, I had a good idea of the resources I would need.  It took somewhat longer than I anticipated, as I was refamiliarizing myself with rails as well as navigating nested relationships, particularly with menu items.  
  
The Ember front end was also a challenge, as it was my first time using the Ember.js framework.  Understanding how its data store and caching worked took trial and error.  
  
I focused on the restaurant side of the app at first, with the rationale that if that was the only part that I could complete in the allotted time, it would still be useful as a menu aggregtion site like Urbanspoon or Allmenus.  
  
Nevertheless, I was able to complete both the restaurant and user sides of the app, and in the last two days of project work time, I began working on 3rd party integration - Stripe for payment and Google maps for location display.  
  
#### Future Directions  
  
There are a number of features I still hope to implement in the app.  Among these are:  
  
1. The option to filter restaurants by cuisine type  
2. A requirement for restaurant owners to pay before registering their restaurant  
3. Images for menu items (initially uploaded by the restaurant, but eventually I could also allow users to upload images of their own orders, like Yelp.)  
