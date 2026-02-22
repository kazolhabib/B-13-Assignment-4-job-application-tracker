## Answers to Questions
------------------------
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
Ans: <br>
getElementById()<br>
১। শুধু একটা নির্দিষ্ট id দিয়ে element নেয়।<br>
২। সবসময় একটি element রিটার্ন করে।<br>
<br>
getElementsByClassName()
১। একটি class এর সব element নেয়
২। এটি একটি HTMLCollection দেয় (array এর মতো)

querySelector()
১।CSS selector দিয়ে প্রথম matching element নেয়

querySelectorAll()
১। CSS selector দিয়ে সব matching element নেয়
২। NodeList রিটার্ন করে

2. How do you create and insert a new element into the DOM?
Ans:
১। Create element
const newDiv = document.createElement("div");
২। Content যোগ করা
newDiv.textContent = "Hello World";
৩। DOM এ বসানো
document.body.appendChild(newDiv);

3. What is Event Bubbling? And how does it work?
Ans:
একটা child element এ event হলে সেটা parent এর দিকে উপরে উঠতে থাকে।
<div id="parent">
  <button id="child">Click</button>
</div>
যদি button এ click করি,
তাহলে event আগে button এ যাবে, তারপর parent এ যাবে।
মানে event নিচ থেকে উপরে যায়, এটাকেই বলে bubbling।

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
parent element এ event listener বসিয়ে child element এর event handle করা।

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault()
এটা default behaviour বন্ধ করে।
stopPropagation()
এটা event bubbling বন্ধ করে।