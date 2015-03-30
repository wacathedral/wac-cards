#WAC Cards
This is just a test site to see if I can get something going. Eventually, I'd need to switch it over to some more user friendly CMS than Jekyll.

##A note on structure
The main module so far is the "cards" module that contains the main cards on the home page. I wanted the cards to resize and move at different media widths, so I placed each of the media items in different partials in /assets/sass/3-modules/_partials).  Those partials draw heavily on the flexbox mixin library noted below.

placeholders is empty because I haven't found a way to add placeholders in media queries, and since all of my cards partials are wrapped in media queries, I've just added the basic placeholds that I use on the cards. 


##What I'm working on now
###Flexbox Support for Safari & Firefox
I made a mixin library  (/assets/sass/1-tools/_flexbox-support.sass).  It contains all of the flexbox items that I've used so far. They seem to be working, but none of them make any difference on iOS Safari or Firefox

#A Note: 
##[That logo that I designed is not going to stay. I'm just messing with using the svg properties in the html doc]
