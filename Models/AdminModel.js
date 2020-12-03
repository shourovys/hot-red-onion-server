const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    adminEmail: {
        type: String,
        require: true
    }
});

const AdminEmail = mongoose.model('adminEmail', adminSchema);

module.exports = AdminEmail;
