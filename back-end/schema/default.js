
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = require('graphql');

//定义导航Schema类型
var GraphQLNav = new GraphQLObjectType({
    name:'nav',
    fields:{
      title:{type:GraphQLString},
      url:  {type:GraphQLString},
      sort: {type:GraphQLInt},
      status:{type:GraphQLInt},
      add_time:{type:GraphQLString}
    }
})

//定义根
var queryRoot = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
        navList:{
            type:GraphQLList(GraphQLNav),
            async resolve(){
                return [ {
                   title:"导航1",
                   url:"/url1",
                   sort: 1,
                   status:200,
                   add_time:"5.29"
                 },
                 {
                    title:"导航2",
                    url:"/url2",
                    sort: 2,
                    status:200,
                    add_time:"5.29"
                  },
                ]
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:queryRoot
})