import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  answerIndex: null,
  answerIndexes: [null, null, null, null, null, null, null],
  questionNum: 0,
  heightScale: "FT",
  weightScale: "LBS",
  inputValue: {
    height_ft: "",
    height_in: "",
    height_cm: "",
    weight_current_lbs: "",
    weight_current_kg: "",
    weight_goal_lbs: "",
    weight_goal_kg: "",
  },
  code: "",
  aid: "",
  result: {
    token:
      "4978d1a83e27e5b4b39f7828c6f7cda8200b6fd917dd36c5cb0d3c15942090f7f93670042b7e72f56f0fe887c2ca33ec",
    code: "8e4f0dcae2162d33",
    title: "",
    dialogTitle: "",
    dialogDescription: "",
    forceDialog: "false",
    qid: "eghdamA1",
    type: "eghdam",
    questionType: "singleSelect",
    video: "",
    image: "",
    diagram: "",
    text: "برای اینکه در کوتاه ترین زمان ممکن باردار بشی و جنسیت فرزندت، همون چیزی که میخوای بشه، باید ریز به ریز شرایط خودت و همسرت رو بدونیم.\r\n\r\nهر چقدر با دقت بیشتری به سوالات پاسخ بدی، سریع تر باردار میشی و احتمال جنسیت مد نظرت بالاتر میره. پس با تمام دقتت به سوالات پاسخ بده.",
    hint: "",
    isResult: "false",
    answers: [
      {
        aid: "eA1",
        text: "ادامه",
      },
    ],
  },
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ANSWER_QUESTION:
      return updateObject(state, {
        answerIndex: action.index,
        answerIndexes: state.answerIndexes.map((item, index) => {
          // eslint-disable-next-line
          if (index == action.index) {
            return item === null ? action.index : null;
          } else {
            return item;
          }
        }),
      });
    case actionTypes.CHANGE_QUESTION_PAGE:
      return updateObject(state, {
        questionNum: state.questionNum + 1,
        answerIndex: null,
        answerIndexes: [null, null, null, null, null, null, null],
      });
    case actionTypes.RETURN_TO_PREVIUS_QUESTION:
      return updateObject(state, { questionNum: state.questionNum - 1 });
    case actionTypes.ON_SCALE_CHANGE:
      return updateObject(state, {
        heightScale: state.heightScale === "FT" ? "CM" : "FT",
        weightScale: state.weightScale === "LBS" ? "KG" : "LBS",
      });
    case actionTypes.ON_INPUT_CHANGE:
      return action.qNum === 2
        ? updateObject(state, {
            inputValue: {
              ...state.inputValue,
              height_cm:
                action.scale === "cm"
                  ? action.value
                  : state.inputValue.height_cm,
              height_ft:
                action.scale === "ft"
                  ? action.value
                  : state.inputValue.height_ft,
              height_in:
                action.scale === "in"
                  ? action.value
                  : state.inputValue.height_in,
            },
          })
        : action.qNum === 3
        ? updateObject(state, {
            inputValue: {
              ...state.inputValue,
              weight_current_lbs:
                action.scale === "lbs"
                  ? action.value
                  : state.inputValue.weight_current_lbs,
              weight_current_kg:
                action.scale === "kg"
                  ? action.value
                  : state.inputValue.weight_current_kg,
            },
          })
        : action.qNum === 4
        ? updateObject(state, {
            inputValue: {
              ...state.inputValue,
              weight_goal_lbs:
                action.scale === "lbs"
                  ? action.value
                  : state.inputValue.weight_goal_lbs,
              weight_goal_kg:
                action.scale === "kg"
                  ? action.value
                  : state.inputValue.weight_goal_kg,
            },
          })
        : state;
    case actionTypes.SAVE_FETCHED_DATA:
      return updateObject(state, {
        code: action.code,
        aid: action.aid,
        result: action.result,
      });
    default:
      return state;
  }
};

export default quizReducer;
