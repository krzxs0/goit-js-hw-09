const form = document.querySelector('.form');
form.addEventListener('submit', onBtnClick);

function onBtnClick(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formInfo = Object.fromEntries(formData.entries());
  formInfo.position = parseInt(formInfo.position);
  formInfo.delay = parseInt(formInfo.delay);
  formInfo.step = parseInt(formInfo.step);
  formInfo.amount = parseInt(formInfo.amount);

  createNewPromises(formInfo)
    .then((results) => {
      results.forEach(onSuccess);
    })
    .catch(onError);
}

function createNewPromises({ delay, step, amount }) {
  return new Promise((resolve, reject) => {
    let currentDelay = delay;
    const results = [];

    function iterate(position) {
      if (position > amount) {
        resolve(results);
        return;
      }

      createPromise({ position, delay: currentDelay })
        .then((result) => {
          results.push(result);
          onSuccess(result);
        })
        .catch((error) => {
          results.push(error);
          onError(error);
        })
        .finally(() => {
          currentDelay += step;
          iterate(position + 1);
        });
    }

    iterate(1);
  });
}

function createPromise({ position, delay }) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  console.log(`Resolve promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  console.error(`Rejected promise ${position} in ${delay}ms`);
}
