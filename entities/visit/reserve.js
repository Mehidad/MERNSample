const mongoose= require("mongoose");


const reserveSchema = new mongoose.Schema({

  
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
      },
    patinetName:{
        type: String,
        require:true
    },
    hour:{
        type: String,
        require:true
    },
    visitDate:{
        type: Date,
        require:true
    },
    serviceType: {
        type: String,
        enum: ['Consultation', 'Follow-up', 'Surgery', 'Emergency'],
        required: true
      },
})

const Reserve = mongoose.model('Reserve', reserveSchema);
module.exports = Reserve;