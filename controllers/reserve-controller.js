const { result } = require("underscore");
const ReserveModel = require("../models/reserve-model");
const { tryCatchHandler } = require('../utilities/trycatch_handler');



// const getRese = tryCatchHandler(async (req, res) => {

//   const result = await CoursesModel.getCourse(parseInt(req.params.id));
//   if (!result) res.status(404).send("course with given id not found");
//   res.send(result);

// }) ;

const getReserves = tryCatchHandler(async (req, res) => {
    const result = await  ReserveModel.getReserves()
    res.send(result);
}) ;

const insertReserve = (req, res) => {
  console.log(req.body);
 
  ReserveModel.insertReserve(req.body,res).then((result) => res.send(result));
};

// const updateCourse = (req, res) => {
//   CoursesModel.getCourse(parseInt(req.params.id)).then((result) => {
//     if (!result) return res.status(404).send("course with given id not found");
//   });
//   //const course = courses.find((c) => c.id === parseInt(req.params.id));

//   if (!req.body.name || req.body.name.length < 3)
//     return res.status(400).send("name is required and more than 3 charachter");

//   CoursesModel.updateCourse(parseInt(req.params.id), req.body.name).then(
//     (result) => {
//       res.send(result);
//     }
//   );
// };

// const deleteCourse = (req, res) => {
//   CoursesModel.getCourse(parseInt(req.params.id)).then((result) => {
//     if (!result) return res.status(404).send("course with given id not found");
//   });
//   CoursesModel.deleteCourse(parseInt(req.params.id)).then((rsult) => {
//     res.send(result);
//   });
// };

module.exports = {
 
    getReserves,
  insertReserve,
 
};
