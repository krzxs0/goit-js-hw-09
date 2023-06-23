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

  createNewPromises(formInfo);
}

async function createNewPromises({ delay, step, amount }) {
  let currentDelay = delay;

  for (let position = 1; position <= amount; position++) {
    try {
      const result = await createPromise({ position, delay: currentDelay });
      onSuccess(result);
    } catch (error) {
      onError(error);
    }
    currentDelay += step;
  }
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
  console.log(`Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  console.error(`Rejected promise ${position} in ${delay}ms`);
}
