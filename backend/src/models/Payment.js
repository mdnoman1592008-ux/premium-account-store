transactionId:{
  type:DataTypes.STRING,
  unique:true,
  allowNull:false
},

verifiedBy:{
  type:DataTypes.INTEGER
},

verifiedAt:{
  type:DataTypes.DATE
}
