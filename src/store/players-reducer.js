let initialState = [{name:'john',position:'LF',bats:'R',throws:'L', team: 'CodeFellows',id:'123456abcdef123456abcdef'},
{ name: 'zach', position: 'C', bats: 'R', throws: 'R', team:'bunnies', id:'123456abcdef123456abcdek' }];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return state.filter(record => record._id===payload);
    case 'POST':
      return [...state, payload];

    case 'DELETE':
      return state.filter((record, idx) => idx !== payload);
    case 'PUT':
      return state.map((record, idx) =>
        idx === payload.id ? payload.record : record
      )
    case 'PATCH':
      return state.map((record, idx) =>
      idx === payload.id ? payload.record : record
    )
    default:
      return state;
  }
};
