module.exports = (sequelize, Sequelize) => {
    const BankdetailSchema = sequelize.define("bankDetail", {
        bankId: {
            type: Sequelize.STRING,
        },
        userId: {
            type: Sequelize.STRING,
        },
        bankAccountName: {
            type: Sequelize.STRING,
        },
        bankName: {
            type: Sequelize.STRING,
        },
        bankAccountNumber: {
            type: Sequelize.STRING,
        },
        ifscCode: {
            type: Sequelize.STRING,
        },
        MICRcode: {
            type: Sequelize.STRING,
        },
        branchAddress: {
            type: Sequelize.STRING,
        },
        bankdetailDoc: {
            type: Sequelize.STRING,        
        }
    })
    return BankdetailSchema;
}
