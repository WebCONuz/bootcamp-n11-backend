// GET DATA ----------------------------------------
async function getData() {
  const tbody = document.querySelector("tbody");
  const res = await fetch("http://localhost:3000/tasks");
  const data = await res.json();
  let writeHtmlData = "";
  data.forEach((item) => {
    writeHtmlData += `
      <tr>
        <td>${item?.id}</td>
        <td>${item?.name}</td>
        <td>${item?.date}</td>
        <td>${item?.status}</td>
        <td>
          <div class="action">
            <i class="bx bx-edit"></i>
            <i class="bx bx-trash delete"></i>
          </div>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = writeHtmlData;
  getDataByIdForEdit();
  writedeleteEvent();
}
window.onload = getData;

// POST DATA -----------------------------------------
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
      taskName.value = "";
      taskStatus.value = "";
      taskTime.value = "";
    }
  } catch (error) {
    console.log(error);
  }
});

// Open-Close modal -----------------------------------
const modal = document.querySelector(".modal");
const openModal = () => {
  modal.classList.add("active");
};
const closeBtn = document.querySelector(".bx-x");
const closeModal = () => {
  modal.classList.remove("active");
};
closeBtn.addEventListener("click", closeModal);

// PUT DATA --------------------------------------------
// Get data by Id
let dataID = 0;
const taskName = document.querySelector(".taskname2");
const taskStatus = document.querySelector(".status2");
const taskTime = document.querySelector(".deadline2");
function getDataByIdForEdit() {
  editBtns = document.querySelectorAll(".bx-edit");
  editBtns.forEach((item, index) => {
    item.addEventListener("click", async () => {
      dataID = index + 1;
      const res = await fetch(`http://localhost:3000/tasks/${dataID}`);
      const getData = await res.json();

      if (getData.status == "OK") {
        taskName.value = getData?.data?.name || "";
        taskStatus.value = getData?.data?.status || "";
        taskTime.value = getData?.data?.date || "";
        openModal();
      } else {
        alert("Bunday Task mavjud emas!");
      }
    });
  });
}
// update
const updateForm = document.querySelector(".updateForm");
updateForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const updatedData = {
    name: taskName.value,
    status: taskStatus.value,
    date: taskTime.value,
  };

  try {
    const res = await fetch(`http://localhost:3000/tasks/${dataID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (res.status === 200) {
      getData();
      closeModal();
    }
  } catch (error) {
    console.log(error);
  }
});

// DELETE DATA ------------------------------------------
function writedeleteEvent() {
  editBtns = document.querySelectorAll(".delete");
  editBtns.forEach((item, index) => {
    item.addEventListener("click", async function () {
      const res = await fetch(`http://localhost:3000/tasks/${index + 1}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.status == "OK") {
        getData();
        console.log("++");
      } else {
        alert("Ma'lumotni o'chirishda xatolik!");
      }
    });
  });
}
