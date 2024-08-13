const Reserve = require('../entities/visit/reserve');

class ReserveModel {

    static getReserves= async () => {
        const Reserve = await Reserve.find().populate('doctor');
       
        return Reserve;
      };

      static insertReserve = async (req,res) => {
       
        const { doctor, patientName, hour, visitDate, serviceType } = req;
        if (!mongoose.Types.ObjectId.isValid(doctor)) {
            return res.status(400).send({ error: "Invalid Doctor ID format" });
          }
          const reserve = new Reserve({
            doctor,
            patientName,
            hour,
            visitDate,
            serviceType
          });
          console.log(reserve);
          await reserve.save();
        return  res.status(201).send(reserve);

        
      };
}
module.exports = ReserveModel