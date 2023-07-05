import React, { useEffect, useState } from "react";
import styled from "styled-components";

const quotes = [
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Simplicity is prerequisite for reliability.",
    author: "dsger W. Dijkstra",
  },
  {
    quote:
      "The best code is no code at all. Every new line of code you willingly bring into the world is code that has to be debugged, code that has to be read and understood, code that has to be supported. Every time you write new code, you should do so reluctantly, under duress, because you completely exhausted all your other options.",
    author: "Jeff Atwood",
  },
  {
    quote:
      "The fastest code is the code which does not run. The code easiest to maintain is the code that was never written.",
    author: "Robert Galanakis",
  },
  {
    quote: "Everything should be made as simple as possible, but not simpler",
    author: "Einstein",
  },
  {
    quote:
      "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    author: "Muhammad Waseem",
  },
  {
    quote:
      "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
    author: "Bill Gates",
  },
  {
    quote:
      "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
  },
  {
    quote: "If you want it, you can fly, you just have to trust you a lot.",
    author: "Steve Jobs",
  },
  {
    quote: "I want to put a ding in the universe.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Let's go invent tomorrow rather than worrying about what happened yesterday.",
    author: "Steve Jobs",
  },
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
  {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown",
  },
  {
    quote: "Life is a lively process of becoming.",
    author: "Gen. Douglas MacArthur",
  },
  {
    quote: "Life is what happens while you are busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "All great changes are preceded by chaos.",
    author: "Deepak Chopra",
  },
  {
    quote: "Change alone is eternal, perpetual, immortal",
    author: "Arthur Shopenhauer",
  },
  {
    quote: "By changing nothing, nothing changes.",
    author: "Tony Robbins",
  },
  {
    quote: "Change is inevitable. Growth is optional.",
    author: "John C. Maxwell",
  },
  {
    quote: "Change your thinking, change your life.",
    author: "Ernest Holmes",
  },
  {
    quote: "Failure is not fatal, but failure to change might be.",
    author: "John Wooden",
  },
  {
    quote: "Nothing is forever except change.",
    author: "Buddha",
  },
  {
    quote: "Just Do it. Now.",
    author: "Kang Seong Il",
  },
];

const Quote = () => {
  const [quoteData, setQuoteData] = useState({ quote: "", author: "" });

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuoteData(randomQuote);
  }, []);

  return (
    <QuoteSection>
      {quoteData.quote}
      {quoteData.author}
    </QuoteSection>
  );
};

const QuoteSection = styled.div`
  width: 80%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
export default Quote;
