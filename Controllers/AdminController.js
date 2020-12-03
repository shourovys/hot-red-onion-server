const AdminEmail = require('../Models/AdminModel');

const adminController = {};

adminController.addAdmin = async (req, res) => {
    const { adminEmail } = req.params;
    console.log('🚀 ~ ~ adminEmail', adminEmail);
    try {
        const admin = await AdminEmail.find({ adminEmail });
        if (admin) {
            const newAdminEmail = new AdminEmail(req.body);
            await newAdminEmail.save();
            res.send(true);
        } else {
            res.send(false);
        }
    } catch (error) {
        console.log(error);
    }
};
adminController.isAdmin = async (req, res) => {
    const { userEmail } = req.params;
    try {
        const admin = await AdminEmail.find({ adminEmail: userEmail });
        if (admin.length > 0) {
            res.send(true);
        } else {
            res.send(false);
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = adminController;
