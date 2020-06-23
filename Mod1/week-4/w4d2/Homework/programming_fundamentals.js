//COMMON PROGRAMMING PRINCIPLES

//DEFINE EACH:
//DRY:  Don't Repeat Yourself. . to avoid repetition. 
//As soon as you start repeating yourself create a new abstraction
//KISS:  Keep it Simple Silly = less to write, easier to modify, etc.
//Avoid creating a YAGNI:  Back to keeping it simple- don't add functionality until you need it.
//Do the simplest thing that could possibly work; ask you self this question regularly
//Don't make me think;  If there is too much code to think about and look through- it is probably too much period.
//Write code for the maintainer:  Always write for someone else.
//Single responsibility principle:  A class of code/function should perform one well-defined task.
//Avoid premature optimization:  make sure that you code works first ;)
//Separation of concerns:   Different forms of code should be managed with minimal overlapping.

//Which ones surprise you (if any)? KISS is redundant to DRY to me . .  but I like that code reuse is good!
//Which one is currently giving you the most struggle?  I just want my code to run. . but I am learning to embrace keeping it simple and I finally am grasping concepts.

/* const f = l => {
    let es = 0, p = 0, c = 1, n = 0
    while (c <= l) {
      n = c + p;
      [c, p] = [n, c]
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
  console.log(f(55))*/

  // Answer is 44.  .. this is an equation that I have to stare at longer- I am not understanding.


  /* const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55)) */

  // Answer is 44.  .. this is an equation that I have to start at longer.


  //Get help on this one. . . .

