import axios from "axios";
import { setError } from "../redux/actions/errorActions";
import { SUBSCRIBE_URL } from "../endpoints/endpoints"

const subscribeUser = (email) => dispatch => {
  const newSubscriber = {
    email: email,
    enabled: true,
    letterSubject: "Донат на Перемогу: підписка офромлена!",
    letterHtml: "<h1>Привіт! Твоя підписка успішно оформлена!</h1><p>Тепер ти вчасно дізнаєшся про актуальні новини, термінові збори та нові надходження продукції на сайті Донат на Перемогу.</p> <p>Робімо внески на Перемогу разом!</p>",
    date: new Date().toISOString()
  };

  return axios
    .post(SUBSCRIBE_URL, newSubscriber)
// ! do we need it?
    // .then(newSubscriber => {
    //   console.log(newSubscriber);
    // })
    .catch(err => {
      if (err.response && err.response.data) {
        if (err.response.data.message.includes("already exists")) {
          dispatch(setError(true));
        }
      }
      return Promise.reject(err);
    });
};

export default subscribeUser;