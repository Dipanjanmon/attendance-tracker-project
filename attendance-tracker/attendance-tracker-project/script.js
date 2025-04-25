function fetchAttendance() {
  const roll = document.getElementById('rollInput').value;
  if (!roll) {
    document.getElementById('result').innerText = "Please enter your roll number.";
    return;
  }

  fetch(`http://localhost:8080/attendance?roll=${roll}`)
    .then(res => res.text())
    .then(data => {
      document.getElementById('result').innerText = data;
    })
    .catch(err => {
      console.error(err);
      document.getElementById('result').innerText = "Error fetching data. Please try again.";
    });
}
