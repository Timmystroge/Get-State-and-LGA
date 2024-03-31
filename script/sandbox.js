//Fetch all States
fetch("https://nga-states-lga.onrender.com/fetch")
  .then((res) => res.json())
  .then((data) => {
    console.log("States is fetched");
    let states = document.getElementById("state"); /* target the state tag */
    let lengthOfArray = data.length; /* get the ength of the array */

    /* iterate through the state result from the api */
    data.forEach((state) => {
      /* this will return the 36 states */
      let selectOptions = document.createElement("option");
      selectOptions.text = state;
      selectOptions.value = state;
      states.add(selectOptions);
    });
  });

//Fetch Local Goverments based on selected state
const getState = document.getElementById("state");
getState.addEventListener("change", (e) => {
  let selectedState = e.target.value;

  fetch("https://nga-states-lga.onrender.com/?state=" + selectedState)
    .then((res) => res.json())
    .then((data) => {
      console.log("LGA is fetched");
      let selectLGA = document.getElementById("lga");

      let select = document.getElementById("lga");
      /* removes all existing options from the "lga" dropdown */
      let length = select.options.length;
      for (i = length - 1; i >= 0; i--) {
        select.options[i] = null;
      }

      /* iterate through the state result from the api */
      data.forEach((state) => {
        /* this will return the 36 states */
        let selectOptions = document.createElement("option");
        selectOptions.text = state;
        selectOptions.value = state;
        selectLGA.add(selectOptions);
      });
    });
});
