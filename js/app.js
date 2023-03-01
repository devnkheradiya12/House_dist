const tbody = document.querySelector(".tbody");
const search = document.querySelector(".search");

fetch("./csv/main.csv", {})
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    // console.log(data);
    // for(let row of CSV.parse(data)) {
    //     console.log(row);
    // }
    let allTextLines = data.split(/\r\n|\n/);
    let entries = allTextLines[0].split(',');
    // console.log(entries);
    for (let i=1; i<200; i++){
        let entries = allTextLines[i].split(',');
        tbody.innerHTML += `
            <tr>
                <td>${entries[0]}</td>
                <td>${entries[1]}</td>
                <td>${entries[2]}</td>
                <td>${entries[3]}</td>
            </tr>
        `;
    }
  })
  .catch((err) => console.error(err));


search.addEventListener("keyup", (e)=>{
  e.preventDefault();
  console.log(e.target.value);
  fetch("../csv/main.csv", {})
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    let allTextLines = data.split(/\r\n|\n/);
    // let entries = allTextLines[0].split(',');
    for (let i=1; i<allTextLines.length; i++){
        let entries = allTextLines[i].split(',');
        if(entries[0] === (e.target.value)){
          tbody.innerHTML = `
            <tr>
                <td>${entries[0]}</td>
                <td>${entries[1]}</td>
                <td>${entries[2]}</td>
                <td>${entries[3]}</td>
            </tr>
        `;
        }
    }
  })
  .catch((err) => console.error(err));
});
