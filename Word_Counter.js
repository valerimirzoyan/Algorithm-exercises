<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Text Analyzer</title>
    <style>
      /* Define styles for HTML elements */
      #text-input {
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
        font-size: 16px;
        padding: 10px;
        box-sizing: border-box;
      }
      #count-results {
        display: flex;
        flex-wrap: wrap;
      }
      .count-box {
        flex-basis: 25%;
        text-align: center;
      }
      .count-box h2 {
        margin: 0;
      }
      .count-box p {
        margin: 5px 0 0 0;
      }
      body {
        background-color: #1d1d1d;
        color: #fff;
      }
      #text-input {
        background-color: #2b2b2b;
        color: #fff;
        border: 1px solid #333;
      }
      #analyze-button, #cleanup-button, #bg-color1-button, #bg-color2-button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        margin: 5px;
      }
      #analyze-button { background-color: #008CBA; color: #fff; }
      #analyze-button:hover { background-color: #007095; }
      #cleanup-button { background-color: #f44336; color: #fff; }
      #cleanup-button:hover { background-color: #d32f2f; }
      #bg-color1-button { background-color: #1d1d1d; color: #ffffff; }
      #bg-color2-button { background-color: #ffffff; color: #000000; }
      .count-box {
        background-color: #2b2b2b;
        border: 1px solid #333;
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div>
      <textarea id="text-input" placeholder="Enter text to analyze"></textarea>
      <button id="analyze-button">Analyze</button>
      <button id="cleanup-button">Cleanup</button>
    </div>
    <div id="count-results"></div>
    <div>
      <button id="bg-color1-button">Background color 1</button>
      <button id="bg-color2-button">Background color 2</button>
    </div>
    <script>
      document.querySelector('#analyze-button').addEventListener('click', analyzeText);
      document.querySelector('#cleanup-button').addEventListener('click', () => {
        document.querySelector('#text-input').value = '';
        document.querySelector('#count-results').innerHTML = '';
      });
      document.querySelector('#bg-color1-button').addEventListener('click', () => {
        document.body.style.backgroundColor = '#1d1d1d';
      });
      document.querySelector('#bg-color2-button').addEventListener('click', () => {
        document.body.style.backgroundColor = '#ffffff';
      });
      
      function analyzeText() {
        let text = document.querySelector('#text-input').value;
        let letterCount = text.replace(/\s/g, "").replace(/[^\w]/g, "").length;
        let wordCount = text.trim() ? text.split(/\s+|[,.]/).filter(Boolean).length : 0;
        let sentenceCount = text.split(/[.?!]/g).filter(Boolean).length;
        let uppercaseCount = (text.match(/[A-Z]/g) || []).length;
        let vowelCount = (text.match(/[aeiouAEIOU]/g) || []).length;
        
        document.querySelector('#count-results').innerHTML = `
          <div class="count-box"><h2>Letters</h2><p>${letterCount}</p></div>
          <div class="count-box"><h2>Words</h2><p>${wordCount}</p></div>
          <div class="count-box"><h2>Sentences</h2><p>${sentenceCount}</p></div>
          <div class="count-box"><h2>Uppercase Letters</h2><p>${uppercaseCount}</p></div>
          <div class="count-box"><h2>Vowels</h2><p>${vowelCount}</p></div>
        `;
      }
    </script>
  </body>
</html>
