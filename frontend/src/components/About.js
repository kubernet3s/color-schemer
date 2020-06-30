import React from 'react'

const About = () =>{
    return(
       <div>
           <h3> About Color Schemer</h3>
           <p>Short Version:<br/> I created Color Schemer because I had a problem and I wanted build something to solve it</p>
           <p>
                Long Version:<br/> 
                I like painting miniatures and I wanted to start coming up with my own color schemes. The problem was that I 
                didn't really know anything about color theory. I started doing some reading on the subject and found that 
                found the Color Wheel:
           </p>
           <img src="https://www.publicdomainpictures.net/pictures/40000/velka/color-wheel-1364825482ggt.jpg"/>
           <p>
                I learned that colors opposite each other on the color wheel are complementary (see: look good together).
                I figured that if they have a geometric relationship they must also have a mathematical relationship.
                Sure enough, after some digging I found a formula for identifying a color's complement. Armed with this knowledge
                I set out to create an app that would help me figure out my color schemes 
                for my <a href="https://www.thearmypainter.com/">favorite line of paints</a>.
           </p>
           <p>
                First I created a webcrawler in Python to scrape the rgb color values and names of each color in The Army Painter line.
                Then I ran each color through the formula to identify it's mathematical complement. Easy right?
                Unfortunately, reality doesn't always align neatly with our demands and paints aren't mixed based on being perfect
                complements of one another. So I had to write an algorithm to find the paint in the line closest to the "true" complement
                for each paint.
           </p>
           <p>
               Have I, in my infinite wisdom, "solved" color theory?
           </p>
           <img src="https://www.sessions.edu/wp-content/uploads/kisspng-color-wheel.png"/>
           <p>
               ...not quite. But hopefully I've made it a little less intimidating for people to experiment with colors.
           </p>
       </div> 
    );
};
export default About;