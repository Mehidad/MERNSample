const Reserve = require('../entities/visit/reserve');
const mongoose= require("mongoose");
const OutPutModel = require("../utilities/ouptputModel")
class ReserveModel {

    static getReserves= async (req) => {
      const { page = 1, limit = 10, doctorId, visitDate } = req.query;
      // Build query object
      let query = {};
      if (doctorId) {
          query.doctor = doctorId;
      }
      if (visitDate) {
          query.visitDate = new Date(visitDate);
      }
      const total = await Reserve.countDocuments(query);
      const reservations = await Reserve.find(query)
      .populate('doctor')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
   
        return OutPutModel(201,"successfully",{ totalPages: Math.ceil(total / limit),
          currentPage: page,
          reservations})
      };

      static insertReserve = async (req) => {
       
        const { doctor, patientName, hour, visitDate, serviceType } = req;
       
        if (!mongoose.Types.ObjectId.isValid(doctor)) {
           // return res.status(400).send({ error: "Invalid Doctor ID format" });
           return OutPutModel(400,"Invalid Doctor ID format",[])
          }
          const reserve = new Reserve({
            doctor,
            patientName,
            hour,
            visitDate,
            serviceType
          });
         
          await reserve.save();
          
        return OutPutModel(201,"successfully",reserve)
      };

static UpdateReserve=async (req)=>{
  const updatedReservation = await Reserve.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedReservation) return OutPutModel(404,"Reservation not found",[]);
  return OutPutModel(200, 'Reservation updated successfully', [updatedReservation]);

};

static deleteReserve= async (req)=>{
  const deletedReservation = await Reserve.findByIdAndDelete(req.params.id);
        if (!deletedReservation) return OutPutModel(404, 'Reservation not found',[]);
        return OutPutModel(200, 'Reservation Delete successfully', []);
}

}
module.exports = ReserveModel