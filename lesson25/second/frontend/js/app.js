async function getData() {
  const res = await fetch("http://localhost:3000/tasks");
  const data = await res.json();
  console.log(data);
}

window.onload = getData;

const form = document.querySelector(".form");
form.addEventListener("submit", async function (e) {
  const taskName = document.querySelector(".taskname");
  const taskStatus = document.querySelector(".status");
  const taskTime = document.querySelector(".deadline");
  e.preventDefault();

  const sendData = {
    name: taskName.value,
    status: taskStatus.value,
    date: taskTime.value,
  };
  console.log(sendData);

  try {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });
    if (res.status === 201) {
      getData();
    }
  } catch (error) {
    console.log(error);
  }
});
async function sendData(e) {}
