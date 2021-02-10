<!DOCTYPE html>
<html>
<body>
	<h2> Hey! I'm Jacob </h2>

I'm a PhD student at the University of Edinburgh. I work on statistical and machine learning techniques to analyse cancer genomics data, amidst other bits and pieces of fun stuff. I mostly code in R and Python. You can find my academic website <a href = "https://www.maths.ed.ac.uk/~s1505825/">here</a>. 

PhD Progress:
<b>|</b>||||||||||||||||||||||||||||||||||||||||>----------------------------------------------------------- <b>|</b> <br> 40.7%

<div id="myProgress">
  <div id="myBar"></div>
</div>

<br>
<button onclick="move()">Click Me</button>

<script>
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
</script>


</body>
</html>


<!--
**cobrbra/cobrbra** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
