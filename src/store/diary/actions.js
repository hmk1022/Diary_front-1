import axios from "axios";
//import { mutations } from "./mutations";
import { config } from "../../config";
import { mutations } from "../diary/mutations";


export const actions = {
  getDetail({state}, payload) {
    console.log("diary_no : ",payload );
    axios
      .post(`${config.localUrl}/diary/detail/${payload}`)
      .then((res) => {
        console.log("응답값 : ", res);
        mutations.SET_DIARY_DETAIL(state, res)
        
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
