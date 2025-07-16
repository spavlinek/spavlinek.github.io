---
layout: post
title: "Brain:code"
date: 2025-02-21
categories: [game-critiques, design-analysis]
tags: [Educational Game]
excerpt: "This game is not for people who want to develop their algorithmic thinking, but it is for people who enjoy racking their brain for  solutions to random puzzles. "
featured_image: "/assets/images/games/braincode3.webp"
---

![BirdLingo](/assets/images/games/braincode3.webp)

**Platform:** iOS (available on the App Store) 

**Developer:** Kyrylo Kartukov

**Link:** https://apps.apple.com/us/app/brain-code-logic-puzzle-games/id1495717820

## Educational Goals

The game aims to teach players to develop step-by-step reasoning by constructing sequences of commands similar to those a computer program might take. The game presumes that players have a basic understanding in math and some computer science principles such as ASCII or binary numbers, but no in-depth programming background is required. The reasoning developed by this game has potential to introduce early algorithmic thinking useful for learning formal programming later. I think the puzzles also encourage a mindset for trying out solutions and iterating if they don’t work, which is akin to debugging — a core aspect of computational thinking.

![BirdLingo](/assets/images/games/braincode2.webp)
*The player types commands in the form of /text or /rotate and then hit run to solve puzzles. Some puzzles involve binary numbers and basic math.*


## Game Elements
- **Core Gameplay Loop:** Players face a puzzle challenge where they must select, arrange, or manipulate a series of commands to complete a task. They start by assessing the puzzle, deciding on a sequence of actions (e.g., moves, loops, conditional triggers). Trying some commands and observing the outcome and refining the sequence if it does not work based on the feedback until the puzzle is solved.
- **Inner Loop:** The trial-and-error process within individual puzzles — writing commands, testing them, and adjusting strategy.
- **Outer Loop:** As the player solves more puzzles, the levels become more complex and either introduce new mechanics or combine preexisting ones to have solutions using multiple commands.
- **Nouns:** puzzles, commands, obstacles, interactive objects.
- **Verbs:** test, write, solve, move, loop, rotate, activate, select
- **Player Experience:** The players actively test out their puzzle solutions and refine their designs if they do not work, using the effect their previous commands had on the puzzle to figure out the solution.


## Learning Mechanisms 
I think the game tries to emphasize memory and refinement. By encouraging players to interpret the consequences of each command they type, the game creates an environment where logical relationships are discovered through direct manipulation. Also, repeated exposure to similar puzzle types with gradually increasing complexity reinforces strategic adjustments and solution optimization.

- **Scaffolding:** The gradual introduction of new puzzle elements and mechanics allows learners to build on what they already understand without becoming overwhelmed.
- **Feedback:** Immediate feedback for the command the player types in helps solidify understanding, as players learn by “doing” and reflecting on their errors.
- **Segmenting:** The repetitive yet increasingly challenging levels help players internalize the core commands and strategies.


![BirdLingo](/assets/images/games/braincode1.webp)
*Bird puzzle on the right which made no sense to me. Hints in the middle, which the player (inlcuding me) can easily run out of. I rotation-based puzzle on the right which I found fun.*

## Overall Critique 
This game is not for people who want to develop their algorithmic thinking, but it is for people who enjoy racking their brain for  solutions to random puzzles. In my opinion,  it is frustrating to play and I believe fails as both a game and a learning experience. It’s design does not help keep players motivated as it is too challenging and non-sensical at times and there is no indication as to what is the correct answer once a command is run other than the fact that it is “wrong”. For example, there is a bird puzzle where the text says “rescue the bird” and the player needs to type in the command to change the theme to white in order to make the white bars dissapear. But I could not figure out this solution and tested many commands until I asked for a hint — and I am a computer scientist. There are hints, but the player can easily run out of them and then must think of other ways to progress in the game. Worse, there are no explicit in-game hints that connect puzzle strategy to broader real-world logic/coding principles, so there is a big risk that players might view success as puzzle-specific rather than transferring skills to other contexts outside of the puzzle.

The game does show promise in introducing algorithmic thinking in a (very) subtle, and enjoyable manner. By embedding logic and sequence planning into gameplay, it has the potential to build foundational skills that are relevant for later exposure to programming or systematic problem solving, such as ASCII, binary numbers, logical statements etc. However, its educational impact needs to be improved by providing more feedback and integrating more explicit links between the puzzle mechanics and broader outside principles. In its current form, while the game is somewhat engaging, the learning outcomes might remain implicit unless the player is already inclined to generalize these skills.



---