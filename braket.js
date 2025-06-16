loadBrackets(); 
function loadBrackets() {
  fetch('https://back-end-y49i.onrender.com/api/data')
    .then(res => res.json())
    .then(data => {
      $('#tournament').bracket({ init: data });
    })
    .catch(error => console.error('Error loading tournament:', error));

  fetch('https://back-end-y49i.onrender.com/api/tada')
    .then(res => res.json())
    .then(data => {
      $('#tournament2').bracket({ init: data }); // ใช้ข้อมูลจาก API
    })
    .catch(error => console.error('Error loading tournament2:', error));

  fetch('https://back-end-y49i.onrender.com/api/oneonone')
    .then(res => res.json())
    .then(data => {
      $('#tournament3').bracket({ init: data }); // ใช้ข้อมูลจาก API
    })
    .catch(error => console.error('Error loading tournament3:', error));
}
