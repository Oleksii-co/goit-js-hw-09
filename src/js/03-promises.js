// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// const form = document.querySelector(".form")
// let delay = document.getElementsByName("delay");
// const step = document.getElementsByName("step");
// const amount = document.getElementsByName("amount");



// form.addEventListener('submit', onSubmitBtnClick)

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }
// function onSubmitBtnClick(evt) {
//   evt.preventDefault();
//     for (let position = 1; position <= amount.value; position += 1) {
//       createPromise(position, delay.value)
//         .then(({ position, delay }) => {
//           console.log(`:white_check_mark: Fulfilled promise ${position} in ${delay}ms`);
//         })
//         .catch(({ position, delay }) => {
//           console.log(`:x: Rejected promise ${position} in ${delay}ms`);
//         })
//       delay.value += step.value;
//     }
//   }



// const submitBtn = document.querySelector('button');
// const delay = document.querySelector('.delay');
// const step = document.querySelector('.step');
// const amount = document.querySelector('.amount');


// submitBtn.addEventListener('click', onBtn);

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }
// function onBtn(e) {
//    e.preventDefault();
//   for (let position = 1; position <= amount.value; position += 1) {
//     createPromise(position, delay.value)
//       .then(({ position, delay }) => {
//         console.log(`:white_check_mark: Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`:x: Rejected promise ${position} in ${delay}ms`);
//       })
//     delay.value += step.value;
//   }
// };



const formEl = document.querySelector('.form');
 const delayEl= document.querySelector('[name="delay"]');
 const stepEl= document.querySelector('[name="step"]');
 const amountEl= document.querySelector('[name="amount"]');

formEl.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(evt) {
  evt.preventDefault();

  const { amount, delay, step } = evt.target.elements;
  let currentDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => onSuccess({ position, delay }))
      .catch(({ position, delay }) => onError({ position, delay }));
    currentDelay += Number(step.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function onSuccess({ position, delay }) {
        console.log(`:white_check_mark: Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
   console.log(`:x: Rejected promise ${position} in ${delay}ms`);
}