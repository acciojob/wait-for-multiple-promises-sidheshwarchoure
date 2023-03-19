//your JS code here. If required.
const promises = [];
  const table = document.querySelector('table');

  for (let i = 1; i <= 3; i++) {
    const promise = new Promise((resolve) => {
      const time = Math.floor(Math.random() * 3000) + 1000;
      setTimeout(() => {
        resolve(time / 1000);
      }, time);
    });
    promises.push(promise);
  }

  Promise.all(promises)
    .then((times) => {
      table.innerHTML = `
        <tr>
          <td>Promise 1</td>
          <td>${times[0]}</td>
        </tr>
        <tr>
          <td>Promise 2</td>
          <td>${times[1]}</td>
        </tr>
        <tr>
          <td>Promise 3</td>
          <td>${times[2]}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>${(times.reduce((acc, time) => acc + time, 0)).toFixed(3)}</td>
        </tr>
      `;
    });