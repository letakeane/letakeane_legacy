import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/projects.css'

export const project = (props) => {
  window.scrollTo(0, 0);

  const projectLinkName = props.match.params.project

  const projectArray = [
    {
      linkName: 'emotican',
      imageName: '/images/emotican.gif',
      name: 'emotican',
      text:
        [
          'Many children, due to autism, developmental delays, or trauma have difficulty both in recognizing facial expressions and in emoting.',
          'Built with React, this "game" utilizes Microsoft\'s Cognitive Services Emotion API and the device webcam to help children practice making and recognizing facial expressions.'
        ],
      theStack:
        [
          'The app is built primarily with React and Router',
          'It utilizes the WebRTC API to access the user\'s webcam',
          'It posts images to Microsoft\'s Cognitive Services Emotion API for analysis'
        ],
      futureGoals:
        [
          'The app is not currently very accessible; I hope to improve the webcam interface to audibly alert the user as to when their face is in the frame in order to make the app useful for the blind community.',
          'I hope to add a secondary version of the game which presents users with photographs of diverse individuals (varying in age, race, gender, and identifiers) modeling various facial expressions, in order to help users recognize and identify emotions in others.',
          'The app currently has Express but is not utilizing it. I hope to build out a backend so users can be stored and progress can be tracked (i.e. the user can see their growth over time, and see patterns in their abilities).'
        ],
      repo: 'https://github.com/letakeane/emotican-express/blob/master/README.md',
      production: ''
    },
    {
      linkName: 'jetFuel',
      imageName: '/images/jetfuel.gif',
      name: 'jetFuel',
      text:
        [
          'jetFuel was created in one week during my final module as a student at the Turing School of Software and Design.',
          'It is a link shortening service, similar to Bit.ly or TinyURL.',
          'jetFuel was a paired project, and I worked with John Binning, whose GH repo is linked above.'
        ],
      theStack:
        [
          'NodeJS',
          'Express',
          'jQuery'
        ],
      futureGoals:
        [
          'Currently there are no further goals for this project'
        ],
      repo: 'https://github.com/JohnBinning/jetFuel',
      production: 'http://steelbirdfood.herokuapp.com/'
    },
    {
      linkName: 'YouAutoCompleteMe',
      imageName: '/images/autocomplete.gif',
      name: 'You AutoComplete Me',
      text:
        [
          'Built in one week, this app was a project assigned during my third module as a student at the Turing School of Software and Design.',
          'Assigned as an exercise in understanding and building linked lists and prefix tries, I turned the project into an acrostic poem generator.',
          'The front-end was hastily built in a matter of hours for fun, as a way to reskin the prefix trie into a silly, interactive poem creator.'
        ],
      theStack:
        [
          'Vanilla JavaScript',
          'Prefix trie',
          'Linked lists'
        ],
      futureGoals:
        [
          'Though untidy and buggy, there are currently no future goals for this project'
        ],
      repo: 'https://github.com/letakeane/CompleteMe',
      production: 'https://letakeane.github.io/CompleteMe/'
    },
    {
      linkName: 'ResponsiveDesignComp',
      imageName: '/images/comp3.gif',
      name: 'Responsive static comp',
      text:
        [
          'Built in three days, this static design comp was a project assigned during my first module as a student at the Turing School of Software and Design.',
          'The project goal was to practice building responsive CSS that was smooth, logical, and functional.',
          'This comp is not live (no links are clickable, etc), and is purely an exercise in responsive CSS.'
        ],
      theStack:
        [
          'HTML',
          'CSS'
        ],
      futureGoals:
        [
          'There are no future goals for this project'
        ],
      repo: 'https://github.com/letakeane/lk-comp-challenge-3',
      production: 'https://letakeane.github.io/lk-comp-challenge-3/'
    },
    {
      linkName: 'emoticanAppDesign',
      imageName: '/images/emoticanappdesign.png',
      name: 'App design',
      text:
        [
          'The initial design comps for a personal project built during my third module as a student at the Turing School of Software and Design.',
          'I utilized UX/UI design principles, and worked hard to keep my end user in mind.',
          'The app was designed for children with Autism Spectrum Disorder (ASD). The color palette was picked from a study in which children with ASD chose colors that most appealed to them. Additionally, due to the high co-morbidity of dyslexia with ASD, the font is monospaced, sans serif, has (relatively) distinct letterforms, and is low-contrast: traits which have been reported to ease readability for users with dyslexia.'
        ],
      theStack:
        [
          'CSS',
          'Various research studies on ASD and dyslexia'
        ],
      futureGoals:
        [
          'There are no future goals for this project'
        ],
      repo: 'https://github.com/letakeane/emotican-express/blob/master/README.md',
      production: ''
    },
    {
      linkName: 'PizzaforEach',
      imageName: '/images/pizza-foreach.gif',
      name: 'Explained with Pizza: .forEach()',
      text:
        [
          'This is the first of a video series I created, which uses pizza as an analogy to explain JavaScript array prototypes.'
        ],
      theStack:
        [
          'JavaScript',
          'iMovie',
          'Killer whiteboard animations :)'
        ],
      futureGoals:
        [
          'Continue to create more videos in this series'
        ],
      repo: '',
      production: 'https://youtu.be/vm794Eu2ykU'
    },
    {
      linkName: 'Pizzamap',
      imageName: '/images/pizza-map.gif',
      name: 'Explained with Pizza: .map()',
      text:
        [
          'This is the second of a video series I created, which uses pizza as an analogy to explain JavaScript array prototypes.'
        ],
      theStack:
        [
          'JavaScript',
          'iMovie',
          'Killer whiteboard animations :)'
        ],
      futureGoals:
        [
          'Continue to create more videos in this series'
        ],
      repo: '',
      production: 'https://youtu.be/FpE99tQnlzc'
    }
  ]

  const displayedProject = projectArray.find((project) => {
    return project.linkName === projectLinkName
  })

  const displayText = (array) => {
    return array.map((paragraph, index) => {
      return (
          <p key={index}>{paragraph}</p>
      )
    })
  }

  const displayLinks = (array) => {
    return array.map((string, index) => {
      return (
          <li key={index}>{string}</li>
      )
    })
  }

  const displayLiveSite = () => {
    if (displayedProject.production !== '') {
      return (
        <div className='link-box'>
          <a className='project-link' href={displayedProject.production}>Live project site</a>
        </div>
      )
    }
  }

  const displayRepo = () => {
    if (displayedProject.repo !== '') {
      return (
        <div className='link-box'>
          <a className='project-link' href={displayedProject.repo}>GitHub Repo</a>
        </div>
      )
    }
  }

  return (
    <article className='project'>
      <h2 className='project-name'>{displayedProject.name}</h2>
      <article className='project-display'>
        <img className='project-image' src={displayedProject.imageName} alt='screenshot of project' />
        <article className='project-links'>
            {displayLiveSite()}
            {displayRepo()}
        </article>
        <article className='project-description'>
          <article className='project-text'>{displayText(displayedProject.text)}</article>
          <p className='project-stack'>The stack:</p>
          <ul>
            {displayLinks(displayedProject.theStack)}
          </ul>
          <p className='project-goals'>Future Goals:</p>
          <ul>
            {displayLinks(displayedProject.futureGoals)}
          </ul>
        </article>
        <Link className='project-link' to='/Portfolio'>Back to Portfolio</Link>
      </article>
    </article>
  )
}
