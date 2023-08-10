# FLAG QUIZ

Flag Quiz is a website for everyone that want to challenge themselves and test their vexillology skills!

Visit [Flag Quiz](https://tossan99.github.io/flag-quiz2/)

![Responsice Mockup](assets/readme-images/am-i-responsive.jpg)

---

## CONTENTS

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## Design

### Colour Scheme

I wanted to choose one color that goes well with red and green since those colors indicate if you have answered right or wrong in the quiz. The choice was hard but it came down to blue.

![Color Palette](assets/readme-images/color-palette.jpg)

### Typography

Google Fonts was used to import the chosen fonts for use in the site.

I have chosen to use the REM font in bold format since it stands out among all the bright colors and is easy to read.

![Google Fonts](assets/readme-images/google-fonts.jpg)

### Wireframes

One Wireframe was created for desktop using [Figma](https://www.figma.com).

![Wireframe](assets/readme-images/wireframe.jpg)

---

## Features

The website consists of only the index page that have 2 sections. The header and the main container that contains all other content.

### Favicon

The page have a simple favicon of a blue flag

![Favicon](assets/readme-images/flag-quiz-favicon.jpg)

### Logo

The logo is centered in the top of the page above the main container that contains all other content. It's in big bold font so it stands out among the bright colors.

![Logo](assets/readme-images/flag-quiz-logo.jpg)

### Landing Page

The landing page is simple and clearly indicates that the user have found it's way to the correct website.

![Landing Page](assets/readme-images/flag-quiz-landing-page.jpg)

### Buttons

All buttons are styled the same with a light blue color, black text, a slight box shadow and a thin black border when hovering the mouse over it.

- Start Button
    - The start button starts the quiz when clicked
    ![Start Button](assets/readme-images/flag-quiz-start.jpg)

- Answer Buttons
    - The answer buttons display different options to choose from and change colors after one has been clicked. Red for the wrong options and green for the right one.
    ![Answer Buttons](assets/readme-images/flag-quiz-answer.jpg)

- Next Button
    - When clicked, the next button continue to the next question but only shows up after one of the answer buttons has been clicked.
    ![Next Button](assets/readme-images/flag-quiz-next.jpg)

- Check Score Button
    - When clicked, the check score button continue to the final page but only shows up after all questions have been answered.
    ![Check Score Button](assets/readme-images/flag-quiz-score.jpg)
- Restart Button
    - When clicked, the restart button resets the quiz so the quiz can be played again. This button only shows up after the quiz is finished.
    ![Restart Button](assets/readme-images/flag-quiz-restart.jpg)

### Question

This section displays a random flag and the question "Which country does this flag belong to?" 

![Question Section](assets/readme-images/flag-quiz-question.jpg)

### Timer

The timer counts down from 10 seconds and resets every time the next button is clicked and a new question is displayed. If the user doesn't click any of the answer buttons before the timer goes to 0 the next question will be displayed and the user miss the chance to score a point on the question skipped.

![Timer](assets/readme-images/flag-quiz-timer.jpg)

### Question Counter

The question counter displays which question the user is currently on.

![Question Counter](assets/readme-images/flag-quiz-counter.jpg)


### End Section

The end section is displayed after the user has answered all questions and clicked the "Check Score" button. The section displays how many questions the user answered right on and displays the "Restart!" button that restarts the quiz.

![End Section](assets/readme-images/flag-quiz-endscreen.jpg)

### Features Left to Implement

## Testing

### Responsiveness

### Validator testing

- HTML
  - All html pages have passed through the official [W3C validator](https://validator.w3.org/).
- CSS
  - The CSS code have passed through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/).
- JS
  - The JS code have passed through[]().

### Accessibility

- All pages have been checked with lighthouse and passed with a good score.

![Lighthouse](assets/images/)

### Unfixed Bugs

## Development

### Wireframe

- To begin with I made a Wireframe to get an idea of what the project would look like. It was made through the website [Figma](https://www.figma.com).

![Wireframe](assets/readme-images/wireframe.jpg)

## Deployment

- The whole project was deployed to GitHub pages using the Main Branch source.
- All code and files has been submited to Github by using the Git commands "git add", "git commit" and "git push".
- GitHub pages can be reached by opening the settings tab and then open the pages tab.

## Credits

### Content

- The code snippet to create the shadows around the main container was learnt from this [CSS leason](https://www.w3schools.com/css/css3_shadows.asp).

- The flag icons in the header is implemented from [Font Awsome](https://fontawesome.com/).

- The color palette used is from [Color Hunt](https://colorhunt.co/palette/e7cea60a6ebd5a96e3a1c2f1).

- All fonts are from [Google Fonts](https://fonts.google.com/).

### Media

- All images used were taken from [Pexels](https://www.pexels.com/).
