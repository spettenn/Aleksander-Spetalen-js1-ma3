//Question 2
//Make a call to the following API endpoint:
//https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating
//Loop through the results and display the following properties in HTML, but only for the first eight results:
//name
//rating
//number of tags (not the tag details, just the amount of tags)
//The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.
//Be sure to handle any potential errors in the code.
//You can use either regular promise or async/await syntax to make the call.
document.querySelector('.loading').innerHTML = ` <img
 src="https://media2.giphy.com/media/3o7bu3XilJ5BOiSGic/200w.webp?cid=ecf05e47evmy7bxr08cqn6w2q28g1eejagtz04nn43s6xa5m&rid=200w.webp"
/>`;

async function getCars() {
  
  try {
    const repsonse = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
    const jsonResult = await repsonse.json();
    console.log(jsonResult);
    const final = jsonResult.results
    console.log(final)
    console.log(final.length)
    
      for (let i = 0; i < 8; i++) {
      document.querySelector('main').innerHTML += `
      <div class="card">
      <p>${[i].name}</p>
      <p>Rating: ${[i].rating}</p>
      <p>Number of tags: ${[i].tags}</p>
      </div>
      `;
    };
  }
  catch (error) {
    console.log(error);
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'Error',
      'danger'
      ); 
}
finally {
  document.querySelector('.loading').classList.add('hide');
}
}

getCars();