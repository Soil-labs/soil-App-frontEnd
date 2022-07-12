export default function findMemberQuery(fields) {
  return {
    data: {
      query: `query{
        findMember(fields:{
          _id: "${fields.id}"
        }){
          _id
          discordName
        }
      }`,
    },
  };
}
